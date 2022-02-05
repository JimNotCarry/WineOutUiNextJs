import { UserData } from './initialState';
import { ActionType } from './action-types';
import { Action } from './actions';

export interface initialState {
    UserData?: UserData
}

const initialState : initialState = {
    UserData: {
        firstname: '',
        lastname: '',
        username: '',
    }
};

export const UserReducer = (state: initialState = initialState, action: Action) => {
    switch(action.type) {
        case ActionType.USERDATA:
            return state.UserData, action.payload;
        default:
            return state;
    }
};
