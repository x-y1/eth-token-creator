import { configureStore } from '@reduxjs/toolkit';
import featuresReducer from './featuresSlice';
import contractReducer from './contractSlice';
import constructorReducer from './constructorSlice';
export const store = configureStore({
    reducer: {
        features: featuresReducer,
        contract: contractReducer,
        constructor: constructorReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;