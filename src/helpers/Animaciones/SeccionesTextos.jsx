import { useInView, motion } from 'framer-motion'
import { useRef } from 'react'
import { animacionDeEntradaText } from '../framerMotion';
import { Link } from 'react-router-dom';

export const SeccionesTextos = ({ title, parrafo, path }) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });


    return (
        <div className='texto-seccion' ref={ref} >
            {isInView&& 
            <>
                <motion.h2 
                    variants={animacionDeEntradaText} 
                    initial="hidden" 
                    animate="visible" 
                    transition={{delay:0.2}}  
                >
                    { title }
                </motion.h2>
                <motion.p 
                    variants={animacionDeEntradaText} 
                    initial="hidden" 
                    animate="visible" 
                    transition={{delay: 0.3}}  
                >
                    { parrafo }
                </motion.p>
                    
                <Link to={path} className="enlace-secc">
                    <div className="relleno"></div>
                        <motion.p 
                            className='enlace-link'
                            variants={animacionDeEntradaText} 
                            initial="hidden" 
                            animate="visible" 
                            transition={{delay: 0.4}}
                        > Ver más</motion.p>
                </Link>
            </>}  
        </div>
    )
}
