import React, { useEffect, useState }  from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };

const Cover = ({text, bg, col}: {text: string, bg:string, col:string}) => {
    const control = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.0001,
    });
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
  return (
    <motion.div
        className="border-2"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
    <div className={`h-screen flex justify-center items-center lg:text-3xl ${bg} ${col} w-screen`}>
      <h3>{text}</h3>
    </div>
    </motion.div>
  )
}

export default Cover