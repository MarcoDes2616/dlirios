import { setUser } from '../store/slices/users.slice';
import { cargarProductosThunk, setCart } from '../store/slices/cart.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Loadder from '../components/loader/Loadder';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { setIsLoading } from '../store/slices/isLoading.slice';
import axios from 'axios';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pathname = useLocation()
    const isLoading = useSelector(state => state.isLoading);
    const [error, setError] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const [state, setState] = useState(0)
    const token = localStorage.getItem("token")
    const user = useSelector(state => state.user)
    const inputNull = { username: "", email: "", password: "", verifyPassword: "" };
      
    console.log(user);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    const submit = (data) => {
        setError(false)
        const {username, email, password, verifyPassword} = data
        if (password != verifyPassword) {
            setError(true)
            return
        }
        axios.post("https://dliriosback-production.up.railway.app/api/v1/users", ({username, email, password}))
            .then(res => {
                dispatch(setUser(res.data))
                setState(0)
            })
            .catch(error => console.log(error.response))
            .finally(reset(inputNull)) 
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
                    <form onSubmit={handleSubmit()}>
                        <h4>Iniciar Sesión</h4>
                        <div className="login_box">
                            <label>Email<span>*</span></label>
                            <input type="email" placeholder="example@example.com" id='email'
                                {...register('email')}
                            />
                            <label>Contraseña<span>*</span></label>
                            <input type="password" id='password' placeholder="********"
                                {...register('password')}
                            />
                        </div>
                        <button className='login_btn'>Ingresar</button>
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
                    <form onSubmit={handleSubmit(submit)}>
                        <h4>Registro</h4>
                        <div className="login_box">
                        <label>Nombre</label>
                            <input className={error && "input_error"}
                                type="text"
                                placeholder="ingresa tu nombre"
                                id='username'
                                {...register('username')}/>
                            <label>Email</label>
                            <input className={error && "input_error"} 
                                type="email"
                                placeholder="example@example.com"
                                id='email'
                                {...register('email')} />
                            <label>Contraseña</label>
                            <input className={error && "input_error"}
                                type="password"
                                id='password'
                                placeholder="********"
                                {...register('password')}
                            />
                            <label>Confirmar contraseña</label>
                            <input className={error && "input_error"}
                                type="password"
                                id='verifyPassword'
                                placeholder="********"
                                {...register('verifyPassword')} />
                        </div>
                        {error && 
                        <p>* Contraseñas no coinciden</p>
                        }
                        <button type='submit' className='login_btn'>Registrarse</button>
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
