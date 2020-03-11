import React from 'react';


const Breadcrumb = (props) => {
  const {data} = props;

  return (

    <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
        <li key={1} className={ 'is-active'}>Inicio</li>
          <code style={{color:'green'}}>{JSON.stringify(data)}</code>
        {
          // data.map((item, index)=>{
          //   return(
          //     <li key={index} className={ item.isSelected ? 'is-active':null}><a href={item.url}>{item.name}</a></li>
          //   )
          // })
        }
        </ul>
    </nav>
  
  );
}

export default Breadcrumb;
