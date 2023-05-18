import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser: (state, action) => {
            const data = action.payload;
            return data;
        },
    }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
