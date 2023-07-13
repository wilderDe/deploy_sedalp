
import { GraficoBarra } from './GraficoBarra';
import { GraficoBarraComunicacion } from './GraficoBarraComunicacion';
import { GraficoBarraSlice } from './GraficoBarraSlice';
import { GraficoBarraVivienda } from './GraficoBarraVivienda';

import '../../styles/municipios.css'

export const GraficosEstadisticos = ({ simred = {} }) => {

    return (
        <div className='barras'>
            <div className="barra-content">
                <GraficoBarraSlice data={simred.poblacion} />
            </div>
            <div className="barra-content">
                <GraficoBarraSlice data={simred.idioma} />
            </div>
            <div className="barra-content">
                <GraficoBarraSlice data={simred.escolar} />
            </div>
            <div className="barra-content">
                <GraficoBarra data={simred.salud} />
            </div>
            <div className="barra-content">
                <GraficoBarraSlice data={simred.nacimiento.lug_nacimiento} />
            </div>
            <div className="barra-content">
                <GraficoBarraSlice data={simred.nacimiento.lug_residencia} />
            </div>
            <div className="barra-content">

                <GraficoBarraSlice data={simred.economica.act_economica} />
            </div>
            <div className="barra-content">

                <GraficoBarraSlice data={simred.economica.act_ocupacional} />
            </div>
            <div className="barra-content">

                <GraficoBarraVivienda data={simred.vivienda.agua} />
            </div>
            <div className="barra-content">

                <GraficoBarraVivienda data={simred.vivienda.basura} />
            </div>
            <div className="barra-content">
                <GraficoBarraVivienda data={simred.vivienda.cocinar} />
            </div>

            <div className="barra-content">

                <GraficoBarraVivienda data={simred.vivienda.desague} />
            </div>
            <div className="barra-content">

                <GraficoBarraVivienda data={simred.vivienda.energia} />
            </div>
            <div className="barra-content">

                <GraficoBarraComunicacion data={simred.vivienda.comunicacion} />
            </div>
            <div className="barra-content">
                <GraficoBarraVivienda data={simred.vivienda.viviendas} />

            </div>
        </div>
    )
}