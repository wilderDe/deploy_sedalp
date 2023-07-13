
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export const SeccionAnimationX = ( {children} ) => {
    

    const ref = useRef(null)
    const isInView = useInView(ref, {once:true});   

    return(
        <section ref={ref} className='framer' >
            <span className='animation-x'
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {children}
            </span>
        </section>
    )

}



