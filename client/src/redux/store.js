import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsReducer';

const store = configureStore({
    reducer: {
        homePage: productsReducer
    }
})

export default store