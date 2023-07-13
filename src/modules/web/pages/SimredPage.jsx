import React, { useEffect } from 'react'
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'
import { CardsRegiones } from '../components/CardsRegiones'
import { Flotantes } from '../components/Flotantes'

export const SimredPage = () => {
    
    const title = "Estas en la sección del SIMRED"
    const urlImage = '/fondos/simred_page.jpg'

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    return (
        <>
            <Hero  title={title} urlImage={urlImage} />   
            <CardsRegiones />
            <Flotantes />
            <Footer />
        </>
    )
}
