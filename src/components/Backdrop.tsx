import React, { useEffect, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from "framer-motion";

interface BackdropProps{
    onClick: () => void;
    children: ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ onClick, children }) => {

    return (
        <motion.div id="lb" className='backdrop'
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            onClick={onClick}
        >
            {children}
        </motion.div>
    )
}

export default Backdrop;