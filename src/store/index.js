import {configureStore} from "@reduxjs/toolkit"
import dotReducer from "./dotSlice"

export default configureStore({
    reducer : {
        dots : dotReducer
    }
})