// src/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'postId',
    initialState: {
        postId: '', // 초기값 설정
    },
    reducers: {
        setpostId: (state, action) => {
            state.postId = action.payload; // number 업데이트
        },
    },
});

export const { setpostId } = postSlice.actions;
export default postSlice.reducer;
