import React, { useEffect, useState } from 'react'
import { Alcalde } from './Alcalde'
import { GraficosEstadisticos } from './Barras/GraficosEstadisticos'
import { MapaMunicipio } from './MapaMunicipio'
import { TablasEstadistica } from './TablasEstadistica'
import apiSedalp from '../../../api/config'
import bar_icons from '../../../assets/icons/bar.svg'
import table_icons from '../../../assets/icons/table.svg'
import '../styles/municipios.css'

export const DatosMunicipio = ( { region } ) => {

    const [regionEncontrado, setRegionEncontrado] = useState({})
    const [municipioEncontrado, setMunicipioEncontrado] = useState({})
    const [selectMunicipio, setSelectMunicipio] = useState("")
    const [loading, setLoading] = useState(false)
    const [icons, setIcons] = useState(true)

    const obtenerRegion = async() => {
        const {data} = await apiSedalp.get(`/regiones/${region}`);
        setRegionEncontrado(data.region)
    }
    const handleSelectMunicipio = async({target}) => {
        setSelectMunicipio(target.value)
        if(target.value.length === 0){
            return console.log("No nada que buscar")
        }
        setLoading(true)
        const {data} = await apiSedalp.get(`/municipios/${target.value}`);
        setMunicipioEncontrado(data.municipio)
        setLoading(false)
    }

    useEffect(() => {
        obtenerRegion()
    }, [])
    
    if(Object.keys(regionEncontrado).length === 0){
        return <> Cargadando </>
    }
    return (
        <div className='contenedor'>
            <div className="selecc-municipio">
                <h2>Seleccione un Municipio</h2>
                <select
                    className='selecc-item'
                    value={selectMunicipio}
                    onChange={handleSelectMunicipio}
                >
                    <option value="">Seleccione</option>
                    {regionEncontrado.municipios.map( (item, index) => (
                        <option key={index} value={item} > {item} </option>
                    ))}
                </select>
            </div>  
            {(selectMunicipio.length > 0) && (
                loading 
                ? <div className="loading-container"> <div className="loading-spinner"></div> </div> 
                : <>
                    <h2>Municipio de {selectMunicipio} </h2>
                    <Alcalde 
                        idMunicipio = { municipioEncontrado.id }
                        alcalde={municipioEncontrado.alcalde} 
                        ine={municipioEncontrado.ine}
                        poa={municipioEncontrado.poa}
                        presupuestaria = {municipioEncontrado.presupuestaria}
                        ptdi = { municipioEncontrado.ptdi}    
                    />  
                    <MapaMunicipio municipio={municipioEncontrado.municipio} />

                    <div className="content_select-icons">
                        <div 
                            className={`select-icons ${ icons && 'select-icons_active' } `}
                            onClick={()=>setIcons(true) }
                        >
                            <img src={ bar_icons } />
                        </div>
                        <div 
                            className={`select-icons ${ icons || 'select-icons_active' } `}
                            onClick={()=>setIcons(false) }
                        >
                            <img src={ table_icons } />
                        </div>
                    </div>

                    {icons
                    ?<GraficosEstadisticos simred={municipioEncontrado.simred} /> 
                    :<TablasEstadistica  simred={ municipioEncontrado.simred } />}
                </>
            )}
        </div>
    )
}
