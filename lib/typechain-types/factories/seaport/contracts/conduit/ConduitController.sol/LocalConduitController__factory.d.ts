import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { LocalConduitController, LocalConduitControllerInterface } from "../../../../../seaport/contracts/conduit/ConduitController.sol/LocalConduitController";
type LocalConduitControllerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LocalConduitController__factory extends ContractFactory {
    constructor(...args: LocalConduitControllerConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<LocalConduitController & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): LocalConduitController__factory;
    static readonly bytecode = "0x60c060405234801561000f575f80fd5b5060405161001f60208201610082565b6020820181038252601f19601f8201166040525080519060200120608081815250505f805f1b60405161005190610082565b8190604051809103905ff590508015801561006e573d5f803e3d5ffd5b506001600160a01b03163f60a0525061008f565b610a6a8061197083390190565b60805160a0516118a46100cc5f395f81816101420152818161081101526108df01525f818161011f015281816107b9015261089b01526118a45ff3fe608060405234801561000f575f80fd5b50600436106100e5575f3560e01c80636d435421116100885780637b37e561116100635780637b37e561146102435780638b9e028b14610256578063906c87cc1461027657806393790f4414610289575f80fd5b80636d435421146101eb5780636e9bfd9f146101fe578063794593bc14610230575f80fd5b806314afd79e116100c357806314afd79e1461018157806333bc8572146101945780634e3f9580146101b757806351710e45146101d8575f80fd5b8063027cc764146100e95780630a96ad391461011957806313ad9cab1461016c575b5f80fd5b6100fc6100f7366004610c39565b61029c565b6040516001600160a01b0390911681526020015b60405180910390f35b604080517f000000000000000000000000000000000000000000000000000000000000000081527f0000000000000000000000000000000000000000000000000000000000000000602082015201610110565b61017f61017a366004610c61565b610339565b005b6100fc61018f366004610ca9565b610531565b6101a76101a2366004610cc9565b61055c565b6040519015158152602001610110565b6101ca6101c5366004610ca9565b610595565b604051908152602001610110565b61017f6101e6366004610ca9565b6105bd565b61017f6101f9366004610cc9565b6106be565b61021161020c366004610cfa565b6107ae565b604080516001600160a01b039093168352901515602083015201610110565b6100fc61023e366004610d11565b610838565b61017f610251366004610ca9565b610a0a565b610269610264366004610ca9565b610aab565b6040516101109190610d32565b6100fc610284366004610ca9565b610b28565b6101ca610297366004610ca9565b610b53565b5f6102a683610b8e565b6001600160a01b0383165f908152602081905260409020600301548083106102f157604051636ceb340b60e01b81526001600160a01b03851660048201526024015b60405180910390fd5b6001600160a01b0384165f90815260208190526040902060030180548490811061031d5761031d610d7e565b5f918252602090912001546001600160a01b0316949350505050565b61034283610bc6565b60405163c4e8fcb560e01b81526001600160a01b038381166004830152821515602483015284169063c4e8fcb5906044015f604051808303815f87803b15801561038a575f80fd5b505af115801561039c573d5f803e3d5ffd5b505050506001600160a01b038381165f908152602081815260408083209386168352600484019091529020548015158380156103d6575080155b15610425576003830180546001810182555f828152602080822090920180546001600160a01b0319166001600160a01b038a169081179091559254928152600486019091526040902055610529565b831580156104305750805b156105295760038301545f198301905f9061044d90600190610d92565b90508181146104d8575f85600301828154811061046c5761046c610d7e565b5f918252602090912001546003870180546001600160a01b03909216925082918590811061049c5761049c610d7e565b5f91825260208083209190910180546001600160a01b0319166001600160a01b0394851617905592909116815260048701909152604090208490555b846003018054806104eb576104eb610db7565b5f828152602080822083015f1990810180546001600160a01b03191690559092019092556001600160a01b0389168252600487019052604081205550505b505050505050565b5f61053b82610b8e565b506001600160a01b039081165f908152602081905260409020600101541690565b5f61056683610b8e565b506001600160a01b039182165f9081526020818152604080832093909416825260049092019091522054151590565b5f61059f82610b8e565b506001600160a01b03165f9081526020819052604090206003015490565b6105c681610b8e565b6001600160a01b038181165f9081526020819052604090206002015416331461060d576040516388c3a11560e01b81526001600160a01b03821660048201526024016102e8565b6040515f907f11a3cf439fb225bfe74225716b6774765670ec1060e3796802e62139d69974da908290a26001600160a01b038082165f818152602081905260408082206002810180546001600160a01b031916905560010154905133949190911692917fc8894f26f396ce8c004245c8b7cd1b92103a6e4302fcbab883987149ac01b7ec91a46001600160a01b03165f90815260208190526040902060010180546001600160a01b03191633179055565b6106c782610bc6565b6001600160a01b0381166106f95760405163a388d26360e01b81526001600160a01b03831660048201526024016102e8565b6001600160a01b038083165f9081526020819052604090206002015481169082160361074b576040516365e0406560e11b81526001600160a01b038084166004830152821660248201526044016102e8565b6040516001600160a01b038216907f11a3cf439fb225bfe74225716b6774765670ec1060e3796802e62139d69974da905f90a26001600160a01b039182165f90815260208190526040902060020180546001600160a01b03191691909216179055565b5f8060ff60f81b30847f00000000000000000000000000000000000000000000000000000000000000006040516020016107eb9493929190610dcb565b60408051601f198184030181529190528051602090910120936001600160a01b0385163f7f0000000000000000000000000000000000000000000000000000000000000000149350915050565b5f6001600160a01b0382166108605760405163267eaa8160e21b815260040160405180910390fd5b606083901c3314610884576040516332db94d160e21b815260040160405180910390fd5b6040516108c3906001600160f81b031990309086907f000000000000000000000000000000000000000000000000000000000000000090602001610dcb565b604051602081830303815290604052805190602001205f1c90507f0000000000000000000000000000000000000000000000000000000000000000816001600160a01b03163f0361093257604051633194665960e11b81526001600160a01b03821660048201526024016102e8565b8260405161093f90610c16565b8190604051809103905ff590508015801561095c573d5f803e3d5ffd5b50506001600160a01b038181165f81815260208181526040918290206001810180546001600160a01b03191695881695909517909455868455815192835282018690527f4397af6128d529b8ae0442f99db1296d5136062597a15bbc61c1b2a6431a7d15910160405180910390a16040516001600160a01b03808516915f918516907fc8894f26f396ce8c004245c8b7cd1b92103a6e4302fcbab883987149ac01b7ec908390a45092915050565b610a1381610bc6565b6001600160a01b038181165f9081526020819052604090206002015416610a58576040516335809b0b60e11b81526001600160a01b03821660048201526024016102e8565b6040515f907f11a3cf439fb225bfe74225716b6774765670ec1060e3796802e62139d69974da908290a26001600160a01b03165f90815260208190526040902060020180546001600160a01b0319169055565b6060610ab682610b8e565b6001600160a01b0382165f908152602081815260409182902060030180548351818402810184019094528084529091830182828015610b1c57602002820191905f5260205f20905b81546001600160a01b03168152600190910190602001808311610afe575b50505050509050919050565b5f610b3282610b8e565b506001600160a01b039081165f908152602081905260409020600201541690565b6001600160a01b0381165f9081526020819052604090205480610b89576040516304ca820960e41b815260040160405180910390fd5b919050565b6001600160a01b0381165f90815260208190526040902054610bc3576040516304ca820960e41b815260040160405180910390fd5b50565b610bcf81610b8e565b6001600160a01b038181165f90815260208190526040902060010154163314610bc35760405163d4ed9a1760e01b81526001600160a01b03821660048201526024016102e8565b610a6a80610e0583390190565b80356001600160a01b0381168114610b89575f80fd5b5f8060408385031215610c4a575f80fd5b610c5383610c23565b946020939093013593505050565b5f805f60608486031215610c73575f80fd5b610c7c84610c23565b9250610c8a60208501610c23565b915060408401358015158114610c9e575f80fd5b809150509250925092565b5f60208284031215610cb9575f80fd5b610cc282610c23565b9392505050565b5f8060408385031215610cda575f80fd5b610ce383610c23565b9150610cf160208401610c23565b90509250929050565b5f60208284031215610d0a575f80fd5b5035919050565b5f8060408385031215610d22575f80fd5b82359150610cf160208401610c23565b602080825282518282018190525f9190848201906040850190845b81811015610d725783516001600160a01b031683529284019291840191600101610d4d565b50909695505050505050565b634e487b7160e01b5f52603260045260245ffd5b81810381811115610db157634e487b7160e01b5f52601160045260245ffd5b92915050565b634e487b7160e01b5f52603160045260245ffd5b6001600160f81b031994909416845260609290921b6bffffffffffffffffffffffff19166001840152601583015260358201526055019056fe60a060405234801561000f575f80fd5b5033608052608051610a3e61002c5f395f6101d20152610a3e5ff3fe608060405234801561000f575f80fd5b506004361061004a575f3560e01c80634ce34aa21461004e578063899e104c1461007e5780638df25d9214610091578063c4e8fcb5146100a4575b5f80fd5b61006161005c366004610834565b6100b9565b6040516001600160e01b0319909116815260200160405180910390f35b61006161008c3660046108b4565b610121565b61006161009f36600461091b565b61018a565b6100b76100b2366004610969565b6101c7565b005b5f335f525f60205260405f20546100dd576349ed56f960e11b5f523360045260245ffd5b815f5b81811015610110576101088585838181106100fd576100fd6109a2565b905060c002016102c4565b6001016100e0565b50632671a55160e11b949350505050565b5f335f525f60205260405f2054610145576349ed56f960e11b5f523360045260245ffd5b835f5b8181101561016d576101658787838181106100fd576100fd6109a2565b600101610148565b506101788484610436565b50632267841360e21b95945050505050565b5f335f525f60205260405f20546101ae576349ed56f960e11b5f523360045260245ffd5b6101b88383610436565b506346f92ec960e11b92915050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610210576040516336abb4df60e11b815260040160405180910390fd5b6001600160a01b0382165f9081526020819052604090205481151560ff909116151503610268576040516349271a0f60e11b81526001600160a01b038316600482015281151560248201526044015b60405180910390fd5b6001600160a01b0382165f8181526020818152604091829020805460ff191685151590811790915591519182527fae63067d43ac07563b7eb8db6595635fc77f1578a2a5ea06ba91b63e2afa37e2910160405180910390a25050565b60016102d360208301836109ca565b60038111156102e4576102e46109b6565b03610329576103266102fc60408301602084016109ef565b61030c60608401604085016109ef565b61031c60808501606086016109ef565b8460a0013561056c565b50565b600261033860208301836109ca565b6003811115610349576103496109b6565b036103b6578060a00135600114610379576040516369f9582760e01b815260a0820135600482015260240161025f565b61032661038c60408301602084016109ef565b61039c60608401604085016109ef565b6103ac60808501606086016109ef565b8460800135610660565b60036103c560208301836109ca565b60038111156103d6576103d66109b6565b0361041d576103266103ee60408301602084016109ef565b6103fe60608401604085016109ef565b61040e60808501606086016109ef565b84608001358560a00135610715565b604051631e4cbc7f60e21b815260040160405180910390fd5b808280631759616b60e11b6020525f5b8381101561055f57823582018035803b61046b57635f15d6725f52806020526024601cfd5b60a08201358060051b60c0018060808501351460a0606086013514168185013583141615905080156104a657633ae8821360e21b5f5260045ffd5b506020860195506080602084016024378060061b60400190508060a00160a4525f8160c401528060c4018160a0850160c4375f808260205f875af1935083610550573d1561053057601f3d0160051c91508060051c826003028184111561051a578184036003028280028580020360091c01015b5a60208201101561052d573d5f803e3d5ffd5b50505b6357e222f160e11b5f528260045260c0606452608451602001608452805ffd5b50505050600181019050610446565b5050505060806040525050565b6040516323b872dd60e01b5f5283600452826024528160445260205f60645f80895af1803d15601f3d1160015f51141617163d151581166106515780873b15151661065157806106405781610623573d1561060257601f3d0160051c8360051c81600302818311156105eb578183036003028280028480020360091c01015b5a6020820110156105fe573d5f803e3d5ffd5b5050505b63f486bc875f528660205285604052846060525f6080528360a05260a4601cfd5b63988919235f52866020528560405284606052836080526084601cfd5b635f15d6725f52866020526024601cfd5b505060405250505f6060525050565b833b61067757635f15d6725f52836020526024601cfd5b6040516323b872dd60e01b5f528360045282602452816044525f8060645f80895af180610707573d156106e557601f3d0160051c8260051c81600302818311156106ce578183036003028280028480020360091c01015b5a6020820110156106e1573d5f803e3d5ffd5b5050505b63f486bc875f5285602052846040528360605282608052600160a05260a4601cfd5b5060405250505f6060525050565b843b61072c57635f15d6725f52846020526024601cfd5b60405160805160a05160c051637921219560e11b5f528760045286602452856044528460645260a06084525f60a4525f8060c45f808d5af1806107d1573d156107b057601f3d0160051c8560051c8160030281831115610799578183036003028280028480020360091c01015b5a6020820110156107ac573d5f803e3d5ffd5b5050505b63f486bc875f52896020528860405287606052866080528560a05260a4601cfd5b5060809290925260a05260c05260405250505f606052505050565b5f8083601f8401126107fc575f80fd5b50813567ffffffffffffffff811115610813575f80fd5b60208301915083602060c08302850101111561082d575f80fd5b9250929050565b5f8060208385031215610845575f80fd5b823567ffffffffffffffff81111561085b575f80fd5b610867858286016107ec565b90969095509350505050565b5f8083601f840112610883575f80fd5b50813567ffffffffffffffff81111561089a575f80fd5b6020830191508360208260051b850101111561082d575f80fd5b5f805f80604085870312156108c7575f80fd5b843567ffffffffffffffff808211156108de575f80fd5b6108ea888389016107ec565b90965094506020870135915080821115610902575f80fd5b5061090f87828801610873565b95989497509550505050565b5f806020838503121561092c575f80fd5b823567ffffffffffffffff811115610942575f80fd5b61086785828601610873565b80356001600160a01b0381168114610964575f80fd5b919050565b5f806040838503121561097a575f80fd5b6109838361094e565b915060208301358015158114610997575f80fd5b809150509250929050565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52602160045260245ffd5b5f602082840312156109da575f80fd5b8135600481106109e8575f80fd5b9392505050565b5f602082840312156109ff575f80fd5b6109e88261094e56fea2646970667358221220b0886aab2892937538153703aeb41ab7d7ac415a3ca8c13b06cc4ce7aa06f43764736f6c63430008180033a2646970667358221220b58b5844486fa5644e523bd3c6ebc053496e4b6567a082345c1c5ff44f746df564736f6c6343000818003360a060405234801561000f575f80fd5b5033608052608051610a3e61002c5f395f6101d20152610a3e5ff3fe608060405234801561000f575f80fd5b506004361061004a575f3560e01c80634ce34aa21461004e578063899e104c1461007e5780638df25d9214610091578063c4e8fcb5146100a4575b5f80fd5b61006161005c366004610834565b6100b9565b6040516001600160e01b0319909116815260200160405180910390f35b61006161008c3660046108b4565b610121565b61006161009f36600461091b565b61018a565b6100b76100b2366004610969565b6101c7565b005b5f335f525f60205260405f20546100dd576349ed56f960e11b5f523360045260245ffd5b815f5b81811015610110576101088585838181106100fd576100fd6109a2565b905060c002016102c4565b6001016100e0565b50632671a55160e11b949350505050565b5f335f525f60205260405f2054610145576349ed56f960e11b5f523360045260245ffd5b835f5b8181101561016d576101658787838181106100fd576100fd6109a2565b600101610148565b506101788484610436565b50632267841360e21b95945050505050565b5f335f525f60205260405f20546101ae576349ed56f960e11b5f523360045260245ffd5b6101b88383610436565b506346f92ec960e11b92915050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610210576040516336abb4df60e11b815260040160405180910390fd5b6001600160a01b0382165f9081526020819052604090205481151560ff909116151503610268576040516349271a0f60e11b81526001600160a01b038316600482015281151560248201526044015b60405180910390fd5b6001600160a01b0382165f8181526020818152604091829020805460ff191685151590811790915591519182527fae63067d43ac07563b7eb8db6595635fc77f1578a2a5ea06ba91b63e2afa37e2910160405180910390a25050565b60016102d360208301836109ca565b60038111156102e4576102e46109b6565b03610329576103266102fc60408301602084016109ef565b61030c60608401604085016109ef565b61031c60808501606086016109ef565b8460a0013561056c565b50565b600261033860208301836109ca565b6003811115610349576103496109b6565b036103b6578060a00135600114610379576040516369f9582760e01b815260a0820135600482015260240161025f565b61032661038c60408301602084016109ef565b61039c60608401604085016109ef565b6103ac60808501606086016109ef565b8460800135610660565b60036103c560208301836109ca565b60038111156103d6576103d66109b6565b0361041d576103266103ee60408301602084016109ef565b6103fe60608401604085016109ef565b61040e60808501606086016109ef565b84608001358560a00135610715565b604051631e4cbc7f60e21b815260040160405180910390fd5b808280631759616b60e11b6020525f5b8381101561055f57823582018035803b61046b57635f15d6725f52806020526024601cfd5b60a08201358060051b60c0018060808501351460a0606086013514168185013583141615905080156104a657633ae8821360e21b5f5260045ffd5b506020860195506080602084016024378060061b60400190508060a00160a4525f8160c401528060c4018160a0850160c4375f808260205f875af1935083610550573d1561053057601f3d0160051c91508060051c826003028184111561051a578184036003028280028580020360091c01015b5a60208201101561052d573d5f803e3d5ffd5b50505b6357e222f160e11b5f528260045260c0606452608451602001608452805ffd5b50505050600181019050610446565b5050505060806040525050565b6040516323b872dd60e01b5f5283600452826024528160445260205f60645f80895af1803d15601f3d1160015f51141617163d151581166106515780873b15151661065157806106405781610623573d1561060257601f3d0160051c8360051c81600302818311156105eb578183036003028280028480020360091c01015b5a6020820110156105fe573d5f803e3d5ffd5b5050505b63f486bc875f528660205285604052846060525f6080528360a05260a4601cfd5b63988919235f52866020528560405284606052836080526084601cfd5b635f15d6725f52866020526024601cfd5b505060405250505f6060525050565b833b61067757635f15d6725f52836020526024601cfd5b6040516323b872dd60e01b5f528360045282602452816044525f8060645f80895af180610707573d156106e557601f3d0160051c8260051c81600302818311156106ce578183036003028280028480020360091c01015b5a6020820110156106e1573d5f803e3d5ffd5b5050505b63f486bc875f5285602052846040528360605282608052600160a05260a4601cfd5b5060405250505f6060525050565b843b61072c57635f15d6725f52846020526024601cfd5b60405160805160a05160c051637921219560e11b5f528760045286602452856044528460645260a06084525f60a4525f8060c45f808d5af1806107d1573d156107b057601f3d0160051c8560051c8160030281831115610799578183036003028280028480020360091c01015b5a6020820110156107ac573d5f803e3d5ffd5b5050505b63f486bc875f52896020528860405287606052866080528560a05260a4601cfd5b5060809290925260a05260c05260405250505f606052505050565b5f8083601f8401126107fc575f80fd5b50813567ffffffffffffffff811115610813575f80fd5b60208301915083602060c08302850101111561082d575f80fd5b9250929050565b5f8060208385031215610845575f80fd5b823567ffffffffffffffff81111561085b575f80fd5b610867858286016107ec565b90969095509350505050565b5f8083601f840112610883575f80fd5b50813567ffffffffffffffff81111561089a575f80fd5b6020830191508360208260051b850101111561082d575f80fd5b5f805f80604085870312156108c7575f80fd5b843567ffffffffffffffff808211156108de575f80fd5b6108ea888389016107ec565b90965094506020870135915080821115610902575f80fd5b5061090f87828801610873565b95989497509550505050565b5f806020838503121561092c575f80fd5b823567ffffffffffffffff811115610942575f80fd5b61086785828601610873565b80356001600160a01b0381168114610964575f80fd5b919050565b5f806040838503121561097a575f80fd5b6109838361094e565b915060208301358015158114610997575f80fd5b809150509250929050565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52602160045260245ffd5b5f602082840312156109da575f80fd5b8135600481106109e8575f80fd5b9392505050565b5f602082840312156109ff575f80fd5b6109e88261094e56fea2646970667358221220b0886aab2892937538153703aeb41ab7d7ac415a3ca8c13b06cc4ce7aa06f43764736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }];
        readonly name: "CallerIsNotNewPotentialOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }];
        readonly name: "CallerIsNotOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }];
        readonly name: "ChannelOutOfRange";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }];
        readonly name: "ConduitAlreadyExists";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCreator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidInitialOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "newPotentialOwner";
            readonly type: "address";
        }];
        readonly name: "NewPotentialOwnerAlreadySet";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }];
        readonly name: "NewPotentialOwnerIsZeroAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoConduit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }];
        readonly name: "NoPotentialOwnerCurrentlySet";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "conduitKey";
            readonly type: "bytes32";
        }];
        readonly name: "NewConduit";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newPotentialOwner";
            readonly type: "address";
        }];
        readonly name: "PotentialOwnerUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }];
        readonly name: "acceptOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }];
        readonly name: "cancelOwnershipTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "conduitKey";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "initialOwner";
            readonly type: "address";
        }];
        readonly name: "createConduit";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "channelIndex";
            readonly type: "uint256";
        }];
        readonly name: "getChannel";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "channel";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "channel";
            readonly type: "address";
        }];
        readonly name: "getChannelStatus";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isOpen";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }];
        readonly name: "getChannels";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "channels";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "conduitKey";
            readonly type: "bytes32";
        }];
        readonly name: "getConduit";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "exists";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getConduitCodeHashes";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "creationCodeHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "runtimeCodeHash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }];
        readonly name: "getKey";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "conduitKey";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }];
        readonly name: "getPotentialOwner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "potentialOwner";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }];
        readonly name: "getTotalChannels";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "totalChannels";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }];
        readonly name: "ownerOf";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "newPotentialOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "conduit";
            readonly type: "address";
        }, {
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
    static createInterface(): LocalConduitControllerInterface;
    static connect(address: string, runner?: ContractRunner | null): LocalConduitController;
}
export {};
