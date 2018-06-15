import { ActionType } from '../action/actionType'
const initialGarbage = {
    yellow: [],
    green: [],
    marron: [],
    blue: []
}
export default function garbageReducer(state = initialGarbage, action) {
    switch (action.type) {
        case ActionType.CAST_YELLOW:
            return {
                ...state, yellow: [...state.yellow, action.payload]
            }
        case ActionType.CAST_BLUE:
            return {
                ...state, blue: [...state.blue, action.payload],

            }
        case ActionType.CAST_GREEN:
            return {
                ...state, green: [...state.green, action.payload],
            }
        case ActionType.CAST_MARRON:
            return {
                ...state, marron: [...state.marron, action.payload],
            }
        default:
            return state;
    }
}