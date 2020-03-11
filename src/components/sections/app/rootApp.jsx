import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store/store';

import style from './rootApp.module.css';
import Menu from '../../common/menu/Menu';

// Pages
import NoMatch from '../../common/errors/NoMatch';
import Home from '../home/Home';
import Orders from '../orders/Orders';
import OrdersDetail from '../orders/OrdersDetail';

import Services from '../services/Services';
import ServicesDetail from '../services/servicesDetail';

class App extends Component {
   
    render() {

        return (
            <>
                <Provider store={store}>
                    <div className={style.container}>
                        <BrowserRouter>
                            <Menu />
                                <div className={`container ${style.borderBlue} ` }>
                                    <Switch>
                                        <Route exact path='/' component={Home} />
                                        <Route exact path='/orders' component={Orders} />
                                        <Route path='/orders/:number' component={OrdersDetail} />

                                        <Route exact path='/services' component={Services} />
                                        <Route exact path='/services/:number' component={ServicesDetail} />
                                        <Route path="*" component={NoMatch} /> 
                                    </Switch>
                                </div>
                        </BrowserRouter>
                    </div>
                </Provider>
            </>
        );

    }

    componentWillUnmount() 
    { 
        clearInterval(this.timer); 
    }
    
}

export default App;
