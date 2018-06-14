import { ActionType } from '../action/actionType'

export default function wastReducer(state = null, action) {
    switch (action.type) {
        case ActionType.GET_WASTE:
            return action.payload
        case ActionType.WAST_DROPPED:
            return state.filter((wast) => {
                if (wast.name === action.payload) {
                    return false;
                }
                return state;
            })
        default:
            return state;
    }
}