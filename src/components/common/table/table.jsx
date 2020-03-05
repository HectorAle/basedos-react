import React from 'react';

const Table= (props) => {

    
    return(
       <table className='table is-fullwidth is-striped'>
                    <tbody>
                        <tr>
                            <td width='5%'><i className='fa fa-bell-o'></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a className='button is-small is-primary' href='!#'>Editar</a></td>
                        </tr>
                        <tr>
                            <td width='5%'><i className='fa fa-bell-o'></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a className='button is-small is-primary' href='!#'>Editar</a></td>
                        </tr>
                        <tr>
                            <td width='5%'><i className='fa fa-bell-o'></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a className='button is-small is-primary' href='!#'>Editar</a></td>
                        </tr>
                        <tr>
                            <td width='5%'><i className='fa fa-bell-o'></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a className='button is-small is-primary' href='!#'>Editar</a></td>
                        </tr>  
                      </tbody>
                    </table>
    );
}

export default Table;