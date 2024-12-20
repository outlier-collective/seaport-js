"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmountDeriver__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "InexactFraction",
        type: "error",
    },
];
const _bytecode = "0x6080604052348015600e575f80fd5b50603e80601a5f395ff3fe60806040525f80fdfea2646970667358221220a39826498d0de68d571ab26af5858e9d3d7e4d0fb3b081a46a01f21a5a6fc96d64736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class AmountDeriver__factory extends ethers_1.ContractFactory {
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
exports.AmountDeriver__factory = AmountDeriver__factory;
AmountDeriver__factory.bytecode = _bytecode;
AmountDeriver__factory.abi = _abi;
//# sourceMappingURL=AmountDeriver__factory.js.map