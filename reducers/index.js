import {combineReducers} from 'redux';
import searchomepageReducer from './searchhomepageReducer';

export default combineReducers({
    homepage: searchhomepageReducer
});
