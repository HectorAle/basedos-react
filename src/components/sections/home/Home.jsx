import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';
import { css } from '@emotion/core';
import PacmanLoader from 'react-spinners/PacmanLoader';

import { ordersGet } from '../../../store/orders/actions';


import style from './Home.module.css';
import Breadcrumb from '../../common/breadcrumb/Breadcrumb';
import WelcomeBox from '../../common/welcomeBox/WelcomeBox';
import InfoDashboard from '../../common/infoDashboard/infoDashboard';
import Table from '../../common/table/table';
import CardEvents from '../../common/cardEvents/CardEvents';


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: fixed;

    z-index: 1;
    background: #ECF0F3;
    left: 0%;
    
    top: 150px;
    height: 100%;
    width: 100%;
   
    transition:all .3s ease;
    opacity: 0.8;

`;



class Home extends Component {
   state = {
    dataColumns: ['Id', 'Nombre', 'Descripción', 'Servicio','Ingresado','button'],
  };


  componentDidMount() {
    const {ordersGet} = this.props;
    ordersGet();
    
  }

   getOrders= () => {
    const { ordersGet } = this.props;
    ordersGet();
  };



  render() {

    const {dataColumns} = this.state;
    const {orders: {list}, orders: {count}, loading} = this.props;

    return (
      <Fragment>
      
       <PacmanLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'red'}
          loading={loading.fetching}
        />

      
        <div className={style.container}>

          <div className={`container ${style.borderBlue} ` }>
            <div className="columns">
              <div className="column is-12">
                
                <Breadcrumb/>
                
                <WelcomeBox
                  title='Bienvenido Juanin Jan Jarri'
                  subTitle='Que tengas un excelente día!'
                />

                <section className="info-tiles">
                  <div className="tile is-ancestor has-text-centered">

                    <InfoDashboard 
                      title={count}
                      subTitle="Ordenes abiertas"
                    />
                    <InfoDashboard 
                      title={0}
                      subTitle="Servicios"
                    />
                    
                  
                  </div>
                </section>

                
              </div>
            </div>
                
              <div className="columns">
                <div className="column is-12">
                
                 <CardEvents count={count}>
                      <Table 
                        dataColumns={dataColumns} 
                        dataRows={list}
                        routeReturn={'/orders'}  
                      />
                  </CardEvents>
                
                </div>
              </div>
            </div>
      
      
        </div>
      </Fragment>
  );
}
}


// export default Orders;
const mapStateToProps = state => {
  return {
      loading: state.loading,
      errors: state.errors,
      orders: state.orders
  }
};

export const mapDispatchToProps = (dispatch) => ({
  ordersGet: (payload) => dispatch(ordersGet( payload )),
  
  
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home) ;