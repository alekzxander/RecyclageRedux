import { ActionType } from './actionType'
import axios from 'axios';

export const getWaste = () => {
    return async dispatch => {
        const wast = await axios('/wast.json');
        function shuffle(array) {
            let currentIndex = array.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }
        const wastShuffle = shuffle(wast.data);
        let wastTakeTen = [];
        for (let i = 0; i < 10; i++) {
            wastTakeTen.push(wastShuffle[i]);
        }
        try {
            dispatch({
                type: ActionType.GET_WASTE,
                payload: wastTakeTen

            })
        } catch (error) {
            dispatch(error)
        }
    }
}

export const castInGarbage = (wast, garbage) => {
    return dispatch => {
        if (Object.keys(wast).length > 0 && wast.constructor === Object) {
            switch (garbage) {
                case 'yellow':
                    return dispatch({
                        type: ActionType.CAST_YELLOW,
                        payload: wast
                    })
                case 'green':
                    return dispatch({
                        type: ActionType.CAST_GREEN,
                        payload: wast
                    })
                case 'blue':
                    return dispatch({
                        type: ActionType.CAST_BLUE,
                        payload: wast
                    })
                case 'marron':
                    return dispatch({
                        type: ActionType.CAST_MARRON,
                        payload: wast
                    })
                default: return dispatch()
            }
        }
    }
}
export const dropWast = (wast) => {
    return dispatch => {
        dispatch({
            type: ActionType.WAST_DROPPED,
            payload: wast.wast
        })
    }
}
export const calculScore = (wast, type) => {
    return dispatch => {
        if (wast.type === type) {
            dispatch({
                type: ActionType.GOOD_CAST,
                payload: {
                    wast,
                    score: 10
                }

            })
        } else if (wast.type !== type) {
            dispatch({
                type: ActionType.BAD_CAST,
                payload: wast
            })
        }
    }
}