import * as constants from './constants';

const initialState = {
    userData: {}
};

function reducerUser(state = initialState, action) {
    const { type, data } = action;

    switch (type) {
        case constants.ADD_USER:
            return {
                ...state,
                userData: data
            };

        default:
            return state;
    }
};

export default reducerUser;