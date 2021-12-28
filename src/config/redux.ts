import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "../reducer";

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
});

export default store;
