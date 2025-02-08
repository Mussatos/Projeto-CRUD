import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/user/slice';

export default function Register() {

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm()

    async function handleRegister(data) {
        dispatch(registerUser({
            name: data.name,
            email: data.email,
            password: data.password,
        }))
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