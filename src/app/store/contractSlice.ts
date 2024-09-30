import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index'; 

interface FeaturesState {
    mintable: boolean;
    burnable: boolean;
    pausable: boolean;
}

interface ConstructorState {
    name: string;
    symbol: string;
    initialSupply: number;
}

const generateContract = (features: FeaturesState, constructor: ConstructorState) => {
    let contract = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
`;

    if (features.mintable || features.pausable) {
        contract += `import "@openzeppelin/contracts/access/Ownable.sol";\n`;
    }
    if (features.burnable) {
        contract += `import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";\n`;
    }
    if (features.pausable) {
        contract += `import "@openzeppelin/contracts/security/Pausable.sol";\n`;
    }

    contract += `
/**
 * @title EVM Token
 * @dev Customizable ERC-20 Token
 */
contract ${constructor.name}Token is ERC20`;

    if (features.burnable) {
        contract += `, ERC20Burnable`;
    }
    if (features.pausable) {
        contract += `, Pausable`;
    }
    if (features.mintable || features.pausable) {
        contract += `, Ownable`;
    }

    contract += ` {

    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     * @param name The name of the token.
     * @param symbol The symbol of the token.
     * @param initialSupply The initial supply of tokens.
     */
    constructor() payable ERC20("${constructor.name}", "${constructor.symbol}") {
        _mint(msg.sender, ${constructor.initialSupply} * 10 ** uint(decimals()));  // Initial mint to the address deploying the contract
    }
`;

    if (features.mintable) {
        contract += `
    /**
     * @dev Function to mint tokens (Only owner can mint).
     * @param to The address that will receive the minted tokens.
     * @param amount The amount of tokens to mint.
     */
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
`;
    }

    if (features.pausable) {
        contract += `
    /**
     * @dev Function to pause the contract (Only owner can pause).
     */
    function pause() public onlyOwner {
        _pause();
    }

    /**
     * @dev Function to unpause the contract (Only owner can unpause).
     */
    function unpause() public onlyOwner {
        _unpause();
    }
`;
    }

    contract += `
}
`;

    return contract;
};


interface ContractState {
    contract: string;
}


const initialState: ContractState = {
    contract: generateContract({
        mintable: false,
        burnable: false,
        pausable: false,
    }, {
        name: "MyToken",
        symbol: "MTK",
        initialSupply: 1000,
    }),
};

const contractSlice = createSlice({
    name: 'contract',
    initialState,
    reducers: {
        updateContract(state, action: PayloadAction<{ features: FeaturesState; constructor: ConstructorState }>) {
            state.contract = generateContract(action.payload.features, action.payload.constructor);
        },
    },
});

export const { updateContract } = contractSlice.actions;

export default contractSlice.reducer;
