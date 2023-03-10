import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser: (state, action) => {
            const data = action.payload;
            const {uid, email, displayName, photoURL} = data
            const newUser = {
                uid: uid,
                email: email,
                name: displayName,
                image: photoURL
            }
            return newUser;
        }
    }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
