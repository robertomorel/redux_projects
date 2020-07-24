const INITIAL_STATE = {
  activeModule: {},
  activeLesson: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com React",
      lessons: [
        {
          id: 1,
          title: "Primeira aula"
        },
        {
          id: 2,
          title: "Segunda aula"
        }
      ],
    },
    {
      id: 2,
      title: "Trabalhando com Redux",
      lessons: [
        {
          id: 3,
          title: "Terceira aula"
        },
        {
          id: 4,
          title: "Quarta aula"
        }
      ],
    }
  ]
}

export default function courseReducer(state = INITIAL_STATE, action) {
  if(action.type === 'TOGGLE_LESSON'){
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module
    };
  }

  return state;
}
