const {configureStore} from "@reduxjs/toolkit";


export const store  = configureStore({
    blogs:blogsReducer,
})