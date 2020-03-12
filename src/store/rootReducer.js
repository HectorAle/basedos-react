import { combineReducers } from 'redux';
import loading from './loading/reducer';
import errors from './errors/reducer';
import orders from './orders/reducer';


export const reducers = () => ({
  ...loading,
  ...errors,
  ...orders,

});

export default combineReducers( reducers() );
