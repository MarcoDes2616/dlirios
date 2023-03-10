import { setUser } from '../store/slices/users.slice';
import { setCart } from '../store/slices/cart.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Loadder from '../components/Loadder';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, registerNewUser, userExists } from '../Utils/fireBase.config';
import { setIsLoading } from '../store/slices/isLoading.slice';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pathname = useLocation()
    const isLoading = useSelector(state => state.isLoading);
    const [errorMessage, setErrorMessage] = useState(undefined);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [state, setState] = useState(0)
    const token = localStorage.getItem("token")
    const user = useSelector(state => state.user)
    const [newRegister, setNewRegister] = useState({})
    const [telefono, setTelefono] = useState()
    const [direccion, setDireccion] = useState()


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
            const isRegistred = await userExists(res.user.uid)
            dispatch(setUser(res.user))
            localStorage.setItem("token", res.user.uid)
            if(isRegistred){
                setState(4)
            } else {
                setState(2)
            }
        } catch (err) {
            console.error(err);
        }
    };
    const submitRegister = async (data) => {
        dispatch(setIsLoading(true))
        data.registre = true;
        const temp = {...data, ...user}
        await registerNewUser(temp)
        setTelefono()
        setDireccion()
        navigate("/")
        dispatch(setIsLoading(false))
    }
    /* estados
    0 login
    1 register
    2 bienvenida
    3 completar registro
    4 usuario registrado
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
                <h3>Hola {user.name} Bienvenido a D´Lirios Insumos</h3>
                <img src={user.image} alt="" />
                <p>Para una mejor experiencia de usuario, D´Lirios Insumos requiere mayor información de contacto, por lo que te invitamos a completar un rápido formulario de registro!</p>
                <button onClick={() => navigate("/")}>Deseo hacerlo luego</button>
                <button onClick={() => setState(3)}>Deseo continuar con el formulario</button>
            </div >
        )
    };
    if (state === 3) {
        return (
            <div className=''>
                {isLoading && <Loadder />}
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <h3>Registro de usuarios</h3>
                <form onSubmit={handleSubmit(submitRegister)}>
                    <label htmlFor="">Nombre Completo</label>
                    <input type="text" name={"name"} value={user.name} />
                    <label htmlFor="">Correo Electrónico</label>
                    <input type="text" name={"email"} value={user.email} />
                    <label htmlFor="">Teléfono</label>
                    <input type="text" name={"telefono"} value={telefono} 
                    onChange={() => setTelefono(e.target.value)}
                    {...register('telefono', {
                        required: {
                            value: true,
                            message: 'Este campo es obligatorio'
                        }})}/>
                    <label htmlFor="">Dirección de Envío(Avenida/Calle principal, numeracion, Avenida/Calle secundaria, Parroquia, Ciudad, Provincia)</label>
                    <input type="text" name={"dirección"} value={direccion} 
                    onChange={() => setDireccion(e.target.value)}
                    {...register('direccion', {
                        required: {
                            value: true,
                            message: 'Este campo es obligatorio'
                        }})}/>
                <button type='submit'>Enviar</button>
                </form>
            </div >
        )
    };
    if (state === 4) {
        return (
            <div className=''>
                {isLoading && <Loadder />}
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <h3>Hola {user.name} Bienvenido a D´Lirios Insumos</h3>
                <img src={user.image} alt="" />
                <button onClick={() => navigate("/")}>Regresar al home</button>
            </div >
        )
    };
}
export default Login;
