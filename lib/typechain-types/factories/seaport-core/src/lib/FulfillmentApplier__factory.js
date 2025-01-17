"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentApplier__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "InvalidFulfillmentComponentData",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "fulfillmentIndex",
                type: "uint256",
            },
        ],
        name: "MismatchedFulfillmentOfferAndConsiderationComponents",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "enum Side",
                name: "side",
                type: "uint8",
            },
        ],
        name: "MissingFulfillmentComponentOnAggregation",
        type: "error",
    },
    {
        inputs: [],
        name: "OfferAndConsiderationRequiredOnFulfillment",
        type: "error",
    },
];
const _bytecode = "0x6080604052348015600e575f80fd5b50603e80601a5f395ff3fe60806040525f80fdfea2646970667358221220e18f94530c9f91237515c9e94a3e96d81a4843e5e2bd34e0d3f8623b1bc91c5264736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class FulfillmentApplier__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.FulfillmentApplier__factory = FulfillmentApplier__factory;
FulfillmentApplier__factory.bytecode = _bytecode;
FulfillmentApplier__factory.abi = _abi;
//# sourceMappingURL=FulfillmentApplier__factory.js.map