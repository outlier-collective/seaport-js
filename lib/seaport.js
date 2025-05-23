"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seaport = void 0;
const ethers_1 = require("ethers");
const constants_1 = require("./constants");
const approval_1 = require("./utils/approval");
const balanceAndApprovalCheck_1 = require("./utils/balanceAndApprovalCheck");
const bulk_orders_1 = require("./utils/eip712/bulk-orders");
const fulfill_1 = require("./utils/fulfill");
const item_1 = require("./utils/item");
const order_1 = require("./utils/order");
const usecase_1 = require("./utils/usecase");
const typechain_types_1 = require("./typechain-types");
class Seaport {
    /**
     * @param providerOrSigner - The provider or signer to use for web3-related calls
     * @param considerationConfig - A config to provide flexibility in the usage of Seaport
     */
    constructor(providerOrSigner, smartAccount, { overrides, 
    // Five minute buffer
    ascendingAmountFulfillmentBuffer = 300, balanceAndApprovalChecksOnOrderCreation = true, conduitKeyToConduit, } = {}) {
        this.OPENSEA_CONDUIT_KEY = constants_1.OPENSEA_CONDUIT_KEY;
        /**
         * Calculates the order hash of order components so we can forgo executing a request to the contract
         * This saves us RPC calls and latency.
         */
        this.getOrderHash = (orderComponents) => {
            const offerItemTypeString = "OfferItem(uint8 itemType,address token,uint256 identifierOrCriteria,uint256 startAmount,uint256 endAmount)";
            const considerationItemTypeString = "ConsiderationItem(uint8 itemType,address token,uint256 identifierOrCriteria,uint256 startAmount,uint256 endAmount,address recipient)";
            const orderComponentsPartialTypeString = "OrderComponents(address offerer,address zone,OfferItem[] offer,ConsiderationItem[] consideration,uint8 orderType,uint256 startTime,uint256 endTime,bytes32 zoneHash,uint256 salt,bytes32 conduitKey,uint256 counter)";
            const orderTypeString = `${orderComponentsPartialTypeString}${considerationItemTypeString}${offerItemTypeString}`;
            const offerItemTypeHash = ethers_1.ethers.keccak256(ethers_1.ethers.toUtf8Bytes(offerItemTypeString));
            const considerationItemTypeHash = ethers_1.ethers.keccak256(ethers_1.ethers.toUtf8Bytes(considerationItemTypeString));
            const orderTypeHash = ethers_1.ethers.keccak256(ethers_1.ethers.toUtf8Bytes(orderTypeString));
            const offerHash = ethers_1.ethers.keccak256("0x" +
                orderComponents.offer
                    .map((offerItem) => {
                    return ethers_1.ethers
                        .keccak256("0x" +
                        [
                            offerItemTypeHash.slice(2),
                            offerItem.itemType.toString().padStart(64, "0"),
                            offerItem.token.slice(2).padStart(64, "0"),
                            ethers_1.ethers
                                .toBeHex(offerItem.identifierOrCriteria)
                                .slice(2)
                                .padStart(64, "0"),
                            ethers_1.ethers
                                .toBeHex(offerItem.startAmount)
                                .slice(2)
                                .padStart(64, "0"),
                            ethers_1.ethers
                                .toBeHex(offerItem.endAmount)
                                .slice(2)
                                .padStart(64, "0"),
                        ].join(""))
                        .slice(2);
                })
                    .join(""));
            const considerationHash = ethers_1.ethers.keccak256("0x" +
                orderComponents.consideration
                    .map((considerationItem) => {
                    return ethers_1.ethers
                        .keccak256("0x" +
                        [
                            considerationItemTypeHash.slice(2),
                            considerationItem.itemType.toString().padStart(64, "0"),
                            considerationItem.token.slice(2).padStart(64, "0"),
                            ethers_1.ethers
                                .toBeHex(considerationItem.identifierOrCriteria)
                                .slice(2)
                                .padStart(64, "0"),
                            ethers_1.ethers
                                .toBeHex(considerationItem.startAmount)
                                .slice(2)
                                .padStart(64, "0"),
                            ethers_1.ethers
                                .toBeHex(considerationItem.endAmount)
                                .slice(2)
                                .padStart(64, "0"),
                            considerationItem.recipient.slice(2).padStart(64, "0"),
                        ].join(""))
                        .slice(2);
                })
                    .join(""));
            const derivedOrderHash = ethers_1.ethers.keccak256("0x" +
                [
                    orderTypeHash.slice(2),
                    orderComponents.offerer.slice(2).padStart(64, "0"),
                    orderComponents.zone.slice(2).padStart(64, "0"),
                    offerHash.slice(2),
                    considerationHash.slice(2),
                    orderComponents.orderType.toString().padStart(64, "0"),
                    ethers_1.ethers.toBeHex(orderComponents.startTime).slice(2).padStart(64, "0"),
                    ethers_1.ethers.toBeHex(orderComponents.endTime).slice(2).padStart(64, "0"),
                    orderComponents.zoneHash.slice(2),
                    ethers_1.ethers.toBeHex(orderComponents.salt).slice(2).padStart(64, "0"),
                    orderComponents.conduitKey.slice(2).padStart(64, "0"),
                    ethers_1.ethers.toBeHex(orderComponents.counter).slice(2).padStart(64, "0"),
                ].join(""));
            return derivedOrderHash;
        };
        const provider = "provider" in providerOrSigner
            ? providerOrSigner.provider
            : providerOrSigner;
        this.signer =
            "getAddress" in providerOrSigner
                ? providerOrSigner
                : undefined;
        if (!provider) {
            throw new Error("Either a provider or custom signer with provider must be provided");
        }
        this.provider = provider;
        this.smartAccount = smartAccount;
        const seaportVersion = overrides?.seaportVersion ?? constants_1.SEAPORT_CONTRACT_VERSION_V1_6;
        const seaportContractAddress = overrides?.contractAddress ?? constants_1.CROSS_CHAIN_SEAPORT_V1_6_ADDRESS;
        this.contract = typechain_types_1.Seaport__factory.connect(seaportContractAddress, this.provider);
        const domainRegistryContractAddress = overrides?.domainRegistryAddress ?? constants_1.DOMAIN_REGISTRY_ADDRESS;
        this.domainRegistry = typechain_types_1.DomainRegistry__factory.connect(domainRegistryContractAddress, this.provider);
        this.config = {
            ascendingAmountFulfillmentBuffer,
            balanceAndApprovalChecksOnOrderCreation,
            conduitKeyToConduit: {
                ...constants_1.KNOWN_CONDUIT_KEYS_TO_CONDUIT,
                [constants_1.NO_CONDUIT]: seaportContractAddress,
                ...conduitKeyToConduit,
            },
            seaportVersion,
        };
        this.defaultConduitKey = overrides?.defaultConduitKey ?? constants_1.NO_CONDUIT;
    }
    /**
     * Returns a use case that will create an order.
     * The use case will contain the list of actions necessary to finish creating an order.
     * The list of actions will either be an approval if approvals are necessary
     * or a signature request that will then be supplied into the final Order struct, ready to be fulfilled.
     *
     * @param input
     * @param input.conduitKey The conduitKey key to derive where to source your approvals from. Defaults to 0 which refers to the Seaport contract.
     *                         Another special value is address(1) will refer to the legacy proxy. All other must derive to the specified address.
     * @param input.zone The zone of the order. Defaults to the zero address.
     * @param input.startTime The start time of the order. Defaults to the current unix time.
     * @param input.endTime The end time of the order. Defaults to "never end".
     *                      It is HIGHLY recommended to pass in an explicit end time
     * @param input.offer The items you are willing to offer. This is a condensed version of the Seaport struct OfferItem for convenience
     * @param input.consideration The items that will go to their respective recipients upon receiving your offer.
     * @param input.counter The counter from which to create the order with. Automatically fetched from the contract if not provided
     * @param input.allowPartialFills Whether to allow the order to be partially filled
     * @param input.restrictedByZone Whether the order should be restricted by zone
     * @param input.fees Convenience array to apply fees onto the order. The fees will be deducted from the
     *                   existing consideration items and then tacked on as new consideration items
     * @param input.domain An optional domain to be hashed and included in the first four bytes of the random salt.
     * @param input.salt Arbitrary salt. If not passed in, a random salt will be generated with the first four bytes being the domain hash or empty.
     * @param input.offerer The order's creator address. Defaults to the first address on the provider.
     * @param accountAddress Optional address for which to create the order with
     * @param exactApproval optional boolean to indicate whether the approval should be exact or not
     * @returns a use case containing the list of actions needed to be performed in order to create the order
     */
    async createOrder(input, accountAddress, exactApproval) {
        const signer = await this._getSigner(accountAddress);
        let offerer = accountAddress;
        if (!offerer) {
            if (!!this.smartAccount && !!this.smartAccount.account) {
                offerer = this.smartAccount.account.address;
            }
            else {
                offerer = await signer.getAddress();
            }
        }
        const { orderComponents, approvalActions } = await this._formatOrder(signer, offerer, Boolean(exactApproval), input);
        const createOrderAction = {
            type: "create",
            getMessageToSign: () => {
                return this._getMessageToSign(orderComponents);
            },
            createOrder: async () => {
                const signature = await this.signOrder(orderComponents, offerer);
                return {
                    parameters: orderComponents,
                    signature,
                };
            },
        };
        const actions = [...approvalActions, createOrderAction];
        return {
            actions,
            executeAllActions: () => (0, usecase_1.executeAllActions)(actions),
        };
    }
    /**
     * Returns a use case that will create bulk orders.
     * The use case will contain the list of actions necessary to finish creating the orders.
     * The list of actions will either be an approval if approvals are necessary
     * or a signature request that will then be supplied into the final orders, ready to be fulfilled.
     *
     * @param input See {@link createOrder} for more details about the input parameters.
     * @param exactApproval optional boolean to indicate whether the approval should be exact or not
     * @returns a use case containing the list of actions needed to be performed in order to create the orders
     */
    async createBulkOrders(createOrderInput, accountAddress, exactApproval) {
        const signer = await this._getSigner(accountAddress);
        let offerer = accountAddress;
        if (!offerer) {
            if (!!this.smartAccount && !!this.smartAccount.account) {
                offerer = this.smartAccount.account.address;
            }
            else {
                offerer = await signer.getAddress();
            }
        }
        const offererCounter = await this.getCounter(offerer);
        const allApprovalActions = [];
        const allOrderComponents = [];
        for (const input of createOrderInput) {
            input.counter ?? (input.counter = offererCounter);
            const { orderComponents, approvalActions } = await this._formatOrder(signer, offerer, Boolean(exactApproval), input);
            allOrderComponents.push(orderComponents);
            // Dedupe approvals by token address
            for (const approval of approvalActions) {
                if (allApprovalActions.find((a) => a.token === approval.token) ===
                    undefined) {
                    allApprovalActions.push(approval);
                }
            }
        }
        const createBulkOrdersAction = {
            type: "createBulk",
            getMessageToSign: () => {
                return this._getBulkMessageToSign(allOrderComponents);
            },
            createBulkOrders: async () => {
                const orders = await this.signBulkOrder(allOrderComponents, offerer);
                return orders;
            },
        };
        const actions = [...allApprovalActions, createBulkOrdersAction];
        return {
            actions,
            executeAllActions: () => (0, usecase_1.executeAllActions)(actions),
        };
    }
    /**
     * Formats an order for creation.
     */
    async _formatOrder(signer, offerer, exactApproval, { conduitKey = this.defaultConduitKey, zone = ethers_1.ethers.ZeroAddress, zoneHash = ethers_1.ethers.ZeroHash, startTime = Math.floor(Date.now() / 1000).toString(), endTime = constants_1.MAX_INT.toString(), offer, consideration, counter, allowPartialFills, restrictedByZone, fees, domain, salt, }) {
        const offerItems = offer.map(order_1.mapInputItemToOfferItem);
        const considerationItems = [
            ...consideration.map((consideration) => ({
                ...(0, order_1.mapInputItemToOfferItem)(consideration),
                recipient: consideration.recipient ?? offerer,
            })),
        ];
        if (fees?.length &&
            !(0, order_1.areAllCurrenciesSame)({
                offer: offerItems,
                consideration: considerationItems,
            })) {
            throw new Error("All currency tokens in the order must be the same token when applying fees");
        }
        const currencies = [...offerItems, ...considerationItems].filter(item_1.isCurrencyItem);
        const totalCurrencyAmount = (0, order_1.totalItemsAmount)(currencies);
        const operator = this.config.conduitKeyToConduit[conduitKey];
        const orderType = this._getOrderTypeFromOrderOptions({
            allowPartialFills,
            restrictedByZone,
        });
        const considerationItemsWithFees = [
            ...(0, order_1.deductFees)(considerationItems, fees),
            ...(currencies.length
                ? fees?.map((fee) => (0, order_1.feeToConsiderationItem)({
                    fee,
                    token: currencies[0].token,
                    baseAmount: totalCurrencyAmount.startAmount,
                    baseEndAmount: totalCurrencyAmount.endAmount,
                })) ?? []
                : []),
        ];
        const saltFollowingConditional = salt !== undefined
            ? `0x${ethers_1.ethers.toBeHex(salt).slice(2).padStart(64, "0")}`
            : (0, order_1.generateRandomSalt)(domain);
        const orderComponents = {
            offerer,
            zone,
            zoneHash,
            startTime,
            endTime,
            orderType,
            offer: offerItems,
            consideration: considerationItemsWithFees,
            totalOriginalConsiderationItems: considerationItemsWithFees.length,
            salt: saltFollowingConditional,
            conduitKey,
            counter: (counter ?? (await this.getCounter(offerer))).toString(),
        };
        const approvalActions = [];
        if (this.config.balanceAndApprovalChecksOnOrderCreation) {
            const balancesAndApprovals = await (0, balanceAndApprovalCheck_1.getBalancesAndApprovals)({
                owner: offerer,
                items: offerItems,
                criterias: [],
                provider: this.provider,
                operator,
            });
            const insufficientApprovals = (0, balanceAndApprovalCheck_1.validateOfferBalancesAndApprovals)({
                offer: offerItems,
                criterias: [],
                balancesAndApprovals,
                throwOnInsufficientBalances: true,
                operator,
            });
            const approvals = (0, approval_1.getApprovalActions)(insufficientApprovals, exactApproval, signer);
            approvalActions.push(...approvals);
        }
        return { orderComponents, approvalActions };
    }
    async _getSigner(accountAddress) {
        if (this.signer) {
            return this.signer;
        }
        if (!("send" in this.provider)) {
            throw new Error("Either signer or JsonRpcProvider with signer must be provided");
        }
        return this.provider.getSigner(accountAddress);
    }
    /**
     * Returns the corresponding order type based on whether it allows partial fills and is restricted by zone
     *
     * @param input
     * @param input.allowPartialFills Whether or not the order can be partially filled
     * @param input.restrictedByZone Whether or not the order can only be filled/cancelled by the zone
     * @returns the order type
     */
    _getOrderTypeFromOrderOptions({ allowPartialFills, restrictedByZone, }) {
        if (allowPartialFills) {
            return restrictedByZone
                ? constants_1.OrderType.PARTIAL_RESTRICTED
                : constants_1.OrderType.PARTIAL_OPEN;
        }
        return restrictedByZone ? constants_1.OrderType.FULL_RESTRICTED : constants_1.OrderType.FULL_OPEN;
    }
    /**
     * Returns the domain data used when signing typed data
     * @returns domain data
     */
    async _getDomainData() {
        const { chainId } = await this.provider.getNetwork();
        return {
            name: constants_1.SEAPORT_CONTRACT_NAME,
            version: this.config.seaportVersion,
            chainId: Number(chainId),
            verifyingContract: (await this.contract.getAddress()),
        };
    }
    /**
     * Returns a raw message to be signed using EIP-712
     * @param orderParameters order parameter struct
     * @returns JSON string of the message to be signed
     */
    async _getMessageToSign(orderComponents) {
        const domainData = await this._getDomainData();
        return JSON.stringify(ethers_1.TypedDataEncoder.getPayload(domainData, constants_1.EIP_712_ORDER_TYPE, orderComponents));
    }
    /**
     * Returns a raw bulk order message to be signed using EIP-712
     * @param orderParameters order parameter struct
     * @param counter counter of the order
     * @returns JSON string of the message to be signed
     */
    async _getBulkMessageToSign(orderComponents) {
        const domainData = await this._getDomainData();
        const tree = (0, bulk_orders_1.getBulkOrderTree)(orderComponents);
        const bulkOrderType = tree.types;
        const chunks = tree.getDataToSign();
        return JSON.stringify(ethers_1.TypedDataEncoder.getPayload(domainData, bulkOrderType, { tree: chunks }));
    }
    /**
     * Submits a request to your provider to sign the order. Signed orders are used for off-chain order books.
     * @param orderComponents standard order parameter struct
     * @param accountAddress optional account address from which to sign the order with.
     * @returns the order signature
     */
    async signOrder(orderComponents, accountAddress) {
        const domainData = await this._getDomainData();
        let signature = "";
        if (!!this.smartAccount && !!this.smartAccount.account) {
            signature = await this.smartAccount.signTypedData({
                account: this.smartAccount.account,
                domain: domainData,
                types: constants_1.EIP_712_ORDER_TYPE,
                primaryType: "OrderComponents",
                message: orderComponents,
            });
        }
        else {
            const signer = await this._getSigner(accountAddress);
            signature = await signer.signTypedData(domainData, constants_1.EIP_712_ORDER_TYPE, orderComponents);
        }
        // Use EIP-2098 compact signatures to save gas.
        if (signature.length === 132) {
            signature = ethers_1.ethers.Signature.from(signature).compactSerialized;
        }
        return signature;
    }
    /**
     * Submits a request to your provider to sign the bulk order. Signed orders are used for off-chain order books.
     * @param orderComponents standard order components struct
     * @param accountAddress optional account address from which to sign the order with.
     * @returns the orders with their signatures
     */
    async signBulkOrder(orderComponents, accountAddress) {
        const domainData = await this._getDomainData();
        const tree = (0, bulk_orders_1.getBulkOrderTree)(orderComponents);
        const bulkOrderType = tree.types;
        const chunks = tree.getDataToSign();
        const value = { tree: chunks };
        let signature = "";
        if (!!this.smartAccount && !!this.smartAccount.account) {
            signature = await this.smartAccount.signTypedData({
                account: this.smartAccount.account,
                domain: domainData,
                types: bulkOrderType,
                primaryType: "BulkOrder",
                message: value,
            });
        }
        else {
            const signer = await this._getSigner(accountAddress);
            signature = await signer.signTypedData(domainData, bulkOrderType, value);
        }
        // Use EIP-2098 compact signatures to save gas.
        if (signature.length === 132) {
            signature = ethers_1.ethers.Signature.from(signature).compactSerialized;
        }
        const orders = orderComponents.map((parameters, i) => ({
            parameters,
            signature: tree.getEncodedProofAndSignature(i, signature),
        }));
        return orders;
    }
    /**
     * Cancels a list of orders so that they are no longer fulfillable.
     *
     * @param orders list of order components
     * @param accountAddress optional account address from which to cancel the orders from.
     * @param domain optional domain to be hashed and appended to calldata
     * @param overrides any transaction overrides the client wants, ignored if not set
     * @returns the set of transaction methods that can be used
     */
    cancelOrders(orders, accountAddress, domain, overrides) {
        return (0, usecase_1.getTransactionMethods)(this._getSigner(accountAddress), this.contract, "cancel", [orders, overrides], domain);
    }
    /**
     * Bulk cancels all existing orders for a given account
     * @param offerer the account to bulk cancel orders on
     * @param domain optional domain to be hashed and appended to calldata
     * @param overrides any transaction overrides the client wants, ignored if not set
     * @returns the set of transaction methods that can be used
     */
    bulkCancelOrders(offerer, domain, overrides) {
        return (0, usecase_1.getTransactionMethods)(this._getSigner(offerer), this.contract, "incrementCounter", [overrides], domain);
    }
    /**
     * Approves a list of orders on-chain. This allows accounts to fulfill the order without requiring
     * a signature. Can also check if an order is valid using `staticCall`
     * @param orders list of order structs
     * @param accountAddress optional account address to approve orders.
     * @param domain optional domain to be hashed and appended to calldata
     * @param overrides any transaction overrides the client wants, ignored if not set
     * @returns the set of transaction methods that can be used
     */
    validate(orders, accountAddress, domain, overrides) {
        return (0, usecase_1.getTransactionMethods)(this._getSigner(accountAddress), this.contract, "validate", [orders, overrides], domain);
    }
    /**
     * Returns the order status given an order hash
     * @param orderHash the hash of the order
     * @returns an order status struct
     */
    async getOrderStatus(orderHash) {
        const result = await this.contract.getOrderStatus(orderHash);
        const [isValidated, isCancelled, totalFilled, totalSize] = result;
        return { isValidated, isCancelled, totalFilled, totalSize };
    }
    /**
     * Gets the counter of a given offerer
     * @param offerer the offerer to get the counter of
     * @returns counter as a number
     */
    getCounter(offerer) {
        return this.contract.getCounter(offerer);
    }
    /**
     * Fulfills an order through either the basic method or the standard method
     * Units to fill are denominated by the max possible size of the order, which is the greatest common denominator (GCD).
     * We expose a helper to get this: getMaximumSizeForOrder
     * i.e. If the maximum size of an order is 4, supplying 2 as the units to fulfill will fill half of the order: ;
     * @param input
     * @param input.order The standard order struct
     * @param input.unitsToFill the number of units to fill for the given order. Only used if you wish to partially fill an order
     * @param input.offerCriteria an array of criteria with length equal to the number of offer criteria items
     * @param input.considerationCriteria an array of criteria with length equal to the number of consideration criteria items
     * @param input.tips an array of optional condensed consideration items to be added onto a fulfillment
     * @param input.extraData extra data supplied to the order
     * @param input.accountAddress optional address from which to fulfill the order from
     * @param input.conduitKey the conduitKey to source approvals from
     * @param input.recipientAddress optional recipient to forward the offer to as opposed to the fulfiller.
     *                               Defaults to the zero address which means the offer goes to the fulfiller
     * @param input.domain optional domain to be hashed and appended to calldata
     * @param input.exactApproval optional boolean to indicate whether the approval should be exact or not
     * @param input.overrides any transaction overrides the client wants, ignored if not set
     * @returns a use case containing the set of approval actions and fulfillment action
     */
    async fulfillOrder({ order, unitsToFill, offerCriteria = [], considerationCriteria = [], tips = [], extraData = "0x", accountAddress, conduitKey = this.defaultConduitKey, recipientAddress = ethers_1.ethers.ZeroAddress, domain, exactApproval = false, overrides, }) {
        if (!order.signature) {
            throw new Error("Order is missing signature");
        }
        const { parameters: orderParameters } = order;
        const { offerer, offer, consideration } = orderParameters;
        const fulfiller = await this._getSigner(accountAddress);
        const fulfillerAddress = !!this.smartAccount && !!this.smartAccount.account
            ? this.smartAccount.account.address
            : await fulfiller.getAddress();
        const offererOperator = this.config.conduitKeyToConduit[orderParameters.conduitKey];
        const fulfillerOperator = this.config.conduitKeyToConduit[conduitKey];
        const [offererBalancesAndApprovals, fulfillerBalancesAndApprovals, currentBlock, orderStatus,] = await Promise.all([
            (0, balanceAndApprovalCheck_1.getBalancesAndApprovals)({
                owner: offerer,
                items: offer,
                criterias: offerCriteria,
                provider: this.provider,
                operator: offererOperator,
            }),
            // Get fulfiller balances and approvals of all items in the set, as offer items
            // may be received by the fulfiller for standard fulfills
            (0, balanceAndApprovalCheck_1.getBalancesAndApprovals)({
                owner: fulfillerAddress,
                items: [...offer, ...consideration],
                criterias: [...offerCriteria, ...considerationCriteria],
                provider: this.provider,
                operator: fulfillerOperator,
            }),
            this.provider.getBlock("latest"),
            this.getOrderStatus(this.getOrderHash(orderParameters)),
        ]);
        const currentBlockTimestamp = currentBlock.timestamp;
        (0, fulfill_1.scaleOrderStatusToMaxUnits)(order, orderStatus);
        const { totalFilled, totalSize } = orderStatus;
        const sanitizedOrder = (0, fulfill_1.validateAndSanitizeFromOrderStatus)(order, orderStatus);
        const timeBasedItemParams = {
            startTime: sanitizedOrder.parameters.startTime,
            endTime: sanitizedOrder.parameters.endTime,
            currentBlockTimestamp,
            ascendingAmountTimestampBuffer: this.config.ascendingAmountFulfillmentBuffer,
        };
        const tipConsiderationItems = tips.map((tip) => ({
            ...(0, order_1.mapInputItemToOfferItem)(tip),
            recipient: tip.recipient,
        }));
        const isRecipientSelf = recipientAddress === ethers_1.ethers.ZeroAddress;
        // We use basic fulfills as they are more optimal for simple and "hot" use cases
        // We cannot use basic fulfill if user is trying to partially fill though.
        if (!unitsToFill &&
            isRecipientSelf &&
            (0, fulfill_1.shouldUseBasicFulfill)(sanitizedOrder.parameters, totalFilled) &&
            extraData === "0x") {
            // TODO: Use fulfiller proxy if there are approvals needed directly, but none needed for proxy
            return (0, fulfill_1.fulfillBasicOrder)({
                order: sanitizedOrder,
                seaportContract: this.contract,
                offererBalancesAndApprovals,
                fulfillerBalancesAndApprovals,
                timeBasedItemParams,
                conduitKey,
                offererOperator,
                fulfillerOperator,
                signer: fulfiller,
                tips: tipConsiderationItems,
                domain,
                overrides,
            }, exactApproval);
        }
        // Else, we fallback to the standard fulfill order
        return (0, fulfill_1.fulfillStandardOrder)({
            order: sanitizedOrder,
            unitsToFill,
            totalFilled,
            totalSize,
            offerCriteria,
            considerationCriteria,
            tips: tipConsiderationItems,
            extraData,
            seaportContract: this.contract,
            offererBalancesAndApprovals,
            fulfillerBalancesAndApprovals,
            timeBasedItemParams,
            conduitKey,
            signer: fulfiller,
            offererOperator,
            fulfillerOperator,
            recipientAddress,
            domain,
            overrides,
        }, exactApproval);
    }
    /**
     * Fulfills an order through best-effort fashion. Orders that fail will not revert the whole transaction
     * unless there's an issue with approvals or balance checks
     * @param input
     * @param input.fulfillOrderDetails list of helper order details
     * @param input.accountAddress the account to fulfill orders on
     * @param input.conduitKey the key from which to source approvals from
     * @param input.recipientAddress optional recipient to forward the offer to as opposed to the fulfiller.
     *                               Defaults to the zero address which means the offer goes to the fulfiller
     * @param input.domain optional domain to be hashed and appended to calldata
     * @param input.exactApproval optional boolean to indicate whether the approval should be exact or not
     * @returns a use case containing the set of approval actions and fulfillment action
     */
    async fulfillOrders({ fulfillOrderDetails, accountAddress, conduitKey = this.defaultConduitKey, recipientAddress = ethers_1.ethers.ZeroAddress, domain, exactApproval = false, }) {
        if (fulfillOrderDetails.some((orderDetails) => !orderDetails.order.signature)) {
            throw new Error("All orders must include signatures");
        }
        const fulfiller = await this._getSigner(accountAddress);
        const fulfillerAddress = !!this.smartAccount && !!this.smartAccount.account
            ? this.smartAccount.account.address
            : await fulfiller.getAddress();
        const allOffererOperators = fulfillOrderDetails.map(({ order }) => this.config.conduitKeyToConduit[order.parameters.conduitKey]);
        const fulfillerOperator = this.config.conduitKeyToConduit[conduitKey];
        const allOfferItems = fulfillOrderDetails.flatMap(({ order }) => order.parameters.offer);
        const allConsiderationItems = fulfillOrderDetails.flatMap(({ order }) => order.parameters.consideration);
        const allOfferCriteria = fulfillOrderDetails.flatMap(({ offerCriteria = [] }) => offerCriteria);
        const allConsiderationCriteria = fulfillOrderDetails.flatMap(({ considerationCriteria = [] }) => considerationCriteria);
        const [offerersBalancesAndApprovals, fulfillerBalancesAndApprovals, currentBlock, orderStatuses,] = await Promise.all([
            Promise.all(fulfillOrderDetails.map(({ order, offerCriteria = [] }, i) => (0, balanceAndApprovalCheck_1.getBalancesAndApprovals)({
                owner: order.parameters.offerer,
                items: order.parameters.offer,
                criterias: offerCriteria,
                operator: allOffererOperators[i],
                provider: this.provider,
            }))),
            // Get fulfiller balances and approvals of all items in the set, as offer items
            // may be received by the fulfiller for standard fulfills
            (0, balanceAndApprovalCheck_1.getBalancesAndApprovals)({
                owner: fulfillerAddress,
                items: [...allOfferItems, ...allConsiderationItems],
                criterias: [...allOfferCriteria, ...allConsiderationCriteria],
                operator: fulfillerOperator,
                provider: this.provider,
            }),
            this.provider.getBlock("latest"),
            Promise.all(fulfillOrderDetails.map(({ order }) => this.getOrderStatus(this.getOrderHash(order.parameters)))),
        ]);
        const ordersMetadata = fulfillOrderDetails.map((orderDetails, index) => {
            const order = {
                order: orderDetails.order,
                unitsToFill: orderDetails.unitsToFill,
                orderStatus: (0, fulfill_1.scaleOrderStatusToMaxUnits)(orderDetails.order, orderStatuses[index]),
                offerCriteria: orderDetails.offerCriteria ?? [],
                considerationCriteria: orderDetails.considerationCriteria ?? [],
                tips: orderDetails.tips?.map((tip) => ({
                    ...(0, order_1.mapInputItemToOfferItem)(tip),
                    recipient: tip.recipient,
                })) ?? [],
                extraData: orderDetails.extraData ?? "0x",
                offererBalancesAndApprovals: offerersBalancesAndApprovals[index],
                offererOperator: allOffererOperators[index],
            };
            return order;
        });
        return (0, fulfill_1.fulfillAvailableOrders)({
            ordersMetadata,
            seaportContract: this.contract,
            fulfillerBalancesAndApprovals,
            currentBlockTimestamp: currentBlock.timestamp,
            ascendingAmountTimestampBuffer: this.config.ascendingAmountFulfillmentBuffer,
            fulfillerOperator,
            signer: fulfiller,
            conduitKey,
            recipientAddress,
            domain,
            exactApproval,
        });
    }
    /**
     * NOTE: Largely incomplete. Does NOT do any balance or approval checks.
     * Just exposes the bare bones matchOrders where clients will have to supply
     * their own overrides as needed.
     * @param input
     * @param input.orders the list of orders to match
     * @param input.fulfillments the list of fulfillments to match offer and considerations
     * @param input.overrides any transaction overrides the client wants, will need to pass in value for matching orders with ETH.
     * @param input.accountAddress Optional address for which to match the order with
     * @param input.domain optional domain to be hashed and appended to calldata
     * @returns set of transaction methods for matching orders
     */
    matchOrders({ orders, fulfillments, overrides, accountAddress, domain, }) {
        return (0, usecase_1.getTransactionMethods)(this._getSigner(accountAddress), this.contract, "matchOrders", [orders, fulfillments, overrides], domain);
    }
    /**
     * Set a domain on the canonical domain registry.
     * @param domain The domain to set
     * @param accountAddress Address to send the transaction from
     * @param overrides Any transaction overrides the client wants, ignored if not set
     * @returns The domain tag (4 byte keccak hash of the domain)
     */
    setDomain(domain, accountAddress, overrides) {
        return (0, usecase_1.getTransactionMethods)(this._getSigner(accountAddress), this.domainRegistry, "setDomain", [domain, overrides]);
    }
    /**
     * Get the number of domains registered under a domain tag.
     * @param tag The domain tag.
     * @returns The number of domains registered under the tag.
     */
    getNumberOfDomains(tag) {
        return this.domainRegistry.getNumberOfDomains(tag);
    }
    /**
     * Gets the domain at a given index under a domain tag.
     * @param tag The domain tag.
     * @param index The index.
     * @returns The domain at the index for the given tag.
     */
    getDomain(tag, index) {
        return this.domainRegistry.getDomain(tag, index);
    }
    /**
     * Gets the domains registered under a tag.
     * @param tag The domain tag.
     * @returns The domains registered under the tag.
     */
    async getDomains(tag) {
        try {
            return this.domainRegistry.getDomains(tag);
        }
        catch (error) {
            // If there are too many domains set under the tag, it will revert when trying to return in memory.
            // This fallback will manually query each index to get the full list of domains.
            const totalDomains = await this.domainRegistry.getNumberOfDomains(tag);
            const domainArray = Promise.all([...Array(Number(totalDomains)).keys()].map((i) => this.domainRegistry.getDomain(tag, i)));
            return await domainArray;
        }
    }
}
exports.Seaport = Seaport;
//# sourceMappingURL=seaport.js.map