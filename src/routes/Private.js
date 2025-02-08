import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export default function Private({ children }){

    const { user } = useSelector((rootReducer) => rootReducer.user);

    if(!user){
        return <Navigate to='/' />
    }

    return children;
}