
import { useEffect } from 'react'
import { Flotantes } from '../components/Flotantes'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { ListCursos } from '../components/ListCursos'

export const CursoPage = () => {
    
    const title = "Estas en la sección de cursos"
    const urlImage = '/fondos/curso_page.jpg'

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    

    return (
        <>
            <Hero title={title} urlImage={urlImage} />
            <ListCursos />
            <Footer />
            <Flotantes/>
        </>
    )
}
