import { combineReducers } from 'redux';
import loading from './loading/reducer';
import errors from './errors/reducer';


export const reducers = () => ({
  ...loading,
  ...errors,

});

export default combineReducers( reducers() );
