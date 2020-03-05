import React from 'react';
import style from './Home.module.css';
import Menu from '../../common/menu/Menu';
import Breadcrumb from '../../common/breadcrumb/Breadcrumb';
import WelcomeBox from '../../common/welcomeBox/WelcomeBox';
import InfoDashboard from '../../common/infoDashboard/infoDashboard';
import Table from '../../common/table/table';
import CardEvents from '../../common/cardEvents/CardEvents';


function Home() {
  return (
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

                <InfoDashboard />
                
              
              </div>
            </section>

            
          </div>
        </div>
            
          <div className="columns">
            <div className="column is-12">
             
            <CardEvents>
              <Table />
            </CardEvents>
            
            </div>
          </div>
        </div>
  
  
    </div>
  );
}

export default Home;
