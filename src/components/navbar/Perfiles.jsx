import { useState, useRef, useEffect } from "react";
import { motion, usePresence } from "framer-motion";
import { gsap } from "gsap";

const Perfiles = () => {
    const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence();
    useEffect(() => {
        if (!isPresent) {
          gsap.to(ref.current, {
            opacity: 0,
            onComplete: () => safeToRemove?.()
          });
        }
      }, [isPresent, safeToRemove]);
    return (
        <div className="box" ref={ref}>
            <div className="box_in">
                
            </div>
        </div>
    );
};

export default Perfiles;