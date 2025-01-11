import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { OrderFulfiller, OrderFulfillerInterface } from "../../../../seaport-core/src/lib/OrderFulfiller";
type OrderFulfillerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OrderFulfiller__factory extends ContractFactory {
    constructor(...args: OrderFulfillerConstructorParams);
    getDeployTransaction(conduitController: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(conduitController: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<OrderFulfiller & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): OrderFulfiller__factory;
    static readonly bytecode = "0x610200604052348015610010575f80fd5b506040516107c23803806107c283398101604081905261002f916102ff565b8080808080808061003e610162565b610120526101005260e05260c081905260a082815246610140819052604080515f9485526020879052948152606091825230608090815292842085825293909152939052610160526001600160a01b038316610180819052630a96ad3960e01b825282519092630a96ad3992600480820193918290030181865afa1580156100c8573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906100ec919061032c565b506101a052505f90506100fd610288565b90506001600160a01b03811661012657604051632aea588760e01b815260040160405180910390fd5b5f610130826102a1565b8015156101c0526001600160a01b0383166101e05290508061015557600163929eee14555b50505050505050506103c0565b5f808080808061019260408051808201909152600d81526c21b7b739b4b232b930ba34b7b760991b602082015290565b8051906020012095506040518060400160405280600381526020016218971b60e91b8152508051906020012094505f6040518060a00160405280606a8152602001610758606a913990505f6040518060c00160405280608481526020016105ae6084913990505f60405180610100016040528060d4815260200161068460d4913990506040518060800160405280605281526020016106326052913980519060200120965082805190602001209550818051906020012094505f8183856040516020016102619392919061037b565b60405160208183030381529060405290508080519060200120945050505050909192939495565b5f696002601e613d5c3d52f35f52600a60165ff0905090565b5f816001600160a01b0316600a5a6102b991906103a1565b6040515f8181818686fa925050503d805f81146102f1576040519150601f19603f3d011682016040523d82523d5f602084013e6102f6565b606091505b50909392505050565b5f6020828403121561030f575f80fd5b81516001600160a01b0381168114610325575f80fd5b9392505050565b5f806040838503121561033d575f80fd5b505080516020909101519092909150565b5f81515f5b8181101561036d5760208185018101518683015201610353565b505f93019283525090919050565b5f61039861039261038c848861034e565b8661034e565b8461034e565b95945050505050565b5f826103bb57634e487b7160e01b5f52601260045260245ffd5b500490565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161018b6104235f395f608d01525f604201525f50505f50505f50505f50505f50505f50505f50505f50505f50505f505061018b5ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c80637423eb3c1461002d575b5f80fd5b610035610037565b005b63929eee14546001147f00000000000000000000000000000000000000000000000000000000000000008061006a575080155b1561008857604051630f45b98b60e41b815260040160405180910390fd5b6100b17f00000000000000000000000000000000000000000000000000000000000000006100d8565b6100ce576040516370a4078f60e01b815260040160405180910390fd5b5f63929eee145550565b5f816001600160a01b0316600a5a6100f09190610136565b6040515f8181818686fa925050503d805f8114610128576040519150601f19603f3d011682016040523d82523d5f602084013e61012d565b606091505b50909392505050565b5f8261015057634e487b7160e01b5f52601260045260245ffd5b50049056fea26469706673582212209b2a54dacc9f6a84c6a04b0fc4438fb0177d80cf7d42961f8a9576dccdd6e99a64736f6c63430008180033436f6e73696465726174696f6e4974656d2875696e7438206974656d547970652c6164647265737320746f6b656e2c75696e74323536206964656e7469666965724f7243726974657269612c75696e74323536207374617274416d6f756e742c75696e7432353620656e64416d6f756e742c6164647265737320726563697069656e7429454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e7472616374294f72646572436f6d706f6e656e74732861646472657373206f6666657265722c61646472657373207a6f6e652c4f666665724974656d5b5d206f666665722c436f6e73696465726174696f6e4974656d5b5d20636f6e73696465726174696f6e2c75696e7438206f72646572547970652c75696e7432353620737461727454696d652c75696e7432353620656e6454696d652c62797465733332207a6f6e65486173682c75696e743235362073616c742c6279746573333220636f6e647569744b65792c75696e7432353620636f756e746572294f666665724974656d2875696e7438206974656d547970652c6164647265737320746f6b656e2c75696e74323536206964656e7469666965724f7243726974657269612c75696e74323536207374617274416d6f756e742c75696e7432353620656e64416d6f756e7429";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduitController";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "BadContractSignature";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "BadFraction";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "BadReturnValueFromERC20OnTransfer";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }];
        readonly name: "BadSignatureV";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotCancelOrder";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ConsiderationCriteriaResolverOutOfRange";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ConsiderationLengthNotEqualToTotalOriginal";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "orderIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "considerationIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "shortfallAmount";
            readonly type: "uint256";
        }];
        readonly name: "ConsiderationNotMet";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CriteriaNotEnabledForItem";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "identifiers";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }];
        readonly name: "ERC1155BatchTransferGenericFailure";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InexactFraction";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientNativeTokensSupplied";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Invalid1155BatchTransferEncoding";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidBasicOrderParameterEncoding";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }];
        readonly name: "InvalidCallToConduit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "conduitKey";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }];
        readonly name: "InvalidConduit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "orderHash";
            readonly type: "bytes32";
        }];
        readonly name: "InvalidContractOrder";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "InvalidERC721TransferAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "InvalidMsgValue";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidNativeOfferItem";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidProof";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "orderHash";
            readonly type: "bytes32";
        }];
        readonly name: "InvalidRestrictedOrder";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidSignature";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidSigner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "startTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "endTime";
            readonly type: "uint256";
        }];
        readonly name: "InvalidTime";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MissingItemAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MissingOriginalConsiderationItems";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "NativeTokenTransferGenericFailure";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "NoContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoReentrantCalls";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSpecifiedOrdersAvailable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OfferCriteriaResolverOutOfRange";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "orderHash";
            readonly type: "bytes32";
        }];
        readonly name: "OrderAlreadyFilled";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum Side";
            readonly name: "side";
            readonly type: "uint8";
        }];
        readonly name: "OrderCriteriaResolverOutOfRange";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "orderHash";
            readonly type: "bytes32";
        }];
        readonly name: "OrderIsCancelled";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "orderHash";
            readonly type: "bytes32";
        }];
        readonly name: "OrderPartiallyFilled";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PartialFillsNotEnabledForOrder";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TStoreAlreadyActivated";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TStoreNotSupported";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TloadTestContractDeploymentFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "identifier";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "TokenTransferGenericFailure";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "orderIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "considerationIndex";
            readonly type: "uint256";
        }];
        readonly name: "UnresolvedConsiderationCriteria";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "orderIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "offerIndex";
            readonly type: "uint256";
        }];
        readonly name: "UnresolvedOfferCriteria";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnusedItemParameters";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newCounter";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "offerer";
            readonly type: "address";
        }];
        readonly name: "CounterIncremented";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "orderHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "offerer";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "zone";
            readonly type: "address";
        }];
        readonly name: "OrderCancelled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "orderHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "offerer";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "zone";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "enum ItemType";
                readonly name: "itemType";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "identifier";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly indexed: false;
            readonly internalType: "struct SpentItem[]";
            readonly name: "offer";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "enum ItemType";
                readonly name: "itemType";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "identifier";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "address payable";
                readonly name: "recipient";
                readonly type: "address";
            }];
            readonly indexed: false;
            readonly internalType: "struct ReceivedItem[]";
            readonly name: "consideration";
            readonly type: "tuple[]";
        }];
        readonly name: "OrderFulfilled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "orderHash";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "offerer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "zone";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "enum ItemType";
                    readonly name: "itemType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "identifierOrCriteria";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "startAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "endAmount";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct OfferItem[]";
                readonly name: "offer";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "enum ItemType";
                    readonly name: "itemType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "identifierOrCriteria";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "startAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "endAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address payable";
                    readonly name: "recipient";
                    readonly type: "address";
                }];
                readonly internalType: "struct ConsiderationItem[]";
                readonly name: "consideration";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "enum OrderType";
                readonly name: "orderType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint256";
                readonly name: "startTime";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "endTime";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes32";
                readonly name: "zoneHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "salt";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes32";
                readonly name: "conduitKey";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalOriginalConsiderationItems";
                readonly type: "uint256";
            }];
            readonly indexed: false;
            readonly internalType: "struct OrderParameters";
            readonly name: "orderParameters";
            readonly type: "tuple";
        }];
        readonly name: "OrderValidated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32[]";
            readonly name: "orderHashes";
            readonly type: "bytes32[]";
        }];
        readonly name: "OrdersMatched";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "__activateTstore";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): OrderFulfillerInterface;
    static connect(address: string, runner?: ContractRunner | null): OrderFulfiller;
}
export {};