import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import whastapp from '../../../assets/icons/whatsapp.svg'
import telegram from '../../../assets/icons/telegram.svg'
import arrowTop from '../../../assets/icons/arrow.svg'

import '../styles/flotantes.css'
import { animacionDeEntradaText, container } from '../../../helpers/framerMotion'

export const Flotantes = () => {
    
    const [isVisible, setIsVisible] = useState(false)
    const numero = "+59169831539"
    const urlWhatsApp = `https://wa.me/${numero}?text=Hola,%20vengo%20de%20la%20visita%20de%20la%20página%20web`;

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    };
    
    useEffect(() => {
        const toggleVisibility = () => {
          if (window.pageYOffset > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    

    return (
        <motion.div className='flotantes' variants={container} initial="hidden" animate="visible" >
            <Link to={urlWhatsApp} target='_blank' className="flotantes-link" >
                <img src={whastapp} />
            </Link>
            <Link to="https://t.me/Sedalp" target='_blank' className="flotantes-link" >
                <img src={telegram} />
            </Link>
            {isVisible 
            && <motion.div className="flotantes-icons" variants={animacionDeEntradaText}  onClick={scrollToTop}>
                <img src={arrowTop} />
            </motion.div>}
        </motion.div>  
    )
}
