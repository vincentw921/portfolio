import rocket from './rocket_ship_image.png';

import Headshot from './Headshot';
import Stars from './Stars';

import './RocketShip.css';
import { Fragment } from 'react';


function RocketShip() {
    return (
        <div className="scene">
            {/* <Headshot /> */}
            <div className="rocket">
            <img src={rocket} className='body' alt="rocket" />
            </div>
            <Stars />
        </div>
    );
}

export default RocketShip;