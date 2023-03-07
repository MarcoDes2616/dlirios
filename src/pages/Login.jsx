import { userLoginEmail, userLoginGoogle } from '../store/slices/users.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Loadder from '../components/Loadder';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pathname = useLocation()
    const isLoading = useSelector(state => state.isLoading);
    const [errorMessage, setErrorMessage] = useState(undefined);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [form, setForm] = useState("login")
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    const submitForm = async data => {
        await dispatch(userLoginEmail(data))
            .then( () => {
                navigate('/')
            })
            .catch( (err) => {
                if (err.code == 'auth/user-not-found') {
                    setErrorMessage('Usuario no encontrado')
                } else if (err.code == 'auth/wrong-password') {
                    setErrorMessage('Contraseña incorrecta')
                }
                navigate(-1)
            })

    }

    const googleLogin = async () => {
        await userLoginGoogle()
            .then((res) => {
                localStorage.setItem('token', res.user.accessToken);
                navigate('/')
            })
            .catch( (err) => {
                setErrorMessage(err.code)
            })
    }

    const submitFormR = async data => {
        setErrorMessage(undefined)
        if(data.password === data.verifyPassword){
            dispatch(userSingUpEmail(data))
                .then(() => navigate('/login'))
                .catch((err) =>{
                    setErrorMessage(err.code);
                })
        }else{
            setErrorMessage('Las contraseñas no coinciden')
        }
    }

    const googleRegister = async () => {
        await userLoginGoogle()
            .then( (res) =>{
                console.log(res);
                localStorage.setItem('token', res.user.accessToken);
                navigate('/')
            })
        console.log(result.user.accessToken)
    }


    return (
        <div className='login_container'>
            <div className="container_form">
                {form == "login" ?
                <p onClick={() => setForm("")}>Aun no tengo una cuenta</p> : 
                <p onClick={() => setForm("login")}>Ya tengo una cuenta</p>}
                { form == "login" ?
                <form onSubmit={handleSubmit(submitForm)}>
                    <h4>Iniciar Sesión</h4>
                    <div className="login_box">
                        <label>Email<span>*</span></label>
                        <input type="email" placeholder="example@example.com" id='email'
                            {...register('email',{
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
                            {...register('password',{
                                required: {
                                    value: true,
                                    message: '* Este campo es obligatorio'
                                }
                            })}
                        />
                        {errors.password && <span className='error_alert'>{errors.password.message}</span>}
                    </div>
                    {errorMessage &&  <p className='error_login'>{errorMessage}</p>}
                    {isLoading && <Loadder />}
                    <button className='login_btn'>Ingresar</button>
                    {/* <div className="btn google_session" onClick={ googleLogin }>
                        <img src="/Icons/google_logo.png" alt="" />
                        Ingresar con Google
                    </div> */}
                </form>
                :
                <form onSubmit={handleSubmit(submitFormR)}>
                    <h4>Registro</h4>
                    {/* <div className="login_box">
                        <label>Nombre</label>
                        <input
                            type="text"
                            placeholder="Nombre"
                            id='username'
                            {...register('username', {
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}
                        />
                        {errors.username?.type == 'required' && <p className='error_alert'>{errors.username.message}</p>}
                        <label>Apellido</label>
                        <input
                            type="text"
                            placeholder="Apellido"
                            id='lastname'
                            {...register('lastname', {
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}
                        />
                        {errors.username?.type == 'required' && <p className='error_alert'>{errors.username.message}</p>}
                    </div> */}
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
                    {/* <div className="btn google_session" onClick={googleRegister}>
                        <img src="/Icons/google_logo.png" alt="google_logo" />
                        Registrarse con Google
                    </div> */}
                </form> }
            </div>
        </div>
    );
};

export default Login;

