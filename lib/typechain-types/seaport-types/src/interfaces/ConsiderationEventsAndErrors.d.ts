import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener } from "../../../common";
export type SpentItemStruct = {
    itemType: BigNumberish;
    token: AddressLike;
    identifier: BigNumberish;
    amount: BigNumberish;
};
export type SpentItemStructOutput = [
    itemType: bigint,
    token: string,
    identifier: bigint,
    amount: bigint
] & {
    itemType: bigint;
    token: string;
    identifier: bigint;
    amount: bigint;
};
export type ReceivedItemStruct = {
    itemType: BigNumberish;
    token: AddressLike;
    identifier: BigNumberish;
    amount: BigNumberish;
    recipient: AddressLike;
};
export type ReceivedItemStructOutput = [
    itemType: bigint,
    token: string,
    identifier: bigint,
    amount: bigint,
    recipient: string
] & {
    itemType: bigint;
    token: string;
    identifier: bigint;
    amount: bigint;
    recipient: string;
};
export type OfferItemStruct = {
    itemType: BigNumberish;
    token: AddressLike;
    identifierOrCriteria: BigNumberish;
    startAmount: BigNumberish;
    endAmount: BigNumberish;
};
export type OfferItemStructOutput = [
    itemType: bigint,
    token: string,
    identifierOrCriteria: bigint,
    startAmount: bigint,
    endAmount: bigint
] & {
    itemType: bigint;
    token: string;
    identifierOrCriteria: bigint;
    startAmount: bigint;
    endAmount: bigint;
};
export type ConsiderationItemStruct = {
    itemType: BigNumberish;
    token: AddressLike;
    identifierOrCriteria: BigNumberish;
    startAmount: BigNumberish;
    endAmount: BigNumberish;
    recipient: AddressLike;
};
export type ConsiderationItemStructOutput = [
    itemType: bigint,
    token: string,
    identifierOrCriteria: bigint,
    startAmount: bigint,
    endAmount: bigint,
    recipient: string
] & {
    itemType: bigint;
    token: string;
    identifierOrCriteria: bigint;
    startAmount: bigint;
    endAmount: bigint;
    recipient: string;
};
export type OrderParametersStruct = {
    offerer: AddressLike;
    zone: AddressLike;
    offer: OfferItemStruct[];
    consideration: ConsiderationItemStruct[];
    orderType: BigNumberish;
    startTime: BigNumberish;
    endTime: BigNumberish;
    zoneHash: BytesLike;
    salt: BigNumberish;
    conduitKey: BytesLike;
    totalOriginalConsiderationItems: BigNumberish;
};
export type OrderParametersStructOutput = [
    offerer: string,
    zone: string,
    offer: OfferItemStructOutput[],
    consideration: ConsiderationItemStructOutput[],
    orderType: bigint,
    startTime: bigint,
    endTime: bigint,
    zoneHash: string,
    salt: bigint,
    conduitKey: string,
    totalOriginalConsiderationItems: bigint
] & {
    offerer: string;
    zone: string;
    offer: OfferItemStructOutput[];
    consideration: ConsiderationItemStructOutput[];
    orderType: bigint;
    startTime: bigint;
    endTime: bigint;
    zoneHash: string;
    salt: bigint;
    conduitKey: string;
    totalOriginalConsiderationItems: bigint;
};
export interface ConsiderationEventsAndErrorsInterface extends Interface {
    getEvent(nameOrSignatureOrTopic: "CounterIncremented" | "OrderCancelled" | "OrderFulfilled" | "OrderValidated" | "OrdersMatched"): EventFragment;
}
export declare namespace CounterIncrementedEvent {
    type InputTuple = [newCounter: BigNumberish, offerer: AddressLike];
    type OutputTuple = [newCounter: bigint, offerer: string];
    interface OutputObject {
        newCounter: bigint;
        offerer: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OrderCancelledEvent {
    type InputTuple = [
        orderHash: BytesLike,
        offerer: AddressLike,
        zone: AddressLike
    ];
    type OutputTuple = [orderHash: string, offerer: string, zone: string];
    interface OutputObject {
        orderHash: string;
        offerer: string;
        zone: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OrderFulfilledEvent {
    type InputTuple = [
        orderHash: BytesLike,
        offerer: AddressLike,
        zone: AddressLike,
        recipient: AddressLike,
        offer: SpentItemStruct[],
        consideration: ReceivedItemStruct[]
    ];
    type OutputTuple = [
        orderHash: string,
        offerer: string,
        zone: string,
        recipient: string,
        offer: SpentItemStructOutput[],
        consideration: ReceivedItemStructOutput[]
    ];
    interface OutputObject {
        orderHash: string;
        offerer: string;
        zone: string;
        recipient: string;
        offer: SpentItemStructOutput[];
        consideration: ReceivedItemStructOutput[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OrderValidatedEvent {
    type InputTuple = [
        orderHash: BytesLike,
        orderParameters: OrderParametersStruct
    ];
    type OutputTuple = [
        orderHash: string,
        orderParameters: OrderParametersStructOutput
    ];
    interface OutputObject {
        orderHash: string;
        orderParameters: OrderParametersStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OrdersMatchedEvent {
    type InputTuple = [orderHashes: BytesLike[]];
    type OutputTuple = [orderHashes: string[]];
    interface OutputObject {
        orderHashes: string[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface ConsiderationEventsAndErrors extends BaseContract {
    connect(runner?: ContractRunner | null): ConsiderationEventsAndErrors;
    waitForDeployment(): Promise<this>;
    interface: ConsiderationEventsAndErrorsInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getEvent(key: "CounterIncremented"): TypedContractEvent<CounterIncrementedEvent.InputTuple, CounterIncrementedEvent.OutputTuple, CounterIncrementedEvent.OutputObject>;
    getEvent(key: "OrderCancelled"): TypedContractEvent<OrderCancelledEvent.InputTuple, OrderCancelledEvent.OutputTuple, OrderCancelledEvent.OutputObject>;
    getEvent(key: "OrderFulfilled"): TypedContractEvent<OrderFulfilledEvent.InputTuple, OrderFulfilledEvent.OutputTuple, OrderFulfilledEvent.OutputObject>;
    getEvent(key: "OrderValidated"): TypedContractEvent<OrderValidatedEvent.InputTuple, OrderValidatedEvent.OutputTuple, OrderValidatedEvent.OutputObject>;
    getEvent(key: "OrdersMatched"): TypedContractEvent<OrdersMatchedEvent.InputTuple, OrdersMatchedEvent.OutputTuple, OrdersMatchedEvent.OutputObject>;
    filters: {
        "CounterIncremented(uint256,address)": TypedContractEvent<CounterIncrementedEvent.InputTuple, CounterIncrementedEvent.OutputTuple, CounterIncrementedEvent.OutputObject>;
        CounterIncremented: TypedContractEvent<CounterIncrementedEvent.InputTuple, CounterIncrementedEvent.OutputTuple, CounterIncrementedEvent.OutputObject>;
        "OrderCancelled(bytes32,address,address)": TypedContractEvent<OrderCancelledEvent.InputTuple, OrderCancelledEvent.OutputTuple, OrderCancelledEvent.OutputObject>;
        OrderCancelled: TypedContractEvent<OrderCancelledEvent.InputTuple, OrderCancelledEvent.OutputTuple, OrderCancelledEvent.OutputObject>;
        "OrderFulfilled(bytes32,address,address,address,tuple[],tuple[])": TypedContractEvent<OrderFulfilledEvent.InputTuple, OrderFulfilledEvent.OutputTuple, OrderFulfilledEvent.OutputObject>;
        OrderFulfilled: TypedContractEvent<OrderFulfilledEvent.InputTuple, OrderFulfilledEvent.OutputTuple, OrderFulfilledEvent.OutputObject>;
        "OrderValidated(bytes32,tuple)": TypedContractEvent<OrderValidatedEvent.InputTuple, OrderValidatedEvent.OutputTuple, OrderValidatedEvent.OutputObject>;
        OrderValidated: TypedContractEvent<OrderValidatedEvent.InputTuple, OrderValidatedEvent.OutputTuple, OrderValidatedEvent.OutputObject>;
        "OrdersMatched(bytes32[])": TypedContractEvent<OrdersMatchedEvent.InputTuple, OrdersMatchedEvent.OutputTuple, OrdersMatchedEvent.OutputObject>;
        OrdersMatched: TypedContractEvent<OrdersMatchedEvent.InputTuple, OrdersMatchedEvent.OutputTuple, OrdersMatchedEvent.OutputObject>;
    };
}
