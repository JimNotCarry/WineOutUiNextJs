import { ActionType } from './action-types';
import { UserData } from './initialState';

interface GetUserDataByUsername {
    type: ActionType.USERDATA,
    payload: UserData
}

export type Action = GetUserDataByUsername;