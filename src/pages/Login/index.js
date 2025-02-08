import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/user/slice';

export default function Login(){

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm()

    async function handleLogin(data) {
        dispatch(loginUser({
            email: data.email,
            password: data.password,
        }))
    }

    return(

        <div>

            <form onSubmit={handleSubmit(handleLogin)}>

                <label>Login</label>
                <input type='text'
                {...register('email')}
                id='email'
                placeholder='Digite seu email...'/>

                <label>Senha</label>
                <input type='password'
                {...register('password')}
                id='password'
                placeholder='Digite sua senha...'/>

                <button type='submit'>Acessar</button>

            </form>

        </div>


    );

}