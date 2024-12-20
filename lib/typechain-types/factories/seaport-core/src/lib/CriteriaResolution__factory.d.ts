import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { CriteriaResolution, CriteriaResolutionInterface } from "../../../../seaport-core/src/lib/CriteriaResolution";
type CriteriaResolutionConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CriteriaResolution__factory extends ContractFactory {
    constructor(...args: CriteriaResolutionConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<CriteriaResolution & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): CriteriaResolution__factory;
    static readonly bytecode = "0x6080604052348015600e575f80fd5b50603e80601a5f395ff3fe60806040525f80fdfea2646970667358221220f613ca4fda4b0650eb06a2a814e61f6a9afa26b55c206c64970473a15b796f4764736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ConsiderationCriteriaResolverOutOfRange";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CriteriaNotEnabledForItem";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidProof";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OfferCriteriaResolverOutOfRange";
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
    }];
    static createInterface(): CriteriaResolutionInterface;
    static connect(address: string, runner?: ContractRunner | null): CriteriaResolution;
}
export {};
