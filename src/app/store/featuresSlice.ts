import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FeaturesState {
    features: Record<string, boolean>;
}

const initialState: FeaturesState = {
    features: {
        mintable: false,
        burnable: false,
        pausable: false,
    },
};

const featuresSlice = createSlice({
    name: 'features',
    initialState,
    reducers: {
        selectFeature(state, action: PayloadAction<{ key: string; value: boolean }>) {
            state.features[action.payload.key] = action.payload.value;
        }
    }

});

export const { selectFeature } = featuresSlice.actions;

export default featuresSlice.reducer;