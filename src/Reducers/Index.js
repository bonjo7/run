import { combineReducers } from 'redux';
import alert from './Alert';
import auth from './Auth';
import profile from './Profile';

export default combineReducers({
    alert,
    auth,
    profile
});