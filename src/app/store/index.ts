import { configureStore } from '@reduxjs/toolkit';
import featuresReducer from './featuresSlice';
import contractReducer from './contractSlice';

export const store = configureStore({
    reducer: {
        features: featuresReducer,
        contract: contractReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;