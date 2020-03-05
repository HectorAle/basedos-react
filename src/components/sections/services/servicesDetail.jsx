import React from 'react';

function OrdersDetail(props) {
  
  const Id = props.match.params.number ? props.match.params.number : 0;

  return (
   <h1>Detalle del Servicio: <span style={{color:'red'}}>{Id}</span></h1>
  );
}

export default OrdersDetail;

