import React from 'react';
import { Link, withRouter } from 'react-router-dom'

import style from './Menu.module.css';
import logo from '../../../assets/react-logo.png';


const Menu = (props) => {

  const currentPath = (path) =>{
    const current = props.location.pathname || null;
    return (path===current ? 'navbar-item is-active' : 'navbar-item');

  };

  return (
      <nav className={`${style.navbarLine} navbar is-white` } role="navigation" aria-label="main navigation">
        <div className={`navbar-brand ${style.menu} `}>
          <a className="navbar-item" href='/' target="#" >
            <img src={logo} alt='React js' width="112" height="28" />
          </a>

          <Link
            key={1} 
            to={'/'} 
            className={ currentPath('/') }
            >
            <i className={'ion ion-md-home'}></i>{'Inicio'}
          </Link>
          <Link
            key={2} 
            to={'/orders'} 
            className={ currentPath('/orders') }
            >
            <i className={'ion ion-md-text'}></i>{'Ordenes'}
          </Link>
          <Link
            key={3} 
            to={'/services'} 
            className={ currentPath('/services') }
            >
            <i className={'ion ion-md-list-box'}></i>{'Servicios'}
          </Link>                   
        </div>
        <div className="navbar-end">
          <a className={`${style.curenttime} navbar-item` } href='!#' target="#">
          <h1>Hora</h1>
          </a>
        
        </div>
      </nav>
  );
}

export default (withRouter)(Menu);