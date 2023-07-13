import { useEffect } from 'react'
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'
import { Flotantes } from '../components/Flotantes'
import { ListNormativa } from '../components/ListNormativa'


export const NormativaPage = () => {

    const title = "Se encuentra en la sección de normativas"
    const urlImage = '/fondos/normativa_page.jpg'
    

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <>
            <Hero title={title}  urlImage={urlImage} />
            <ListNormativa />
            <Footer />
            <Flotantes />
        </>
    )
}
