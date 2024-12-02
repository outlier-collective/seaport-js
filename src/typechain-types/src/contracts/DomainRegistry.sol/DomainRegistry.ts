/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface DomainRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getDomain"
      | "getDomains"
      | "getNumberOfDomains"
      | "setDomain"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "DomainRegistered"): EventFragment;

  encodeFunctionData(
    functionFragment: "getDomain",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDomains",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfDomains",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "setDomain", values: [string]): string;

  decodeFunctionResult(functionFragment: "getDomain", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getDomains", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfDomains",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setDomain", data: BytesLike): Result;
}

export namespace DomainRegisteredEvent {
  export type InputTuple = [
    domain: string,
    tag: BytesLike,
    index: BigNumberish
  ];
  export type OutputTuple = [domain: string, tag: string, index: bigint];
  export interface OutputObject {
    domain: string;
    tag: string;
    index: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface DomainRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): DomainRegistry;
  waitForDeployment(): Promise<this>;

  interface: DomainRegistryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getDomain: TypedContractMethod<
    [tag: BytesLike, index: BigNumberish],
    [string],
    "view"
  >;

  getDomains: TypedContractMethod<[tag: BytesLike], [string[]], "view">;

  getNumberOfDomains: TypedContractMethod<[tag: BytesLike], [bigint], "view">;

  setDomain: TypedContractMethod<[domain: string], [string], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getDomain"
  ): TypedContractMethod<
    [tag: BytesLike, index: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getDomains"
  ): TypedContractMethod<[tag: BytesLike], [string[]], "view">;
  getFunction(
    nameOrSignature: "getNumberOfDomains"
  ): TypedContractMethod<[tag: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "setDomain"
  ): TypedContractMethod<[domain: string], [string], "nonpayable">;

  getEvent(
    key: "DomainRegistered"
  ): TypedContractEvent<
    DomainRegisteredEvent.InputTuple,
    DomainRegisteredEvent.OutputTuple,
    DomainRegisteredEvent.OutputObject
  >;

  filters: {
    "DomainRegistered(string,bytes4,uint256)": TypedContractEvent<
      DomainRegisteredEvent.InputTuple,
      DomainRegisteredEvent.OutputTuple,
      DomainRegisteredEvent.OutputObject
    >;
    DomainRegistered: TypedContractEvent<
      DomainRegisteredEvent.InputTuple,
      DomainRegisteredEvent.OutputTuple,
      DomainRegisteredEvent.OutputObject
    >;
  };
}
