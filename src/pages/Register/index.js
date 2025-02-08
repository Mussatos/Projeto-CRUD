import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/user/slice';
import { useNavigate } from 'react-router'
import { checkLoginUser } from '../../redux/user/slice'
import { useEffect } from 'react';

export default function Register() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm()

    useEffect(() => {
        async function checkLogin() {
            const localDoc = localStorage.getItem('@ticketsPRO');
            const storageUser = JSON.parse(localDoc);

            if (storageUser) {
                dispatch(checkLoginUser({
                    name: storageUser.name,
                    email: storageUser.email,
                    uid: storageUser.uid,
                }))
                navigate('/home');
            }
        }
        checkLogin();
    }, [])

    async function handleRegister(data) {
        await dispatch(registerUser({
            name: data.name,
            email: data.email,
            password: data.password,
        }))
        navigate('/home');
    }

    return (

        <div>

            <form onSubmit={handleSubmit(handleRegister)}>

                <label>Nome</label>
                <input type='text'
                    {...register('name')}
                    id='name'
                    placeholder='Digite seu nome...' />

                <label>Login</label>
                <input type='text'
                    {...register('email')}
                    id='email'
                    placeholder='Digite seu email...' />

                <label>Senha</label>
                <input type='password'
                    {...register('password')}
                    id='password'
                    placeholder='Digite sua senha...' />

                <label>Confirmar senha</label>
                <input type='password'
                    placeholder='Repita sua senha...' />

                <button type='submit'>Acessar</button>

            </form>

        </div>


    );

}