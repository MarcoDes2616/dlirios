import { motion } from 'framer-motion';
import React from 'react';

const Menuslider = ({ isOpen }) => {


    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };

    return (
        <motion.div className='menu_slider'
            variants={{
                open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.7,
                        delayChildren: 0.3,
                        staggerChildren: 0.05
                    }
                },
                closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.3
                    }
                }
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
            <div>
                <motion.a variants={itemVariants}>Item 1 </motion.a>
                <motion.a variants={itemVariants}>Item 2 </motion.a>
                <motion.a variants={itemVariants}>Item 3 </motion.a>
                <motion.a variants={itemVariants}>Item 4 </motion.a>
                <motion.a variants={itemVariants}>Item 5 </motion.a>
            </div>
        </motion.div>
    );
};

export default Menuslider;