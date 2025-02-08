import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/user/slice';
import { useNavigate } from 'react-router'
import { useEffect } from 'react';
import { checkLoginUser } from '../../redux/user/slice'

export default function Login() {

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

    async function handleLogin(data) {
        if (data.email === '' || data.password === '') {
            alert('Preencha todos os campos para o login!');
            return;
        }
        else {
            await dispatch(loginUser({
                email: data.email,
                password: data.password,
            }))
            navigate('/home');
        }
    }

    return (

        <div>

            <form onSubmit={handleSubmit(handleLogin)}>

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

                <button type='submit'>Acessar</button>

            </form>

        </div>


    );

}