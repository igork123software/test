import * as constants from './constants';

export function addUser(user) {
    return dispatch => {
        return dispatch({
            type: constants.ADD_USER,
            data: user
        });
    }
}