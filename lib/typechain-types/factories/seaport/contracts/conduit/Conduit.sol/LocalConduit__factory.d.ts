import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { LocalConduit, LocalConduitInterface } from "../../../../../seaport/contracts/conduit/Conduit.sol/LocalConduit";
type LocalConduitConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LocalConduit__factory extends ContractFactory {
    constructor(...args: LocalConduitConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<LocalConduit & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): LocalConduit__factory;
    static readonly bytecode = "0x60a060405234801561000f575f80fd5b5033608052608051610a3e61002c5f395f6101d20152610a3e5ff3fe608060405234801561000f575f80fd5b506004361061004a575f3560e01c80634ce34aa21461004e578063899e104c1461007e5780638df25d9214610091578063c4e8fcb5146100a4575b5f80fd5b61006161005c366004610834565b6100b9565b6040516001600160e01b0319909116815260200160405180910390f35b61006161008c3660046108b4565b610121565b61006161009f36600461091b565b61018a565b6100b76100b2366004610969565b6101c7565b005b5f335f525f60205260405f20546100dd576349ed56f960e11b5f523360045260245ffd5b815f5b81811015610110576101088585838181106100fd576100fd6109a2565b905060c002016102c4565b6001016100e0565b50632671a55160e11b949350505050565b5f335f525f60205260405f2054610145576349ed56f960e11b5f523360045260245ffd5b835f5b8181101561016d576101658787838181106100fd576100fd6109a2565b600101610148565b506101788484610436565b50632267841360e21b95945050505050565b5f335f525f60205260405f20546101ae576349ed56f960e11b5f523360045260245ffd5b6101b88383610436565b506346f92ec960e11b92915050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610210576040516336abb4df60e11b815260040160405180910390fd5b6001600160a01b0382165f9081526020819052604090205481151560ff909116151503610268576040516349271a0f60e11b81526001600160a01b038316600482015281151560248201526044015b60405180910390fd5b6001600160a01b0382165f8181526020818152604091829020805460ff191685151590811790915591519182527fae63067d43ac07563b7eb8db6595635fc77f1578a2a5ea06ba91b63e2afa37e2910160405180910390a25050565b60016102d360208301836109ca565b60038111156102e4576102e46109b6565b03610329576103266102fc60408301602084016109ef565b61030c60608401604085016109ef565b61031c60808501606086016109ef565b8460a0013561056c565b50565b600261033860208301836109ca565b6003811115610349576103496109b6565b036103b6578060a00135600114610379576040516369f9582760e01b815260a0820135600482015260240161025f565b61032661038c60408301602084016109ef565b61039c60608401604085016109ef565b6103ac60808501606086016109ef565b8460800135610660565b60036103c560208301836109ca565b60038111156103d6576103d66109b6565b0361041d576103266103ee60408301602084016109ef565b6103fe60608401604085016109ef565b61040e60808501606086016109ef565b84608001358560a00135610715565b604051631e4cbc7f60e21b815260040160405180910390fd5b808280631759616b60e11b6020525f5b8381101561055f57823582018035803b61046b57635f15d6725f52806020526024601cfd5b60a08201358060051b60c0018060808501351460a0606086013514168185013583141615905080156104a657633ae8821360e21b5f5260045ffd5b506020860195506080602084016024378060061b60400190508060a00160a4525f8160c401528060c4018160a0850160c4375f808260205f875af1935083610550573d1561053057601f3d0160051c91508060051c826003028184111561051a578184036003028280028580020360091c01015b5a60208201101561052d573d5f803e3d5ffd5b50505b6357e222f160e11b5f528260045260c0606452608451602001608452805ffd5b50505050600181019050610446565b5050505060806040525050565b6040516323b872dd60e01b5f5283600452826024528160445260205f60645f80895af1803d15601f3d1160015f51141617163d151581166106515780873b15151661065157806106405781610623573d1561060257601f3d0160051c8360051c81600302818311156105eb578183036003028280028480020360091c01015b5a6020820110156105fe573d5f803e3d5ffd5b5050505b63f486bc875f528660205285604052846060525f6080528360a05260a4601cfd5b63988919235f52866020528560405284606052836080526084601cfd5b635f15d6725f52866020526024601cfd5b505060405250505f6060525050565b833b61067757635f15d6725f52836020526024601cfd5b6040516323b872dd60e01b5f528360045282602452816044525f8060645f80895af180610707573d156106e557601f3d0160051c8260051c81600302818311156106ce578183036003028280028480020360091c01015b5a6020820110156106e1573d5f803e3d5ffd5b5050505b63f486bc875f5285602052846040528360605282608052600160a05260a4601cfd5b5060405250505f6060525050565b843b61072c57635f15d6725f52846020526024601cfd5b60405160805160a05160c051637921219560e11b5f528760045286602452856044528460645260a06084525f60a4525f8060c45f808d5af1806107d1573d156107b057601f3d0160051c8560051c8160030281831115610799578183036003028280028480020360091c01015b5a6020820110156107ac573d5f803e3d5ffd5b5050505b63f486bc875f52896020528860405287606052866080528560a05260a4601cfd5b5060809290925260a05260c05260405250505f606052505050565b5f8083601f8401126107fc575f80fd5b50813567ffffffffffffffff811115610813575f80fd5b60208301915083602060c08302850101111561082d575f80fd5b9250929050565b5f8060208385031215610845575f80fd5b823567ffffffffffffffff81111561085b575f80fd5b610867858286016107ec565b90969095509350505050565b5f8083601f840112610883575f80fd5b50813567ffffffffffffffff81111561089a575f80fd5b6020830191508360208260051b850101111561082d575f80fd5b5f805f80604085870312156108c7575f80fd5b843567ffffffffffffffff808211156108de575f80fd5b6108ea888389016107ec565b90965094506020870135915080821115610902575f80fd5b5061090f87828801610873565b95989497509550505050565b5f806020838503121561092c575f80fd5b823567ffffffffffffffff811115610942575f80fd5b61086785828601610873565b80356001600160a01b0381168114610964575f80fd5b919050565b5f806040838503121561097a575f80fd5b6109838361094e565b915060208301358015158114610997575f80fd5b809150509250929050565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52602160045260245ffd5b5f602082840312156109da575f80fd5b8135600481106109e8575f80fd5b9392505050565b5f602082840312156109ff575f80fd5b6109e88261094e56fea26469706673582212204bd6c1ad7e8432b2ace82ccabb27cac8ed10d508fdedde8305c6353deda3a4d164736f6c63430008180033";
    static readonly abi: readonly [{
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
            readonly internalType: "address";
            readonly name: "channel";
            readonly type: "address";
        }];
        readonly name: "ChannelClosed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "channel";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "isOpen";
            readonly type: "bool";
        }];
        readonly name: "ChannelStatusAlreadySet";
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
        readonly name: "Invalid1155BatchTransferEncoding";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidController";
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
        readonly inputs: readonly [];
        readonly name: "InvalidItemType";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MissingItemAmount";
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
        readonly inputs: readonly [];
        readonly name: "UnusedItemParameters";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "channel";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "open";
            readonly type: "bool";
        }];
        readonly name: "ChannelUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "enum ConduitItemType";
                readonly name: "itemType";
                readonly type: "uint8";
            }, {
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
            readonly internalType: "struct ConduitTransfer[]";
            readonly name: "transfers";
            readonly type: "tuple[]";
        }];
        readonly name: "execute";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "magicValue";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
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
                readonly name: "ids";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "amounts";
                readonly type: "uint256[]";
            }];
            readonly internalType: "struct ConduitBatch1155Transfer[]";
            readonly name: "batchTransfers";
            readonly type: "tuple[]";
        }];
        readonly name: "executeBatch1155";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "magicValue";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "enum ConduitItemType";
                readonly name: "itemType";
                readonly type: "uint8";
            }, {
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
            readonly internalType: "struct ConduitTransfer[]";
            readonly name: "standardTransfers";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
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
                readonly name: "ids";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "amounts";
                readonly type: "uint256[]";
            }];
            readonly internalType: "struct ConduitBatch1155Transfer[]";
            readonly name: "batchTransfers";
            readonly type: "tuple[]";
        }];
        readonly name: "executeWithBatch1155";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "magicValue";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "channel";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "isOpen";
            readonly type: "bool";
        }];
        readonly name: "updateChannel";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): LocalConduitInterface;
    static connect(address: string, runner?: ContractRunner | null): LocalConduit;
}
export {};
