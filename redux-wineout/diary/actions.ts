import { ActionType } from './action-types';

interface ReturnData {
  type: ActionType.RETURNDATA;
}

export type Action = ReturnData;
