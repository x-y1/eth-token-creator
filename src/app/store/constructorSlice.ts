import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConstructorState {
    tokenName: string;
    symbol: string;
    initialSupply: number;
}

const initialState: ConstructorState = {
    tokenName: "MyToken",
    symbol: "MTK",
    initialSupply: 1000,
};

const constructorSlice = createSlice({
    name: 'constructor',
    initialState,
    reducers: {
        updateConstructor(state, action: PayloadAction<Partial<ConstructorState>>) {
            return { ...state, ...action.payload };
        },
    },
});

export const { updateConstructor } = constructorSlice.actions;
export default constructorSlice.reducer;
