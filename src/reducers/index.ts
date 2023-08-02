import { combineReducers } from 'redux';
import buildings from './buildings';
import options from './options';

export default combineReducers({
    buildings,
    options
});