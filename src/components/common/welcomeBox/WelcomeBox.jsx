import React from 'react';
import style from './WelcomeBox.module.css';

const WelcomeBox = (props) => {
   

    return(
         <section className={`hero is-info welcome is-small ${style.cuadroBienvenida} ` }>
            <div className='hero-body'>
                <div className='container'>
                    <h1 className='title'>
                        Bienvenido, Juan Carlos Bodoque.
                    </h1>
                    <h2 className='subtitle'>
                        Que tenga un gran día!
                    </h2>
                </div>
            </div>
        </section>
    )
};

export default WelcomeBox;