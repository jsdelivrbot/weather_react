/**
 * Created by phuongla on 9/13/2017.
 */
import axios from 'axios';

const API_KEY = 'c0932d50f7f60c159ca3c25001f3bce0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    /*const response = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: response
    };*/

    return (dispatch) => {
        return axios.get(url).then((response) => {
            dispatch({
                type: FETCH_WEATHER,
                payload: response
            });
        });
    };
}
