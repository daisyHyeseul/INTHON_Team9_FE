// src/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        number: '0', // 초기값 설정
    },
    reducers: {
        setNumber: (state, action) => {
            state.number = action.payload; // number 업데이트
        },
    },
});

export const { setNumber } = userSlice.actions;
export default userSlice.reducer;
