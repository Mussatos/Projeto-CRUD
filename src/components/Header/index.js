import { useSelector, useDispatch } from 'react-redux'
import { signOutUser } from '../../redux/user/slice';


export default function Header() {

    const dispatch = useDispatch();

    const { user } = useSelector((rootReducer) => rootReducer.user);

    async function handleLogout() {
        await dispatch(signOutUser());
    }

    return (

        <div>
            {user ? (
                <h3>
                    Bem vindo(a), {user?.name}!
                    
                </h3>
            ) :
                (
                    <h3>
                        Bem vindo(a), Fulano!
                    </h3>
                )
            }

            <button onClick={handleLogout}>Logout</button>

        </div>


    );

}