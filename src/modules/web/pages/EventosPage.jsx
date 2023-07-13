import React, { useEffect } from 'react'
import { Hero } from '../components/Hero'
import { ListEventos } from '../components/ListEventos'
import { Footer } from '../components/Footer'
import { Flotantes } from '../components/Flotantes'

export const EventosPage = () => {
        
    const title = "Estas en la sección de eventos"
    const urlImage = '/fondos/eventos_home.jpg'

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    

    return (
        <>
            <Hero title={title} urlImage={urlImage} />
            <ListEventos />
            <Footer/>
            <Flotantes />
        </>
    )
}
