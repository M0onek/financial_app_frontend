import axios from '../axios/axios';
import authHeader from '../services/auth-header';

export const addGoal = ({id}={} , goal = {goalType: null, name: null, amount: null, categoryId: null}) => {
    return (dispatch) => {
        return axios.post(`accounts/${id}/goals`,
        goal,
        { headers: authHeader() })
        .then((res) => {
            const goal = res.data;
            dispatch({
                type: 'ADD_GOAL',
                goal
            });
        }).catch((error) => {
            console.log('error', error);
        });
    };
};

export const getGoals = ({id}={}) => {
    return (dispatch) => {
        return axios.get(`accounts/${id}/goals`,
        { headers: authHeader() })
        .then(res => {
            const goals = [];
 
            res.data.forEach(goal => {
                goals.push(goal);
            });
 
            dispatch({
                type: 'GET_GOALS',
                goals
            });
        }).catch((error) => {
            console.log('error', error);
        });
    };
};

export const getOneGoal = ({id: accId} = {}, {id: goalId} = {}) => {
    return (dispatch) => {
        return axios.get(`accounts/${accId}/goals/${goalId}`,
        { headers: authHeader() })
        .then((res) => {
            const goal = res.data;
            dispatch({
                type: 'GET_ONE_GOAL',
                goal
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
}

export const editGoal = ({ id: accId } = {} , { id: goalId} = {} , updates = {}) => {
    return (dispatch) => {
        return axios.patch(`accounts/${accId}/goals/${goalId}`,
        updates,
        { headers: authHeader()})
        .then((res) => {
            dispatch({
                type: 'EDIT_GOAL',
                updates: res.data,
                goalId
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
};

export const removeGoal = ({ id: accId } = {}, { id: goalId } = {}) => {
    return (dispatch) => {
        return axios.delete(`accounts/${accId}/goals/${goalId}`, 
        { headers: authHeader() })
        .then(() => {
            dispatch({
                type: 'REMOVE_GOAL',
                goalId
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
};
