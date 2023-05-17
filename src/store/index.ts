import {combineReducers, configureStore} from '@reduxjs/toolkit';
import productReducer from 'store/reducers/ProductSlice';

const rootReducer = combineReducers({
    product: productReducer
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
