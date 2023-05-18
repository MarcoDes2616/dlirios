import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../Utils/service';

const Resetpassword = () => {
    const { token } = useParams()
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate()

    console.log(token);

    const submitNewPassword = (data) => {
        const {password, verify} = data
        if (password == verify) {
            resetPassword(data, token, navigate)
        }
    }

    return (
        <div className='reset'>
            <br /><br /><br /><br /><br /><br /><br />
            <p>Volver al login</p>
            <form onSubmit={handleSubmit(submitNewPassword)}>
                <div className='input_box'>
                    <legend>Ingresar nueva contraseña</legend>
                    <input required type="password" name='password' {...register('password')} />
                </div>
                <div className='input_box'>
                    <legend>Confirmar contraseña</legend>
                    <input required type="password" name='verify' {...register('verify')}/>
                </div>
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Resetpassword;