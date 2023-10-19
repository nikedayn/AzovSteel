import { configureStore } from '@reduxjs/toolkit';
import slidersReducer from './reducers/slidersReducer';

const store = configureStore({
    reducer: {
        slidersReducer: slidersReducer
    }
})

export default store;