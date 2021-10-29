import axios from '../axios/axios';
import authHeader from '../services/auth-header';

export const signup = (user = {
    name: '',
    email: '',
    password: ''
}) => {
    return (dispatch) => {
        const userData = {
            name: user.name,
            email: user.email,
            password: user.password
        };

        return axios.post('/signup', userData).then(res => {
            const userData = res.data;
            dispatch({ type: 'SIGNUP', user: userData });
            localStorage.setItem('user', JSON.stringify(userData));
        }).catch((error) => {
            console.log('error', error);
        });
    };
};


export const login = (user = {
    email: '',
    password: ''
}) => {
    return (dispatch) => {
        const userData = {
            email: user.email,
            password: user.password
        };

        return axios.post('/login', userData).then(res => {
            const userData = res.data;
            dispatch({ type: 'LOGIN', user: userData });
            localStorage.setItem('user', JSON.stringify(userData));
        }).catch((error) => {
            console.log('error', error);
        });
    };
};

export const logout = () => {
    return (dispatch) => {
        return axios.post('/logout', null, { headers: authHeader() })
        .then(() => {
            dispatch({
                type: 'LOGOUT_USER',
            });
            localStorage.removeItem('user');
        }).catch((error) => {
            console.log('error', error);
        });
    }
}

export const logoutAll = () => {
    return (dispatch) => {
        return axios.post('/logoutAll', null, { headers: authHeader() })
        .then(() => {
            dispatch({
                type: 'LOGOUT_ALL_USERS',
            });
            localStorage.removeItem('user');
        }).catch((error) => {
            console.log('error', error);
        });
    }
}

// export const changePassword = (currentPassword, newPassword) => {
//     return (dispatch) => {
//         return axios.patch('/me/password', { currentPassword, newPassword }, { headers: authHeader() })
//         .then(() => {
//             dispatch({
//                 type: 'CHANGE_PASSWORD',
//             });
//         }).catch((error) => {
//             console.log('error', error);
//         });
//     }
// }

export const editUser = (updates) => {
    return (dispatch) => {
        return axios.patch('/me',
        updates,
        { headers: authHeader() })
        .then(() => {
            dispatch({
                type: 'EDIT_USER',
                updates
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
};

export const removeUser = () => {
    return (dispatch) => {
        return axios.delete(`/me`, 
        { headers: authHeader() })
        .then(() => {
            dispatch({
                type: 'REMOVE_USER',
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
};
