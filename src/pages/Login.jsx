import { userLoginEmail, userLoginGoogle, userSingUpEmail } from '../store/slices/users.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Loadder from '../components/Loadder';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { setCart } from '../store/slices/cart.slice';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Utils/fireBase.config';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pathname = useLocation()
    const isLoading = useSelector(state => state.isLoading);
    const [errorMessage, setErrorMessage] = useState(undefined);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [state, setState] = useState(0)
    const token = localStorage.getItem("token")
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);


    const cargarProductos = () => {
        const productsLocal = JSON.parse(localStorage.getItem("cart"))
        dispatch(setCart(productsLocal))
    }

    const submitForm = async data => {
        await dispatch(userLoginEmail(data))
            .then(() => {
                navigate('/')
                cargarProductos()
            })
            .catch((err) => {
                if (err.code == 'auth/user-not-found') {
                    setErrorMessage('Usuario no encontrado')
                } else if (err.code == 'auth/wrong-password') {
                    setErrorMessage('Contraseña incorrecta')
                }
                navigate(-1)
            })


    }


    const submitFormR = async data => {
        setErrorMessage(undefined)
        if (data.password === data.verifyPassword) {
            dispatch(userSingUpEmail(data))
                .then(() => setState(1))
                .catch((err) => {
                    setErrorMessage(err.code);
                })
        } else {
            setErrorMessage('Las contraseñas no coinciden')
        }
    }
    const handleOnClick = async () => {
        const googleProvider = new GoogleAuthProvider();
        await signInWithGoogle(googleProvider)
    }

    const signInWithGoogle = async (googleProvider) => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            setCurrentUser(res.user);
            setState(2)
        } catch (err) {
            console.error(err);
        }
    };
    console.log(currentUser);
    console.log(state);
    /* estados
    0 login
    1 register
    2 completar registro
    */

    if (state === 0) {
        return (
            <div className='login_container'>
                {isLoading && <Loadder />}
                <div className="container_form">
                    <p onClick={() => setState(1)}>Aun no tengo una cuenta</p>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <h4>Iniciar Sesión</h4>
                        <div className="login_box">
                            <label>Email<span>*</span></label>
                            <input type="email" placeholder="example@example.com" id='email'
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: '* Este campo es obligatorio'
                                    },
                                    // pattern: {
                                    //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    //     message: "Ingresa una dirección de correo valida example@example.com"
                                    // }
                                })}
                            />
                            {errors.email && <span className='error_alert'>{errors.email.message}</span>}
                            <label>Contraseña<span>*</span></label>
                            <input type="password" id='password'
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: '* Este campo es obligatorio'
                                    }
                                })}
                            />
                            {errors.password && <span className='error_alert'>{errors.password.message}</span>}
                        </div>
                        {errorMessage && <p className='error_login'>{errorMessage}</p>}
                        {isLoading && <Loadder />}
                        <button className='login_btn'>Ingresar</button>
                        <button onClick={() => handleOnClick()}>Login con Google</button>
                    </form>
                </div>
            </div>
        )
    }
    if (state === 1) {
        return (
            <div className='login_container'>
                {isLoading && <Loadder />}
                <div className="container_form">
                    <p onClick={() => setState(0)}>Ya tengo una cuenta</p>
                    <form onSubmit={handleSubmit(submitFormR)}>
                        <h4>Registro</h4>
                        <div className="login_box">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="example@example.com"
                                id='email'
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Este campo es obligatorio'
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "Ingresa una dirección de correo valida example@example.com"
                                    }
                                })} />
                            {errors.email && <p className='error_alert'>{errors.email.message}</p>}
                            <label>Contraseña</label>
                            <input
                                type="password"
                                id='password'
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Este campo es obligatorio'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'La contraseña debe tener al menos 6 caracteres'
                                    },
                                    // pattern: {
                                    //     value: /^(?=.[A-Za-z])$/i,
                                    //     message: "Ingresa una contraseña que contenga por lo menos"
                                    // }
                                })}
                            />
                            {errors.password && <p className='error_alert'>{errors.password.message}</p>}
                            <label>Confirmar contraseña</label>
                            <input
                                type="password"
                                id='verifyPassword'
                                {...register('verifyPassword')} />
                            {errors.verifyPassword && <p className='error_alert'>{errors.verifyPassword.message}</p>}
                        </div>
                        {errorMessage ? errorMessage : ''}
                        {isLoading && <Loadder />}
                        <button className='login_btn'>Registrarse</button>
                        <button onClick={() => handleOnClick()}>Login con Google</button>
                    </form>
                </div >
            </div >
        )
    };
    if (state === 2) {
        return (
            <div className=''>
                {isLoading && <Loadder />}
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <h3>Hola {currentUser.displayName} Bienvenido a D´Lirios Insumos</h3>
                <p>Para una mejor experiencia de usuario, D´Lirios Insumos requiere mayor información de contacto, por lo que te invitamos a completar un rápido formulario de registro!</p>
                <button>Deseo hacerlo luego</button>
                <button>Deseo continuar con el formulario</button>
            </div >
        )
    };
}
export default Login;
