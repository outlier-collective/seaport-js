import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { TestERC20, TestERC20Interface } from "../../../../src/contracts/test/TestERC20";
type TestERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestERC20__factory extends ContractFactory {
    constructor(...args: TestERC20ConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<TestERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): TestERC20__factory;
    static readonly bytecode = "0x60e060405234801562000010575f80fd5b506040518060400160405280600681526020016505465737432360d41b81525060405180604001604052806005815260200164054535432360dc1b8152506012825f9081620000609190620001d3565b5060016200006f8382620001d3565b5060ff81166080524660a052620000856200009b565b60c05250506006805460ff191690555062000319565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f5f604051620000cd91906200029f565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806200015e57607f821691505b6020821081036200017d57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620001ce57805f5260205f20601f840160051c81016020851015620001aa5750805b601f840160051c820191505b81811015620001cb575f8155600101620001b6565b50505b505050565b81516001600160401b03811115620001ef57620001ef62000135565b620002078162000200845462000149565b8462000183565b602080601f8311600181146200023d575f8415620002255750858301515b5f19600386901b1c1916600185901b17855562000297565b5f85815260208120601f198616915b828110156200026d578886015182559484019460019091019084016200024c565b50858210156200028b57878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b5f808354620002ae8162000149565b60018281168015620002c95760018114620002df576200030d565b60ff19841687528215158302870194506200030d565b875f526020805f205f5b85811015620003045781548a820152908401908201620002e9565b50505082870194505b50929695505050505050565b60805160a05160c051610ba2620003445f395f6103d401525f61039f01525f6101710152610ba25ff3fe608060405234801561000f575f80fd5b50600436106100f0575f3560e01c806340c10f1911610093578063a9059cbb11610063578063a9059cbb14610206578063d505accf14610219578063dd62ed3e1461022e578063e074d6a914610258575f80fd5b806340c10f19146101ad57806370a08231146101c05780637ecebe00146101df57806395d89b41146101fe575f80fd5b806323b872dd116100ce57806323b872dd1461014c578063303bdd2c1461015f578063313ce5671461016c5780633644e515146101a5575f80fd5b806306fdde03146100f4578063095ea7b31461011257806318160ddd14610135575b5f80fd5b6100fc610279565b60405161010991906108be565b60405180910390f35b610125610120366004610925565b610304565b6040519015158152602001610109565b61013e60025481565b604051908152602001610109565b61012561015a36600461094d565b610370565b6006546101259060ff1681565b6101937f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610109565b61013e61039c565b6101256101bb366004610925565b6103f6565b61013e6101ce366004610986565b60036020525f908152604090205481565b61013e6101ed366004610986565b60056020525f908152604090205481565b6100fc61040a565b610125610214366004610925565b610417565b61022c61022736600461099f565b61048d565b005b61013e61023c366004610a0c565b600460209081525f928352604080842090915290825290205481565b61022c610266366004610a3d565b6006805460ff1916911515919091179055565b5f805461028590610a5c565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610a5c565b80156102fc5780601f106102d3576101008083540402835291602001916102fc565b820191905f5260205f20905b8154815290600101906020018083116102df57829003601f168201915b505050505081565b335f8181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061035e9086815260200190565b60405180910390a35060015b92915050565b6006545f9060ff161561038457505f610395565b61038f8484846106d0565b50600190505b9392505050565b5f7f000000000000000000000000000000000000000000000000000000000000000046146103d1576103cc6107bd565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b5f6104018383610855565b50600192915050565b6001805461028590610a5c565b335f90815260036020526040812080548391908390610437908490610aa8565b90915550506001600160a01b0383165f81815260036020526040908190208054850190555133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061035e9086815260200190565b428410156104e25760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064015b60405180910390fd5b5f60016104ed61039c565b6001600160a01b038a81165f8181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f1981840301815282825280516020918201205f84529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156105f5573d5f803e3d5ffd5b5050604051601f1901519150506001600160a01b0381161580159061062b5750876001600160a01b0316816001600160a01b0316145b6106685760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b60448201526064016104d9565b6001600160a01b039081165f9081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6001600160a01b0383165f9081526004602090815260408083203384529091528120545f198114610729576107058382610aa8565b6001600160a01b0386165f9081526004602090815260408083203384529091529020555b6001600160a01b0385165f9081526003602052604081208054859290610750908490610aa8565b90915550506001600160a01b038085165f81815260036020526040908190208054870190555190918716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906107aa9087815260200190565b60405180910390a3506001949350505050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f5f6040516107ed9190610abb565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b8060025f8282546108669190610b59565b90915550506001600160a01b0382165f818152600360209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b5f602080835283518060208501525f5b818110156108ea578581018301518582016040015282016108ce565b505f604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610920575f80fd5b919050565b5f8060408385031215610936575f80fd5b61093f8361090a565b946020939093013593505050565b5f805f6060848603121561095f575f80fd5b6109688461090a565b92506109766020850161090a565b9150604084013590509250925092565b5f60208284031215610996575f80fd5b6103958261090a565b5f805f805f805f60e0888a0312156109b5575f80fd5b6109be8861090a565b96506109cc6020890161090a565b95506040880135945060608801359350608088013560ff811681146109ef575f80fd5b9699959850939692959460a0840135945060c09093013592915050565b5f8060408385031215610a1d575f80fd5b610a268361090a565b9150610a346020840161090a565b90509250929050565b5f60208284031215610a4d575f80fd5b81358015158114610395575f80fd5b600181811c90821680610a7057607f821691505b602082108103610a8e57634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b8181038181111561036a5761036a610a94565b5f8083545f60018260011c91506001831680610ad857607f831692505b60208084108203610af757634e487b7160e01b5f52602260045260245ffd5b818015610b0b5760018114610b2057610b4b565b60ff1986168952841515850289019650610b4b565b5f8a8152602090205f5b86811015610b435781548b820152908501908301610b2a565b505084890196505b509498975050505050505050565b8082018082111561036a5761036a610a9456fea2646970667358221220309e8fd45163f082d3f1c520ec74fc6129f86d68c526883865e74dfb67cba9bd64736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
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
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "blocking";
            readonly type: "bool";
        }];
        readonly name: "blockTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "blocked";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "nonces";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "ok";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): TestERC20Interface;
    static connect(address: string, runner?: ContractRunner | null): TestERC20;
}
export {};
