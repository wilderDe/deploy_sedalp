import React from 'react'
import { TablaUno } from './Tablas/TablaUno'
import { TablaDos } from './Tablas/TablaDos'
import { TablaTres } from './Tablas/TablaTres'
import { SeccionAnimatrionY } from '../../../helpers/Animaciones/SeccionAnimatrionY'

export const TablasEstadistica = ({ simred }) => {
    return (
        <div className='content-tabla'>

            {/**Poblacion */}
            <TablaUno data={simred.poblacion} />

            {/* Salud */}
            <TablaUno data={simred.salud} />

            {/* Actividad Economica */}
            <TablaDos data={simred.economica.act_economica} />

            {/* Actividad Economica */}
            <TablaDos data={simred.economica.act_ocupacional} />

            {/**Idiona */}
            <TablaUno data={simred.idioma} />

            {/* Asistencia Escolar */}
            <TablaUno data={simred.escolar} />

            {/* Lugar de nacimiento */}
            <TablaDos data={simred.nacimiento.lug_nacimiento} />

            {/* Lugar  de residencia */}
            <TablaDos data={simred.nacimiento.lug_residencia} />


            {/*Vivienda */}

            <TablaTres data={simred.vivienda.agua} />

            <TablaTres data={simred.vivienda.basura} />

            <TablaTres data={simred.vivienda.cocinar} />

            <TablaTres data={simred.vivienda.comunicacion} />

            <TablaTres data={simred.vivienda.desague} />

            <TablaTres data={simred.vivienda.viviendas} />

            <TablaTres data={simred.vivienda.energia} />




        </div>
    )
}
