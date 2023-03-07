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

    

    return (
        <div className='login_container'>
            <div className="container_form">
                
            </div>
        </div>
    );
};

export default Register;