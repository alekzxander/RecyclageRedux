import { ActionType } from '../action/actionType';

export default function scoreReducer(state = 0, action) {
    switch (action.type) {
        case ActionType.UPDATE_SCORE:
            console.log(state)
            return state + 10;
        default:
            return state;
    }
}