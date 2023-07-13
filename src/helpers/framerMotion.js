

export const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
    
    //TODO: Se deben poner estos atributos al motion.div
    //  initial="hidden"
    //  animate="visible"
    
};
  
export const animacionDeEntradaText = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
};