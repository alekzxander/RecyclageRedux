import { ActionType } from '../action/actionType';

const initialScore = {
    score: 0,
    badResult: [],
    goodResult: []
}
export default function scoreReducer(state = initialScore, action) {
    switch (action.type) {
        case ActionType.GOOD_CAST:
            return {
                ...state,
                score: state.score + action.payload.score, // Ajoute 10 point à chaque bon recyclage
                goodResult: [...state.goodResult, action.payload.wast]
            }
        case ActionType.BAD_CAST:
            return { ...state, badResult: [...state.badResult, action.payload] }

        default:
            return state;
    }
}