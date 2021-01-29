import axios from '../axios/axios';
import authHeader from '../services/auth-header';

export const addExpenseCategory = ({id}={} , expenseCategory = '') => {
    return (dispatch) => {
        return axios.post(`accounts/${id}/expense_categories`,
        expenseCategory,
        { headers: authHeader() })
        .then((res) => {
            const expenseCategory = res.data;
            dispatch({
                type: 'ADD_EXPENSE_CATEGORY',
                expenseCategory
            });
        }).catch((error) => {
            console.log('error', error);
        });
    };
};

export const getExpenseCategories = ({id}={}) => {
    return (dispatch) => {
        return axios.get(`accounts/${id}/expense_categories`,
        { headers: authHeader() })
        .then(res => {
            const expenseCategories = [];
 
            res.data.forEach(expenseCategory => {
                expenseCategories.push(expenseCategory);
            });
 
            dispatch({
                type: 'GET_EXPENSE_CATEGORIES',
                expenseCategories
            });
        }).catch((error) => {
            console.log('error', error);
        });
    };
};

export const getOneExpenseCategory = ({id: accId} = {}, {id: catId} = {}) => {
    return (dispatch) => {
        return axios.get(`accounts/${accId}/expense_categories/${catId}`,
        { headers: authHeader() })
        .then((res) => {
            const expenseCategory = res.data;
            dispatch({
                type: 'GET_ONE_EXPENSE_CATEGORY',
                expenseCategory
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
}

export const editExpenseCategory = ({ id: accId } = {} , {id: catId} = {} , updates = {}) => {
    return (dispatch) => {
        return axios.patch(`accounts/${accId}/expense_categories/${catId}`,
        updates,
        { headers: authHeader()})
        .then(() => {
            dispatch({
                type: 'EDIT_EXPENSE_CATEGORY',
                updates,
                categoryId: catId
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
};

export const removeExpenseCategory = ({ id: accId } = {}, { id: catId } = {}) => {
    return (dispatch) => {
        return axios.delete(`accounts/${accId}/expense_categories/${catId}`, 
        { headers: authHeader() })
        .then(() => {
            dispatch({
                type: 'REMOVE_EXPENSE_CATEGORY',
                categoryId: catId
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
};
