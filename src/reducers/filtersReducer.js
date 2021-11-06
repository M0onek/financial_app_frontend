import moment from 'moment'

moment.locale('pl')

const defaultState = {
    sortBy: 'date',
    raport: 'all',
    startDate: null,
    endDate: null,
    goalsDate: moment().startOf('month'),
    // startDate: moment().startOf('month'),
    // endDate: moment().endOf('month'),
}

export default (state = defaultState, action) => {
    switch (action.type) {

        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount' }

        case 'SORT_BY_DATE':
            return { ...state, sortBy: 'date' }

        case 'RAPORT_ALL':
            return { ...state, raport: 'all' }

        case 'RAPORT_INCOMES':
            return { ...state, raport: 'incomes' }

        case 'RAPORT_EXPENSES':
            return { ...state, raport: 'expenses' }

        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate }

        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate }

        case 'SET_GOALS_DATE':
            return { ...state, goalsDate: action.goalsDate }

        default:
            return state
    }
}
