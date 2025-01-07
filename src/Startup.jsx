import logo from './logo512.png';
import './Startup.css';
import { motion } from 'framer-motion';

function Startup() {
    // if (x >= limits.right || x <= limits.left) {
    //     xvel *= -1;
    //     x = Math.max(limits.left, Math.min(limits.right, x))
    // }
    // if (y >= limits.bottom || y <= limits.top) {
    //     yvel *= -1;
    //     y = Math.max(limits.top, Math.min(limits.bottom, y))
    // }
    return (
        <header className="Startup-header">
            <motion.div
                animate={{scale: [1.2, 1, 1.2], opacity: [1]}}
                transition={{
                    duration: 3,
                    delay: 0.1,
                    repeat: Infinity,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                whileHover={{ 
                    scale: 1.5,
                    transition: { ease: "linear"}
                }}
                whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.1, ease: "easeOut"}
                }}
                whileDrag={{ 
                    scale: 0.9,
                    transition: { ease: "linear"}
                 }}
                drag
                dragSnapToOrigin
            >
                <img src={logo} className="App-logo" alt="logo" />
            </motion.div>
        </header>
    );
}

export default Startup;