import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { DomainRegistry, DomainRegistryInterface } from "../../../../src/contracts/DomainRegistry.sol/DomainRegistry";
type DomainRegistryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DomainRegistry__factory extends ContractFactory {
    constructor(...args: DomainRegistryConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<DomainRegistry & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): DomainRegistry__factory;
    static readonly bytecode = "0x608060405234801561000f575f80fd5b506107ef8061001d5f395ff3fe608060405234801561000f575f80fd5b506004361061004a575f3560e01c8063432ba75c1461004e578063d45619b61461008a578063e5eab096146100aa578063eab5fc24146100d6575b5f80fd5b61007761005c366004610447565b6001600160e01b0319165f9081526020819052604090205490565b6040519081526020015b60405180910390f35b61009d610098366004610447565b6100f6565b60405161008191906104aa565b6100bd6100b836600461050c565b6101df565b6040516001600160e01b03199091168152602001610081565b6100e96100e4366004610578565b610302565b60405161008191906105a0565b6001600160e01b031981165f90815260208181526040808320805482518185028101850190935280835260609492939192909184015b828210156101d4578382905f5260205f20018054610149906105b2565b80601f0160208091040260200160405190810160405280929190818152602001828054610175906105b2565b80156101c05780601f10610197576101008083540402835291602001916101c0565b820191905f5260205f20905b8154815290600101906020018083116101a357829003601f168201915b50505050508152602001906001019061012c565b505050509050919050565b5f600183836040516101f29291906105ea565b9081526040519081900360200190205460ff16156102305782826040516350cb29b360e01b8152600401610227929190610621565b60405180910390fd5b60018084846040516102439291906105ea565b90815260405160209181900382018120805460ff1916931515939093179092556102719185918591016105ea565b60408051601f1981840301815291815281516020928301206001600160e01b031981165f90815280845291822080546001810182559083529290912090925081016102bd84868361069c565b507fe1a483db0873e9c9247adea872915ec5b4ca6f23d07334941b368c0c04224c0d848484846040516102f39493929190610756565b60405180910390a15092915050565b6001600160e01b031982165f908152602081905260408120546060919061032b90600190610786565b90508083111561036857604051630a6e1dad60e31b81526001600160e01b0319851660048201526024810182905260448101849052606401610227565b6001600160e01b031984165f908152602081905260409020805484908110610392576103926107a5565b905f5260205f200180546103a5906105b2565b80601f01602080910402602001604051908101604052809291908181526020018280546103d1906105b2565b801561041c5780601f106103f35761010080835404028352916020019161041c565b820191905f5260205f20905b8154815290600101906020018083116103ff57829003601f168201915b50505050509150505b92915050565b80356001600160e01b031981168114610442575f80fd5b919050565b5f60208284031215610457575f80fd5b6104608261042b565b9392505050565b5f81518084525f5b8181101561048b5760208185018101518683018201520161046f565b505f602082860101526020601f19601f83011685010191505092915050565b5f60208083016020845280855180835260408601915060408160051b8701019250602087015f5b828110156104ff57603f198886030184526104ed858351610467565b945092850192908501906001016104d1565b5092979650505050505050565b5f806020838503121561051d575f80fd5b823567ffffffffffffffff80821115610534575f80fd5b818501915085601f830112610547575f80fd5b813581811115610555575f80fd5b866020828501011115610566575f80fd5b60209290920196919550909350505050565b5f8060408385031215610589575f80fd5b6105928361042b565b946020939093013593505050565b602081525f6104606020830184610467565b600181811c908216806105c657607f821691505b6020821081036105e457634e487b7160e01b5f52602260045260245ffd5b50919050565b818382375f9101908152919050565b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b602081525f6106346020830184866105f9565b949350505050565b634e487b7160e01b5f52604160045260245ffd5b601f82111561069757805f5260205f20601f840160051c810160208510156106755750805b601f840160051c820191505b81811015610694575f8155600101610681565b50505b505050565b67ffffffffffffffff8311156106b4576106b461063c565b6106c8836106c283546105b2565b83610650565b5f601f8411600181146106f9575f85156106e25750838201355b5f19600387901b1c1916600186901b178355610694565b5f83815260208120601f198716915b828110156107285786850135825560209485019460019092019101610708565b5086821015610744575f1960f88860031b161c19848701351681555b505060018560011b0183555050505050565b606081525f6107696060830186886105f9565b6001600160e01b0319949094166020830152506040015292915050565b8181038181111561042557634e487b7160e01b5f52601160045260245ffd5b634e487b7160e01b5f52603260045260245ffdfea2646970667358221220f6b7ceec5684a9f90abdbd865b3b166abf224a1fbbc93139ede29f15637e0eb164736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "domain";
            readonly type: "string";
        }];
        readonly name: "DomainAlreadyRegistered";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "tag";
            readonly type: "bytes4";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "suppliedIndex";
            readonly type: "uint256";
        }];
        readonly name: "DomainIndexOutOfRange";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "domain";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes4";
            readonly name: "tag";
            readonly type: "bytes4";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "DomainRegistered";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "tag";
            readonly type: "bytes4";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getDomain";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "domain";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "tag";
            readonly type: "bytes4";
        }];
        readonly name: "getDomains";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "domains";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "tag";
            readonly type: "bytes4";
        }];
        readonly name: "getNumberOfDomains";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "totalDomains";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "domain";
            readonly type: "string";
        }];
        readonly name: "setDomain";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "tag";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): DomainRegistryInterface;
    static connect(address: string, runner?: ContractRunner | null): DomainRegistry;
}
export {};
