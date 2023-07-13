import React from 'react'
import { SeccionAnimatrionY } from '../../../../helpers/Animaciones/SeccionAnimatrionY';

export const TablaTres = ({ data }) => {

    const elementos = Object.keys(data).filter((categoria) => categoria !== 'title').map((categoria) => {
        return (
            <tr key={categoria}>
                <td className='tabla-poblacion__td'>{data[categoria].subtitle}</td>
                <td className='tabla-poblacion__td'>{data[categoria].total} </td>
            </tr>
        );
    });

    return (
        <div className='tabla-card' >
            <SeccionAnimatrionY>
                <h4> {data.title}</h4>
                <table className="tabla-card-cont">
                    <thead>
                        <tr>
                            <th className='tabla-poblacion__th' >
                                Categoría
                                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(item => (
                                    <>&nbsp;</>
                                ))}</th>
                            <th className='tabla-poblacion__th'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elementos}
                    </tbody>
                </table>
            </SeccionAnimatrionY>
        </div>
    )
}
