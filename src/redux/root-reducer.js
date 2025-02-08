import { combineReducers } from 'redux'
import  userSlice  from './user/slice'

export default combineReducers({
    user: userSlice,
    //cartSlice < exemplo
    //caso tenha outro reducer mais pra frente importar e colocar aqui
})