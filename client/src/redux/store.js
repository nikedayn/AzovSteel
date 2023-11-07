import { configureStore } from '@reduxjs/toolkit';
import slidersReducer from './reducers/slidersReducer';
import productsReducer from './reducers/productsReducer';

const store = configureStore({
    reducer: {
        productsReducer: productsReducer,
        slidersReducer: slidersReducer
    }
})

export default store;