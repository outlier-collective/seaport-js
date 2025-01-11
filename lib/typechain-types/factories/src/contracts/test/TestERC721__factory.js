"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestERC721__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801562000010575f80fd5b50604051806040016040528060078152602001665465737437323160c81b8152506040518060400160405280600681526020016554535437323160d01b815250815f908162000060919062000116565b5060016200006f828262000116565b505050620001e2565b634e487b7160e01b5f52604160045260245ffd5b600181811c90821680620000a157607f821691505b602082108103620000c057634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200011157805f5260205f20601f840160051c81016020851015620000ed5750805b601f840160051c820191505b818110156200010e575f8155600101620000f9565b50505b505050565b81516001600160401b0381111562000132576200013262000078565b6200014a816200014384546200008c565b84620000c6565b602080601f83116001811462000180575f8415620001685750858301515b5f19600386901b1c1916600185901b178555620001da565b5f85815260208120601f198616915b82811015620001b0578886015182559484019460019091019084016200018f565b5085821015620001ce57878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b610d2080620001f05f395ff3fe608060405234801561000f575f80fd5b50600436106100e5575f3560e01c80636352211e11610088578063a22cb46511610063578063a22cb465146101f0578063b88d4fde14610203578063c87b56dd14610216578063e985e9c514610247575f80fd5b80636352211e146101b457806370a08231146101c757806395d89b41146101e8575f80fd5b8063095ea7b3116100c3578063095ea7b31461016657806323b872dd1461017b57806340c10f191461018e57806342842e0e146101a1575f80fd5b806301ffc9a7146100e957806306fdde0314610111578063081812fc14610126575b5f80fd5b6100fc6100f7366004610a33565b610274565b60405190151581526020015b60405180910390f35b6101196102c5565b6040516101089190610a55565b61014e610134366004610aa1565b60046020525f90815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001610108565b610179610174366004610ace565b610350565b005b610179610189366004610af6565b610434565b6100fc61019c366004610ace565b6105f6565b6101796101af366004610af6565b61060a565b61014e6101c2366004610aa1565b6106fe565b6101da6101d5366004610b2f565b610754565b604051908152602001610108565b6101196107b5565b6101796101fe366004610b48565b6107c2565b610179610211366004610b81565b61082d565b610119610224366004610aa1565b50604080518082019091526008815267746f6b656e55524960c01b602082015290565b6100fc610255366004610c14565b600560209081525f928352604080842090915290825290205460ff1681565b5f6301ffc9a760e01b6001600160e01b0319831614806102a457506380ac58cd60e01b6001600160e01b03198316145b806102bf5750635b5e139f60e01b6001600160e01b03198316145b92915050565b5f80546102d190610c45565b80601f01602080910402602001604051908101604052809291908181526020018280546102fd90610c45565b80156103485780601f1061031f57610100808354040283529160200191610348565b820191905f5260205f20905b81548152906001019060200180831161032b57829003601f168201915b505050505081565b5f818152600260205260409020546001600160a01b03163381148061039757506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff165b6103d95760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b60448201526064015b60405180910390fd5b5f8281526004602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b5f818152600260205260409020546001600160a01b038481169116146104895760405162461bcd60e51b815260206004820152600a60248201526957524f4e475f46524f4d60b01b60448201526064016103d0565b6001600160a01b0382166104d35760405162461bcd60e51b81526020600482015260116024820152701253959053125117d49150d25412515395607a1b60448201526064016103d0565b336001600160a01b038416148061050c57506001600160a01b0383165f90815260056020908152604080832033845290915290205460ff165b8061052c57505f818152600460205260409020546001600160a01b031633145b6105695760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b60448201526064016103d0565b6001600160a01b038084165f81815260036020908152604080832080545f19019055938616808352848320805460010190558583526002825284832080546001600160a01b03199081168317909155600490925284832080549092169091559251849392917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b5f6106018383610912565b50600192915050565b610615838383610434565b6001600160a01b0382163b15806106ba5750604051630a85bd0160e11b8082523360048301526001600160a01b03858116602484015260448301849052608060648401525f608484015290919084169063150b7a029060a4016020604051808303815f875af115801561068a573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106ae9190610c7d565b6001600160e01b031916145b6106f95760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b60448201526064016103d0565b505050565b5f818152600260205260409020546001600160a01b03168061074f5760405162461bcd60e51b815260206004820152600a6024820152691393d517d3525395115160b21b60448201526064016103d0565b919050565b5f6001600160a01b03821661079a5760405162461bcd60e51b815260206004820152600c60248201526b5a45524f5f4144445245535360a01b60448201526064016103d0565b506001600160a01b03165f9081526003602052604090205490565b600180546102d190610c45565b335f8181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610838858585610434565b6001600160a01b0384163b15806108cc5750604051630a85bd0160e11b808252906001600160a01b0386169063150b7a02906108809033908a90899089908990600401610c98565b6020604051808303815f875af115801561089c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108c09190610c7d565b6001600160e01b031916145b61090b5760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b60448201526064016103d0565b5050505050565b6001600160a01b03821661095c5760405162461bcd60e51b81526020600482015260116024820152701253959053125117d49150d25412515395607a1b60448201526064016103d0565b5f818152600260205260409020546001600160a01b0316156109b15760405162461bcd60e51b815260206004820152600e60248201526d1053149150511657d3525395115160921b60448201526064016103d0565b6001600160a01b0382165f81815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b031981168114610a30575f80fd5b50565b5f60208284031215610a43575f80fd5b8135610a4e81610a1b565b9392505050565b5f602080835283518060208501525f5b81811015610a8157858101830151858201604001528201610a65565b505f604082860101526040601f19601f8301168501019250505092915050565b5f60208284031215610ab1575f80fd5b5035919050565b80356001600160a01b038116811461074f575f80fd5b5f8060408385031215610adf575f80fd5b610ae883610ab8565b946020939093013593505050565b5f805f60608486031215610b08575f80fd5b610b1184610ab8565b9250610b1f60208501610ab8565b9150604084013590509250925092565b5f60208284031215610b3f575f80fd5b610a4e82610ab8565b5f8060408385031215610b59575f80fd5b610b6283610ab8565b915060208301358015158114610b76575f80fd5b809150509250929050565b5f805f805f60808688031215610b95575f80fd5b610b9e86610ab8565b9450610bac60208701610ab8565b935060408601359250606086013567ffffffffffffffff80821115610bcf575f80fd5b818801915088601f830112610be2575f80fd5b813581811115610bf0575f80fd5b896020828501011115610c01575f80fd5b9699959850939650602001949392505050565b5f8060408385031215610c25575f80fd5b610c2e83610ab8565b9150610c3c60208401610ab8565b90509250929050565b600181811c90821680610c5957607f821691505b602082108103610c7757634e487b7160e01b5f52602260045260245ffd5b50919050565b5f60208284031215610c8d575f80fd5b8151610a4e81610a1b565b6001600160a01b038681168252851660208201526040810184905260806060820181905281018290525f828460a08401375f60a0848401015260a0601f19601f8501168301019050969550505050505056fea26469706673582212205a79bcfc82262828b2b16ac33b24c34a52b9fde11fb66fd482dcb03e54d0043364736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class TestERC721__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.TestERC721__factory = TestERC721__factory;
TestERC721__factory.bytecode = _bytecode;
TestERC721__factory.abi = _abi;
//# sourceMappingURL=TestERC721__factory.js.map