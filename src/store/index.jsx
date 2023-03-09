import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cart.slice';
import isLoadingSlice from './slices/isLoading.slice';
// import usersHandlerSlice  from './slices/users.slice';

export default configureStore({
    reducer: {
        isLoadign: isLoadingSlice,
        // auth: usersHandlerSlice,
        cart: cartSlice,
    }
});
