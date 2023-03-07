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


    return (
        <div className='login_container'>
            {/* <img src="images/bg_login.jpg" alt="bg_login" className='login_bg' /> */}
            <div className="container_form">
                <form onSubmit={handleSubmit(submitForm)}><br /><br /><br />
                    <h4>Iniciar Sesión</h4>
                    <div className="login_box">
                        <label>Email</label>
                        <input type="email" placeholder="example@example.com" id='email'
                            {...register('email',{
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                },
                                // pattern: {
                                //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                //     message: "Ingresa una dirección de correo valida example@example.com"
                                // }
                            })}
                        />
                        {errors.email && <span className='error_alert'>{errors.email.message}</span>}
                        <label>Contraseña</label>
                        <input type="password" id='password'
                            {...register('password',{
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
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
            </div>
        </div>
    );
};

export default Login;

