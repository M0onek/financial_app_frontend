export default (state = [], action) => {
    switch(action.type) {

        case 'ADD_GOAL':
            return [ ...state, action.goal ]

        case 'GET_GOALS':
            return action.goals

        case 'GET_ONE_GOAL':
            return [ ...state, action.goal ]

        case 'EDIT_GOAL':
            return state.map((goal) => goal.goalId === action.goalId ? { ...goal, ...action.updates } : goal)

        case 'REMOVE_GOAL':
            return state.filter(({goalId}) => goalId !== action.goalId)

        default:
            return state
    }
};
