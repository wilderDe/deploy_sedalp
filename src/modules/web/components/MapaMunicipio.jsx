import React, { useEffect, useState } from 'react'
import { dbMunicipios } from '../../../helpers/DBmunicipios'

export const MapaMunicipio = ({ municipio }) => {

    const [encontradoMunicipio, setEncontradoMunicipio] = useState([])

    const obtenerMapa = () => {
        const encontrado = dbMunicipios.filter(item => item.municipio === municipio);
        //console.log(encontrado)
        setEncontradoMunicipio(encontrado)
    }

    useEffect(() => {
        obtenerMapa()
    }, [])

    if (encontradoMunicipio.length === 0) {
        return <></>
    }


    return (
        <div className='mapa-municipio'>

            <iframe
                src={encontradoMunicipio[0].ruta}
                title="Contenido HTML">

            </iframe>
        </div>
    )
}
