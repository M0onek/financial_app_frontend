import axios from '../axios/axios';
import authHeader from '../services/auth-header';
import { store } from '../app';
import moment from 'moment';

const isCurrentDate = ({year, month}) => {
    if (month === undefined) month = moment().month()+1
    if (year === undefined) year = moment().year()
    const goalsDate = moment()
    return goalsDate.month()+1 === month && goalsDate.year() === year
}

const isSelectedDate = ({year, month}) => {
    if (month === undefined) month = moment().month()+1
    if (year === undefined) year = moment().year()
    const goalsDate = store.getState().filters.goalsDate
    return goalsDate.month()+1 === month && goalsDate.year() === year
}

export const addGoal = ({id}={} , goal = {goalType: null, name: null, amount: null, categoryId: null}, params = {}) => {
    return (dispatch) => {
        return axios.post(`accounts/${id}/goals`,
        goal,
        { headers: authHeader(), params })
        .then((res) => {
            const goal = res.data;
            dispatch({
                type: 'ADD_GOAL',
                goal,
                current: isCurrentDate(params),
                selected: isSelectedDate(params)
            });
        }).catch((error) => {
            console.log('error', error);
        });
    };
};

export const getGoals = ({id}={}, params = {}) => {
    return (dispatch) => {
        return axios.get(`accounts/${id}/goals`,
        { headers: authHeader(), params })
        .then(res => {
            const goals = [];
 
            res.data.forEach(goal => {
                goals.push(goal);
            });
 
            dispatch({
                type: 'GET_GOALS',
                goals,
                current: isCurrentDate(params),
                selected: isSelectedDate(params)
            });
        }).catch((error) => {
            console.log('error', error);
        });
    };
};

export const getOneGoal = ({id: accId} = {}, {id: goalId} = {}, params = {}) => {
    return (dispatch) => {
        return axios.get(`accounts/${accId}/goals/${goalId}`,
        { headers: authHeader(), params })
        .then((res) => {
            const goal = res.data;
            dispatch({
                type: 'GET_ONE_GOAL',
                goal,
                current: isCurrentDate(params),
                selected: isSelectedDate(params)
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
}

export const editGoal = ({ id: accId } = {} , { id: goalId} = {} , updates = {}, params = {}) => {
    return (dispatch) => {
        return axios.patch(`accounts/${accId}/goals/${goalId}`,
        updates,
        { headers: authHeader(), params })
        .then((res) => {
            dispatch({
                type: 'EDIT_GOAL',
                updates: res.data,
                goalId,
                current: isCurrentDate(params),
                selected: isSelectedDate(params)
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
};

export const removeGoal = ({ id: accId } = {}, { id: goalId } = {}, params = {}) => {
    return (dispatch) => {
        return axios.delete(`accounts/${accId}/goals/${goalId}`, 
        { headers: authHeader(), params })
        .then(() => {
            dispatch({
                type: 'REMOVE_GOAL',
                goalId,
                current: isCurrentDate(params),
                selected: isSelectedDate(params)
            });
        }).catch((error) => {
            console.log('error', error);
        });
    }
};
