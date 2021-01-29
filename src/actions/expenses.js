import axios from '../axios/axios';
import authHeader from '../services/auth-header';

export const addExpense = ({id={}} ,expense = {
    amount: null,
    comment: '',
    date: null,
    categoryId: null
}) => {
    return (dispatch) => {
        return axios.post(`accounts/${id}/expenses`,
        expense,
        { headers: authHeader() })
        .then((res) => {
            const expense = res.data;
            dispatch({
                type: 'ADD_EXPENSE',
                expense
            });
        }).catch((error) => {
            console.log('error', error);
        });
    };
};

export const getExpenses = ({id}={}) => {
    return (dispatch) => {
        return axios.get(`accounts/${id}/expenses`,
        { headers: authHeader() })
        .then(res => {
            const expenses = [];
 
            res.data.forEach(expense => {
                expenses.push(expense);
            });
 
            dispatch({
                type: 'GET_EXPENSES',
                expenses
            });
        }).catch((error) => {
            console.log('error', error);
        });
    };
};

export const getOneExpense = ({id: accId} = {}, {id: expId} = {}) => {
    return (dispatch) => {
        return axios.get(`accounts/${accId}/expenses/${expId}`,
        { headers: authHeader() })
        .then((res) => {
            const expense = res.data;
            dispatch({
                type: 'GET_ONE_EXPENSE',
                expense
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
}

export const editExpense = ({ id: accId } = {} , {id: expId} = {} , updates = {}) => {
    return (dispatch) => {
        return axios.patch(`accounts/${accId}/expenses/${expId}`,
        updates,
        { headers: authHeader()})
        .then(() => {
            dispatch({
                type: 'EDIT_EXPENSE',
                expenseId: expId,
                updates
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
};

export const removeExpense = ({ id: accId } = {}, { id: expId } = {}) => {
    return (dispatch) => {
        return axios.delete(`accounts/${accId}/expenses/${expId}`, 
        { headers: authHeader() })
        .then(() => {
            dispatch({
                type: 'REMOVE_EXPENSE',
                expenseId: expId
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
};
