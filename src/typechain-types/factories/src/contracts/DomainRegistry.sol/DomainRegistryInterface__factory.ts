/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  DomainRegistryInterface,
  DomainRegistryInterfaceInterface,
} from "../../../../src/contracts/DomainRegistry.sol/DomainRegistryInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "domain",
        type: "string",
      },
    ],
    name: "DomainAlreadyRegistered",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "tag",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "maxIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "suppliedIndex",
        type: "uint256",
      },
    ],
    name: "DomainIndexOutOfRange",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "domain",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "tag",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "DomainRegistered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "tag",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getDomain",
    outputs: [
      {
        internalType: "string",
        name: "domain",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "tag",
        type: "bytes4",
      },
    ],
    name: "getDomains",
    outputs: [
      {
        internalType: "string[]",
        name: "domains",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "tag",
        type: "bytes4",
      },
    ],
    name: "getNumberOfDomains",
    outputs: [
      {
        internalType: "uint256",
        name: "totalDomains",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "domain",
        type: "string",
      },
    ],
    name: "setDomain",
    outputs: [
      {
        internalType: "bytes4",
        name: "tag",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class DomainRegistryInterface__factory {
  static readonly abi = _abi;
  static createInterface(): DomainRegistryInterfaceInterface {
    return new Interface(_abi) as DomainRegistryInterfaceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DomainRegistryInterface {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as DomainRegistryInterface;
  }
}
