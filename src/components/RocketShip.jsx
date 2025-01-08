import rocket from './rocket_ship_image.png';

import Stars from './Stars';
import About from './About';

import './RocketShip.css';
import OngoingProjects from './OngoingProjects';


function RocketShip() {
    return (
        <div className="scene">
            <div className="rocket">
            <img src={rocket} className='body' alt="rocket" />
            </div>
            <Stars />
            <About />
            <OngoingProjects />
        </div>
    );
}

export default RocketShip;