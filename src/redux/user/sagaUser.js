import { all, takeLatest, call, put } from 'redux-saga/effects'
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';

import { loginUserSuccess, loginUserFailure, registerUserSuccess, registerUserFailure, storageUser } from './slice';

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

        if (docSnap.exists()) {
            const userData = docSnap.data();
            yield put(loginUserSuccess(userData))
            yield put(storageUser(userData))
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

        const docRef = doc(db, 'users', user.uid);

        const docSnap = yield call(getDoc, docRef);

        if (docSnap.exists()) {
            const userData = docSnap.data();
            yield put(registerUserSuccess(userData))
            yield put(storageUser(userData))
        }

    }
    catch (error) {
        yield put(registerUserFailure(error.message));
    }
}

function* signOutUser() {
    try {
        yield call(signOut, auth);
        localStorage.removeItem('@ticketsPRO');
    }
    catch (error) {
        console.log(error.message);
    }

}


export default all([
    takeLatest("user/loginUser", loginUser),
    takeLatest("user/registerUser", registerUser),
    takeLatest("user/signOutUser", signOutUser)
])