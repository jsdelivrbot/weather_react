/**
 * Created by phuongla on 9/13/2017.
 */
import { combineReducers }   from 'redux';
import WeatherReducer from './WeatherReducer';

const rootReducer = combineReducers({
    weatherReducer: WeatherReducer
});

export default rootReducer;