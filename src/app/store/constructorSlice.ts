import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConstructorState {
    name: string;
    symbol: string;
    initialSupply: number;
}

const initialState: ConstructorState = {
    name: "MyToken",
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
