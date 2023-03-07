import { userSingUpEmail, userLoginGoogle } from '../store/slices/users.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loadder from '../components/Loadder';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const isLoading = useSelector(state => state.isLoadign);
    const [errorMessage, setErrorMessage] = useState(undefined);

    const submitForm = async data => {
        console.log(data)
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
                <form onSubmit={handleSubmit(submitForm)}>
                    <h1>Registro</h1>
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
                    </div>
                    <div className="login_box">
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
                    </div>
                    <div className="login_box">
                        <label>Confirmar contraseña</label>
                        <input
                            type="password"
                            id='verifyPassword'
                            {...register('verifyPassword')} />
                        {errors.verifyPassword && <p className='error_alert'>{errors.verifyPassword.message}</p>}
                    </div>
                    {errorMessage ? errorMessage : ''}
                    {isLoading && <Loadder />}
                    <button className='btn btn-singUp'>Registrarse</button>
                    <div className="btn google_session" onClick={googleRegister}>
                        {/* <img src="/Icons/google_logo.png" alt="google_logo" /> */}
                        Registrarse con Google
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;