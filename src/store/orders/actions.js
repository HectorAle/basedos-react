import _ from 'lodash';
import {ORDERS_GET} from './constants';
import { loadingStart, loadingFinished } from '../loading/actions';
import { errorsAdd } from '../errors/actions';
export const ordersGet = (payload) => {

	return async (dispatch, timmer) => {
		try{

			dispatch(loadingStart({module:'ORDERS'}));

      // throw ('error generado');

      const response = await fetch('/api/orders/');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
     
      const rows= body.map((item)=>{
        return { 
          Id: item.clientId,
          Nombre: item.clientName,
          Descripción: item.descrip,
          Servicio: item.servicesName,
          Ingresado: item.usersName,
          button: 'button'
        }
      });
      
      let count= _.countBy(rows,{});
      count = count.true;
      
      
      dispatch({ type: ORDERS_GET, payload: { rows: [...rows], count: count } });
      
      setTimeout( () => dispatch( loadingFinished('ORDERS') ), 2500 );
     
			
		}catch(e){
      dispatch(errorsAdd([ { error:e, module:'ORDERS' }  ]));

			dispatch(loadingFinished({module:'ORDERS'}));
		}
	};
};




export default {
  ordersGet
};

