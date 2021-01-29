import axios from '../axios/axios';
import authHeader from '../services/auth-header';

export const addIncomeCategory = ({id}={} , incomeCategory = '') => {
    return (dispatch) => {
        return axios.post(`accounts/${id}/income_categories`,
        incomeCategory,
        { headers: authHeader() })
        .then((res) => {
            const incomeCategory = res.data;
            dispatch({
                type: 'ADD_INCOME_CATEGORY',
                incomeCategory
            });
        }).catch((error) => {
            console.log('error', error);
        });
    };
};

export const getIncomeCategories = ({id}={}) => {
    return (dispatch) => {
        return axios.get(`accounts/${id}/income_categories`,
        { headers: authHeader() })
        .then(res => {
            const incomeCategories = [];
 
            res.data.forEach(incomeCategory => {
                incomeCategories.push(incomeCategory);
            });
 
            dispatch({
                type: 'GET_INCOME_CATEGORIES',
                incomeCategories
            });
        }).catch((error) => {
            console.log('error', error);
        });
    };
};

export const getOneIncomeCategory = ({id: accId} = {}, {id: catId} = {}) => {
    return (dispatch) => {
        return axios.get(`accounts/${accId}/income_categories/${catId}`,
        { headers: authHeader() })
        .then((res) => {
            const incomeCategory = res.data;
            dispatch({
                type: 'GET_ONE_INCOME_CATEGORY',
                incomeCategory
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
}

export const editIncomeCategory = ({ id: accId } = {} , { id: catId} = {} , updates = {}) => {
    return (dispatch) => {
        return axios.patch(`accounts/${accId}/income_categories/${catId}`,
        updates,
        { headers: authHeader()})
        .then(() => {
            dispatch({
                type: 'EDIT_INCOME_CATEGORY',
                updates,
                categoryId: catId
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
};

export const removeIncomeCategory = ({ id: accId } = {}, { id: catId } = {}) => {
    return (dispatch) => {
        return axios.delete(`accounts/${accId}/income_categories/${catId}`, 
        { headers: authHeader() })
        .then(() => {
            dispatch({
                type: 'REMOVE_INCOME_CATEGORY',
                categoryId: catId
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
};
