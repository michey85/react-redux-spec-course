import { combineReducers } from 'redux';
import { orderReducer } from './orderReducer';
import {customerReducer} from './customerReducer';

export default combineReducers({
    shop: orderReducer,
    customer: customerReducer,
});
