import axios from '../axios/axios';
import authHeader from '../services/auth-header';

export const fillAccounts = (accounts = []) => ({
    type: 'FILL_ACCOUNTS',
    accounts
})

export const addAccount = ( account = '' ) => {
    return (dispatch) => {
        return axios.post('accounts',
        account,
        { headers: authHeader() })
        .then((res) => {
            const account = res.data;
            dispatch({
                type: 'ADD_ACCOUNT',
                account
            });
        }).catch((error) => {
            console.log('error', error);
        });
    };
};

export const getAccounts = () => {
    return (dispatch) => {
        console.log('buuuuuuuuu')
        return axios.get('accounts',
        { headers: authHeader() })
        .then(res => {
            const accounts = [];
 
            res.data.forEach(account => {
                accounts.push(account);
            }); 
            dispatch({
                type: 'GET_ACCOUNTS',
                accounts
            });
        }).catch((error) => {
            console.log('error', error);
        });
    };
};

export const getOneAccount = ({id} = {}) => {
    return (dispatch) => {
        return axios.get(`accounts/${id}`,
        { headers: authHeader() })
        .then((res) => {
            const account = res.data;
            dispatch({
                type: 'GET_ONE_ACCOUNT',
                account
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
}

export const editAccount = ({ id: accId } = {} , updates = {}) => {
    return (dispatch) => {
        return axios.patch(`accounts/${accId}`,
        updates,
        { headers: authHeader()})
        .then(() => {
            dispatch({
                type: 'EDIT_ACCOUNT',
                updates,
                accountId: accId
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
};

export const removeAccount = ({ id: accId } = {}) => {
    return (dispatch) => {
        return axios.delete(`accounts/${accId}`, 
        { headers: authHeader() })
        .then(() => {
            dispatch({
                type: 'REMOVE_ACCOUNT',
                accountId: accId
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
};
