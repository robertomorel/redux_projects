/* 
  Indica como o state isLogged será alterado após escolha da action
*/
const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return !state;
        default:
            return state;        
    }
}

export default loggedReducer;