import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            return action.payload;
        }
    }
})

export const cargarProductosThunk = (uid) => (dispatch) => {
    const productsLocal = JSON.parse(localStorage.getItem("cart"))
    if (productsLocal) {
        const filter = productsLocal.filter( product => product.uid === uid )
        dispatch(setCart([...filter]))
    }
}

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;