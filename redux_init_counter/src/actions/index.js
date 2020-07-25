/**
  Actions
    São objetos que indicam diretamente uma ação realizada no software, 
    essa Action pode ser algo disparado pelo próprio usuário ou algo disparado 
    pela própria aplicação.

    A Action possui sempre uma propriedade type única que é utilizada pelo 
    Redux para distinguir qual ação está sendo realizada, esse conceito 
    recebe o nome de Action Type.
 */

export const increment = nr => {
    return {
        type: 'INCREMENT',
        payload: 5
    };
};

export const decrement = nr => {
    return {
        type: 'DECREMENT',
        payload: 5
    };
};

export const signin = () => {
    return {
        type: 'SIGN_IN'
    };
};