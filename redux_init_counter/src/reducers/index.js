/* 
  Reducers
    Apesar das Actions ouvirem ações realizadas pelo usuário ou pela aplicação, 
    a mesma não realiza nenhuma alteração em nosso estado global. 
    Para alterar qualquer informação no State precisamos utilizar os Reducers.
*/
import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counterReducer,
    loggedReducer
});

export default allReducers;