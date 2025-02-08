import { useSelector } from 'react-redux'

export default function Header(){

    const { user } = useSelector((rootReducer) => rootReducer.user);

    return(

        <div>

            <h3>
                Bem vindo(a), {user.login}! 
            </h3>

            <button>Fazer Login</button>

        </div>


    );

}