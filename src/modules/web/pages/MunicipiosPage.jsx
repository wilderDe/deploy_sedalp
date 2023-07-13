import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dbRegiones } from '../../../helpers/DBregiones'
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'
import { Flotantes } from '../components/Flotantes'
import { DatosMunicipio } from '../components/DatosMunicipio'



export const MunicipiosPage = () => {

    const [region, setRegion] = useState([])
    const navigate =  useNavigate()
    const params = useParams()

    useEffect(() => {
        const { id } = params
        const regionBuscado = dbRegiones.filter( region => region.id == id );
        console.log(regionBuscado)
        setRegion(regionBuscado)
    }, [])

    if(region.length === 0){
        return <>Crgando</>
    }

    return (
        <>
            <Hero title={region[0].titleRegionsimred} urlImage={region[0].fondoImage} />
            <div className="contenedor">
                <div className="btn_volver">
                    <span onClick={()=> navigate('/simred') } >
                        Volver a las regiones 
                    </span>
                </div>
            </div>
            <DatosMunicipio  region={ region[0].title } />
            <Flotantes />
            <Footer />
        </>
    )
}
