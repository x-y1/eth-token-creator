import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ContractState {
    contract: string;
}

const initialState: ContractState = {
    contract: `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title EVM Token
 * @dev Basic ERC-20 Token
 */
contract Token is ERC20 {

    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     * @param name The name of the token.
     * @param symbol The symbol of the token.
     * @param initialSupply The initial supply of tokens
     */
    constructor(string memory name, string memory symbol, uint256 initialSupply) payable ERC20(name, symbol) {
        _mint(msg.sender, initialSupply * 10 ** uint(decimals()));  // Initial mint to the address deploying the contract
        
    }

}
`,
};

const contractSlice = createSlice({
    name: 'contract',
    initialState,
    reducers: {
        editContract(state, action: PayloadAction<string>) {
            state.contract = action.payload
        }
    }

});

export const { editContract } = contractSlice.actions;

export default contractSlice.reducer;