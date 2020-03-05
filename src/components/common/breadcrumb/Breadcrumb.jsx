import React from 'react';


const Breadcrumb = (props) => {

  return (

    <nav className='breadcrumb' aria-label='breadcrumbs'>
              <ul>
                  <li><a href='!#' target="#">Bulma</a></li>
                  <li><a href='!#' target="#">Templates</a></li>
                  <li><a href='!#' target="#">Examples</a></li>
                  <li className='is-active'><a href='!#' target="#" aria-current='page'>Admin</a></li>
              </ul>
            </nav>
  
  );
}

export default Breadcrumb;
