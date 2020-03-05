import React from 'react';

const CardEvents= (props)=> {

    return (
        <div className="card events-card">

            <div className="card-table">
            <div className="content">
                
             {props.children}

            </div>
            </div>

            <footer className="card-footer">
                <a href="#" className="card-footer-item">Total de registros: 4</a>
            </footer>

      </div>
    )
};

export default CardEvents;