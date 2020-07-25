/* 
  Indica como o state counter será alterado após escolha da action
*/
const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;        
    }
}

export default counterReducer;