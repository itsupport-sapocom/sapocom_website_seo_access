import { configureStore } from "@reduxjs/toolkit";
import valueReducer from "./reducers/valueReducer";

const store = configureStore({
    reducer: {
        value: valueReducer
    }
})

export default store;