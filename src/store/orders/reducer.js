import {
  ORDERS_GET
} from './constants'

const initialState={
  list:'',
  count:0
};

export const ordersReducers = (state = initialState, action) => {
  switch (action.type) {
  
    case ORDERS_GET:
      return { list: [...action.payload.rows], count: action.payload.count };
  
    default:
      return state;
  }
};

export default{
  orders: ordersReducers,
};
