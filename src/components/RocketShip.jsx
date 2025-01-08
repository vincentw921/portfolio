import rocket from './rocket_ship_image.png';

import Stars from './Stars';

import './RocketShip.css';


function RocketShip() {
    return (
        <div className="scene">
            <div className="rocket">
            <img src={rocket} className='body' alt="rocket" />
            </div>
            <Stars />
        </div>
    );
}

export default RocketShip;