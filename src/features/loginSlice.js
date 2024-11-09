import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false, // 초기 로그인 상태
    },
    reducers: {
        toggleLogin: (state) => {
            state.isLoggedIn = true; // 상태를 true로 변경
        },
    },
});

export const { toggleLogin } = loginSlice.actions;

export default loginSlice.reducer;
