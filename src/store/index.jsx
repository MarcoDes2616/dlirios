import { configureStore } from '@reduxjs/toolkit';
import isLoadingSlice from './slices/isLoading.slice';
import usersHandlerSlice  from './slices/users.slice';

export default configureStore({
    reducer: {
        isLoadign: isLoadingSlice,
        auth: usersHandlerSlice,
    }
});
