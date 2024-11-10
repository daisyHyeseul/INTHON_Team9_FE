import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/loginSlice';
import userReducer from '../features/userSlice'
import postReducer from '../features/postSlice'
export const store = configureStore({
 
    reducer: {
        login: loginReducer,
        user: userReducer, 
        post: postReducer,
    },
 
});

export default store;
