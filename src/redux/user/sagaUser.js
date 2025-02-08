import { all, takeLatest, call, put } from 'redux-saga/effects'
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';

import { loginUserSuccess, loginUserFailure } from './slice';

import { auth, db } from '../../services/firebaseConnection';
import { doc, getDoc, setDoc } from 'firebase/firestore';


function* loginUser(action) {
    try {
        const infosUser = action.payload;
        
        const userCredentials = yield call(
            signInWithEmailAndPassword, auth, infosUser.email, infosUser.password
        );

        const user = userCredentials.user;

        const docRef = doc(db, 'users', user.uid);

        const docSnap = yield call(getDoc, docRef);

        if(docSnap.exists()){
            const userData = docSnap.data();
            console.log('Usuário encontrado', userData)

            yield put(loginUserSuccess(userData))
        }

    }
    catch (error) {
        yield put(loginUserFailure(error.message));
    }
}

function* registerUser(action) {
    try {
        const infosUser = action.payload;

        const userCredentials = yield call(
            createUserWithEmailAndPassword, auth, infosUser.email, infosUser.password
        );

        const user = userCredentials.user;

        yield call(setDoc, doc(db, 'users', user.uid), {
            name: infosUser.name,
            email: infosUser.email,
            uid: user.uid
        });

        console.log('Usuário cadastrado com sucesso!', user);

    }
    catch (error) {
        console.log('deu ruim no cadastro', error)
    }
}


export default all([
    takeLatest("user/loginUser", loginUser),
    takeLatest("user/registerUser", registerUser),
])