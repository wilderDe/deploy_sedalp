import { useEffect } from 'react'
import { Enlaces } from '../components/Enlaces'
import { Flotantes } from '../components/Flotantes'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { MisionVision } from '../components/MisionVision'
import { Secciones } from '../components/Secciones'


export const HomePage = () => {

    const title = "Servicio Departamental de Autonomías de La Paz"
    const urlImage = '/fondos/home_page.jpg'

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    

    return (
        <>
            <Hero title={title} urlImage={urlImage} />
            <MisionVision />
            <Secciones /> 
            <Enlaces />
            <Footer />
            <Flotantes />
        </>
    )
}



