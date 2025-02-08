import { all } from 'redux-saga/effects'
import user from './user/sagaUser'


export default function* rootSaga() {
    return yield all({
        user,
    });
}