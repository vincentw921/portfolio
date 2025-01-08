import { Fragment } from 'react';
import './About.css';

import src from './about.png';

import { motion, useAnimationControls } from 'framer-motion';

function About() {
    const line1 = "Now Exploring:";
    const line2 = "Planet About Me";

    const sentence = {
        hidden: { opacity: 1, transition: { ease: 'easeOut' }},
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.1
            },
        },

        exit: {
            opacity: 0,
            transition: { ease: 'easeInOut' },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const controls = useAnimationControls();

    return (
        <Fragment>
            <motion.div

                onHoverStart={() => controls.start("visible")}
                onHoverEnd={() => controls.start("hidden")}

                className="about-logo"
                animate={{scale: [1.2, 1, 1.2], opacity: [1]}}
                    transition={{
                        duration: 3,
                        delay: 0.1,
                        repeat: Infinity,
                        ease: [0.5, 0.71, 1, 1.5],
                }}
                whileHover={{ 
                    scale: 1.4,
                    transition: { ease: "linear"}
                }}
                whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.1, ease: "easeOut"}
                }}>
                    <img src={src} alt = "about" />
                </motion.div>
            <motion.h1
                className='hide'
                variants={sentence}
                initial="hidden"
                animate={controls}>
                {line1.split("").map((char, index) => {
                    return (
                        <motion.span key={char + "-" + index} variants={letter}>
                            {char}
                        </motion.span>
                    );
                })}
                <br />
                {line2.split("").map((char, index) => {
                    return (
                        <motion.span key={char + "-" + index} variants={letter}>
                            {char}
                        </motion.span>
                    );
                })}
            </motion.h1>
        </Fragment>
    )
}

export default About;