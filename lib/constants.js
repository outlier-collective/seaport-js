"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMAIN_REGISTRY_ADDRESS = exports.KNOWN_CONDUIT_KEYS_TO_CONDUIT = exports.NO_CONDUIT = exports.ONE_HUNDRED_PERCENT_BP = exports.MAX_INT = exports.BasicOrderRouteType = exports.Side = exports.ItemType = exports.OrderType = exports.EIP_712_BULK_ORDER_TYPE = exports.EIP_712_ORDER_TYPE = exports.OPENSEA_CONDUIT_ADDRESS = exports.OPENSEA_CONDUIT_KEY = exports.CROSS_CHAIN_SEAPORT_V1_5_ADDRESS = exports.CROSS_CHAIN_SEAPORT_V1_6_ADDRESS = exports.SEAPORT_CONTRACT_VERSION_V1_6 = exports.SEAPORT_CONTRACT_NAME = void 0;
const ethers_1 = require("ethers");
exports.SEAPORT_CONTRACT_NAME = "Seaport";
exports.SEAPORT_CONTRACT_VERSION_V1_6 = "1.6";
exports.CROSS_CHAIN_SEAPORT_V1_6_ADDRESS = "0x0000000000000068F116a894984e2DB1123eB395";
exports.CROSS_CHAIN_SEAPORT_V1_5_ADDRESS = "0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC";
exports.OPENSEA_CONDUIT_KEY = "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000";
exports.OPENSEA_CONDUIT_ADDRESS = "0x1e0049783f008a0085193e00003d00cd54003c71";
exports.EIP_712_ORDER_TYPE = {
    OrderComponents: [
        { name: "offerer", type: "address" },
        { name: "zone", type: "address" },
        { name: "offer", type: "OfferItem[]" },
        { name: "consideration", type: "ConsiderationItem[]" },
        { name: "orderType", type: "uint8" },
        { name: "startTime", type: "uint256" },
        { name: "endTime", type: "uint256" },
        { name: "zoneHash", type: "bytes32" },
        { name: "salt", type: "uint256" },
        { name: "conduitKey", type: "bytes32" },
        { name: "counter", type: "uint256" },
    ],
    OfferItem: [
        { name: "itemType", type: "uint8" },
        { name: "token", type: "address" },
        { name: "identifierOrCriteria", type: "uint256" },
        { name: "startAmount", type: "uint256" },
        { name: "endAmount", type: "uint256" },
    ],
    ConsiderationItem: [
        { name: "itemType", type: "uint8" },
        { name: "token", type: "address" },
        { name: "identifierOrCriteria", type: "uint256" },
        { name: "startAmount", type: "uint256" },
        { name: "endAmount", type: "uint256" },
        { name: "recipient", type: "address" },
    ],
};
exports.EIP_712_BULK_ORDER_TYPE = {
    BulkOrder: [{ name: "tree", type: "OrderComponents[2][2][2][2][2][2][2]" }],
    OrderComponents: [
        { name: "offerer", type: "address" },
        { name: "zone", type: "address" },
        { name: "offer", type: "OfferItem[]" },
        { name: "consideration", type: "ConsiderationItem[]" },
        { name: "orderType", type: "uint8" },
        { name: "startTime", type: "uint256" },
        { name: "endTime", type: "uint256" },
        { name: "zoneHash", type: "bytes32" },
        { name: "salt", type: "uint256" },
        { name: "conduitKey", type: "bytes32" },
        { name: "counter", type: "uint256" },
    ],
    OfferItem: [
        { name: "itemType", type: "uint8" },
        { name: "token", type: "address" },
        { name: "identifierOrCriteria", type: "uint256" },
        { name: "startAmount", type: "uint256" },
        { name: "endAmount", type: "uint256" },
    ],
    ConsiderationItem: [
        { name: "itemType", type: "uint8" },
        { name: "token", type: "address" },
        { name: "identifierOrCriteria", type: "uint256" },
        { name: "startAmount", type: "uint256" },
        { name: "endAmount", type: "uint256" },
        { name: "recipient", type: "address" },
    ],
};
var OrderType;
(function (OrderType) {
    OrderType[OrderType["FULL_OPEN"] = 0] = "FULL_OPEN";
    OrderType[OrderType["PARTIAL_OPEN"] = 1] = "PARTIAL_OPEN";
    OrderType[OrderType["FULL_RESTRICTED"] = 2] = "FULL_RESTRICTED";
    OrderType[OrderType["PARTIAL_RESTRICTED"] = 3] = "PARTIAL_RESTRICTED";
})(OrderType || (exports.OrderType = OrderType = {}));
var ItemType;
(function (ItemType) {
    ItemType[ItemType["NATIVE"] = 0] = "NATIVE";
    ItemType[ItemType["ERC20"] = 1] = "ERC20";
    ItemType[ItemType["ERC721"] = 2] = "ERC721";
    ItemType[ItemType["ERC1155"] = 3] = "ERC1155";
    ItemType[ItemType["ERC721_WITH_CRITERIA"] = 4] = "ERC721_WITH_CRITERIA";
    ItemType[ItemType["ERC1155_WITH_CRITERIA"] = 5] = "ERC1155_WITH_CRITERIA";
})(ItemType || (exports.ItemType = ItemType = {}));
var Side;
(function (Side) {
    Side[Side["OFFER"] = 0] = "OFFER";
    Side[Side["CONSIDERATION"] = 1] = "CONSIDERATION";
})(Side || (exports.Side = Side = {}));
var BasicOrderRouteType;
(function (BasicOrderRouteType) {
    BasicOrderRouteType[BasicOrderRouteType["ETH_TO_ERC721"] = 0] = "ETH_TO_ERC721";
    BasicOrderRouteType[BasicOrderRouteType["ETH_TO_ERC1155"] = 1] = "ETH_TO_ERC1155";
    BasicOrderRouteType[BasicOrderRouteType["ERC20_TO_ERC721"] = 2] = "ERC20_TO_ERC721";
    BasicOrderRouteType[BasicOrderRouteType["ERC20_TO_ERC1155"] = 3] = "ERC20_TO_ERC1155";
    BasicOrderRouteType[BasicOrderRouteType["ERC721_TO_ERC20"] = 4] = "ERC721_TO_ERC20";
    BasicOrderRouteType[BasicOrderRouteType["ERC1155_TO_ERC20"] = 5] = "ERC1155_TO_ERC20";
})(BasicOrderRouteType || (exports.BasicOrderRouteType = BasicOrderRouteType = {}));
exports.MAX_INT = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
exports.ONE_HUNDRED_PERCENT_BP = 10000n;
exports.NO_CONDUIT = ethers_1.ethers.ZeroHash;
// Supply here any known conduit keys as well as their conduits
exports.KNOWN_CONDUIT_KEYS_TO_CONDUIT = {
    [exports.OPENSEA_CONDUIT_KEY]: exports.OPENSEA_CONDUIT_ADDRESS,
};
exports.DOMAIN_REGISTRY_ADDRESS = "0x000000000DaD0DE04D2B2D4a5A74581EBA94124A";
//# sourceMappingURL=constants.js.map