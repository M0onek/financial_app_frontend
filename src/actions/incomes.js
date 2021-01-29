import axios from '../axios/axios';
import authHeader from '../services/auth-header';

export const addIncome = ({id}={} ,income = {
    amount: null,
    comment: '',
    date: null,
    categoryId: null
}) => {
    return (dispatch) => {
        return axios.post(`accounts/${id}/incomes`,
        income,
        { headers: authHeader() })
        .then((res) => {
            const income = res.data;
            dispatch({
                type: 'ADD_INCOME',
                income
            });
        }).catch((error) => {
            console.log('error', error);
        });
    };
};

export const getIncomes = ({id}={}) => {
    return (dispatch) => {
        return axios.get(`accounts/${id}/incomes`,
        { headers: authHeader() })
        .then(res => {
            const incomes = [];
 
            res.data.forEach(income => {
                incomes.push(income);
            });
 
            dispatch({
                type: 'GET_INCOMES',
                incomes
            });
        }).catch((error) => {
            console.log('error', error);
        });
    };
};

export const getOneIncome = ({id: accId} = {}, {id: incId} = {}) => {
    return (dispatch) => {
        return axios.get(`accounts/${accId}/incomes/${incId}`,
        { headers: authHeader() })
        .then((res) => {
            const income = res.data;
            dispatch({
                type: 'GET_ONE_INCOME',
                income
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
}

export const editIncome = ({ id: accId } = {} , {id: incId} = {} , updates = {}) => {
    return (dispatch) => {
        return axios.patch(`accounts/${accId}/incomes/${incId}`,
        updates,
        { headers: authHeader()})
        .then(() => {
            dispatch({
                type: 'EDIT_INCOME',
                updates,
                incomeId: incId
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
};

export const removeIncome = ({ id: accId } = {}, { id: incId } = {}) => {
    return (dispatch) => {
        return axios.delete(`accounts/${accId}/incomes/${incId}`, 
        { headers: authHeader() })
        .then(() => {
            dispatch({
                type: 'REMOVE_INCOME',
                incomeId: incId
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
};
