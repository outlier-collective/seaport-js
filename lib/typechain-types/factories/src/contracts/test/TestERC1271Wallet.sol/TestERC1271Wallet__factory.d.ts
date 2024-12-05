import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { TestERC1271Wallet, TestERC1271WalletInterface } from "../../../../../src/contracts/test/TestERC1271Wallet.sol/TestERC1271Wallet";
type TestERC1271WalletConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestERC1271Wallet__factory extends ContractFactory {
    constructor(...args: TestERC1271WalletConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<TestERC1271Wallet & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): TestERC1271Wallet__factory;
    static readonly bytecode = "0x608060405234801561000f575f80fd5b505f80546001600160a01b031916331790556104d48061002e5f395ff3fe608060405234801561000f575f80fd5b506004361061004a575f3560e01c8063150b7a021461004e5780631626ba7e1461008b578063da3e33971461009e578063f299f8b3146100b3575b5f80fd5b61006d61005c36600461036f565b630a85bd0160e11b95945050505050565b6040516001600160e01b031990911681526020015b60405180910390f35b61006d6100993660046103d9565b6100dd565b6100b16100ac366004610421565b610152565b005b5f546100c5906001600160a01b031681565b6040516001600160a01b039091168152602001610082565b5f8061011e8585858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506101c892505050565b5f549091506001600160a01b03908116908216036101465750630b135d3f60e11b905061014b565b505f90505b9392505050565b60405163095ea7b360e01b81526001600160a01b0383811660048301526024820183905284169063095ea7b3906044016020604051808303815f875af115801561019e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101c2919061045a565b50505050565b5f805f8084516041036101ee575050506020820151604083015160608401515f1a610267565b845160400361021b5750505060408201516020830151906001600160ff1b0381169060ff1c601b01610267565b60405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640160405180910390fd5b601b8160ff1610156102815761027e601b82610479565b90505b8060ff16601b1415801561029957508060ff16601c14155b156102a9575f9350505050610309565b604080515f81526020810180835288905260ff831691810191909152606081018490526080810183905260019060a0016020604051602081039080840390855afa1580156102f9573d5f803e3d5ffd5b5050506020604051035193505050505b92915050565b80356001600160a01b0381168114610325575f80fd5b919050565b5f8083601f84011261033a575f80fd5b50813567ffffffffffffffff811115610351575f80fd5b602083019150836020828501011115610368575f80fd5b9250929050565b5f805f805f60808688031215610383575f80fd5b61038c8661030f565b945061039a6020870161030f565b935060408601359250606086013567ffffffffffffffff8111156103bc575f80fd5b6103c88882890161032a565b969995985093965092949392505050565b5f805f604084860312156103eb575f80fd5b83359250602084013567ffffffffffffffff811115610408575f80fd5b6104148682870161032a565b9497909650939450505050565b5f805f60608486031215610433575f80fd5b61043c8461030f565b925061044a6020850161030f565b9150604084013590509250925092565b5f6020828403121561046a575f80fd5b8151801515811461014b575f80fd5b60ff818116838216019081111561030957634e487b7160e01b5f52601160045260245ffdfea26469706673582212200f000a5230cc36b934f80f6c61eb58ed52a293f12d76642f777291aa1cabb7f664736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approveToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "hash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "isValidSignature";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC721Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "orderSigner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): TestERC1271WalletInterface;
    static connect(address: string, runner?: ContractRunner | null): TestERC1271Wallet;
}
export {};
