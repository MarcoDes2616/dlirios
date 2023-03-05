import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import app from '../../Utils/fireBase.config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged,
    GoogleAuthProvider,
    signOut,
    getAuth
} from 'firebase/auth';

export const usersHandlerSlice = createSlice({
    name: 'auth',
    initialState: false,
    reducers: {
        setState: (state, action) => {
            const newSate = action.payload;
            return newSate;
        }
    }
})

const auth = getAuth(app);

export const userSingUpEmail = (data) => async (dispatch) => {
    dispatch(setIsLoading(true));
    await createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {
            dispatch(setState(true));
            console.log('Usuario creado correctamente');
        })
        .finally( () => dispatch(setIsLoading(false)) );
}

export const userLoginEmail = (data) => async (dispatch) => {
    dispatch(setIsLoading(true));
    await signInWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {
            onAuthStateChanged(auth, currentState => {
                localStorage.setItem('token', currentState.accessToken);
            })
        })
        .finally(() => dispatch(setIsLoading(false)));
}

export const userLoginGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
}

export const logOutSession = () => (dispatch) => {
    dispatch(setIsLoading(true));
    signOut(auth)
        .then(() => {
            dispatch(setState(false));
            localStorage.removeItem('token');
        })
        .catch((err) => console.error(err.message))
        .finally(() => dispatch(setIsLoading(false)))
}

export const { setState } = usersHandlerSlice.actions;

export default usersHandlerSlice.reducer;
