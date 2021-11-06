export default (state = [], action) => {
    switch(action.type) {

        case 'ADD_GOAL':
            return [ ...state, action.current && action.goal ]

        case 'GET_GOALS':
            return action.current ? action.goals : state

        case 'GET_ONE_GOAL':
            return [ ...state, action.current && action.goal ]

        case 'EDIT_GOAL':
            return action.current ? state.map((goal) => goal.goalId === action.goalId ? { ...goal, ...action.updates } : goal) : state

        case 'REMOVE_GOAL':
            return action.current ? state.filter(({goalId}) => goalId !== action.goalId) : state

        default:
            return state
    }
};
