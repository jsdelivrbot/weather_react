/**
 * Created by phuongla on 9/13/2017.
 */
import { FETCH_WEATHER } from '../actions';

export default function (state = { cities: [] }, action) {
    console.log(action);

    const { type, payload } = action;
    switch (type) {
        case FETCH_WEATHER:
            const { cities } = state;
            const { data } = payload;
            return {
                ...state,
                cities: [...cities, data]
            };
        default:
            return state;
    }
}