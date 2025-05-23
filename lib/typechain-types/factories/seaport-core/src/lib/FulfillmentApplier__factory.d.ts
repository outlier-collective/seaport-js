import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { FulfillmentApplier, FulfillmentApplierInterface } from "../../../../seaport-core/src/lib/FulfillmentApplier";
type FulfillmentApplierConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FulfillmentApplier__factory extends ContractFactory {
    constructor(...args: FulfillmentApplierConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<FulfillmentApplier & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): FulfillmentApplier__factory;
    static readonly bytecode = "0x6080604052348015600e575f80fd5b50603e80601a5f395ff3fe60806040525f80fdfea2646970667358221220e18f94530c9f91237515c9e94a3e96d81a4843e5e2bd34e0d3f8623b1bc91c5264736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InvalidFulfillmentComponentData";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fulfillmentIndex";
            readonly type: "uint256";
        }];
        readonly name: "MismatchedFulfillmentOfferAndConsiderationComponents";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum Side";
            readonly name: "side";
            readonly type: "uint8";
        }];
        readonly name: "MissingFulfillmentComponentOnAggregation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OfferAndConsiderationRequiredOnFulfillment";
        readonly type: "error";
    }];
    static createInterface(): FulfillmentApplierInterface;
    static connect(address: string, runner?: ContractRunner | null): FulfillmentApplier;
}
export {};
