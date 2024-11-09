// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { value: '나' },
    reducers: {
    },
});

export default userSlice.reducer;
