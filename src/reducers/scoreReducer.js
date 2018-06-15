import { ActionType } from '../action/actionType';

const initialScore = {
    score: 0,
    badResult: [],
    goodResult: []
}
export default function scoreReducer(state = initialScore, action) {
    switch (action.type) {
        case ActionType.GOOD_CAST:
            console.log('good cast')
            return {
                ...state,
                score: state.score + action.payload.score,
                goodResult: [...state.goodResult, action.payload.wast]
            }
        case ActionType.BAD_CAST:
            return { ...state, badResult: [...state.badResult, action.payload] }

        default:
            return state;
    }
}