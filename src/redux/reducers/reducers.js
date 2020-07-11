import { combineReducers } from 'redux';
import startReducer from './startReducer'
import orderProductReducer from './orderProductsReducer'


export default combineReducers({
    startReducer,
    orderProductReducer,
});