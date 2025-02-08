import { Routes, Route } from 'react-router';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

export default function RoutesApp() {

    return (

        <Routes>

            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home />} />

        </Routes>

    );
}