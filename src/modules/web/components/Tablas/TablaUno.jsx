import React from 'react'
import '../../styles/tabla.css'
import { SeccionAnimatrionY } from '../../../../helpers/Animaciones/SeccionAnimatrionY';
export const TablaUno = ({ data }) => {
    const elementos = Object.keys(data).filter((categoria) => categoria !== 'title').map((categoria) => {
        const hombres = parseInt(data[categoria].hombres); // convierte el valor de hombres a un número entero
        const mujeres = parseInt(data[categoria].mujeres); // convierte el valor de mujeres a un número entero
        const total = hombres + mujeres;
        return (
            <tr key={categoria}>
                <td className='tabla-poblacion__td'>{data[categoria].subtitle}</td>
                <td className='tabla-poblacion__td'>{data[categoria].hombres}</td>
                <td className='tabla-poblacion__td'>{data[categoria].mujeres}</td>
                <td className='tabla-poblacion__td'>{total} </td>
            </tr>
        );
    });

    return (
        <div className='tabla-card' >
            <SeccionAnimatrionY>
                <h4>{data.title}</h4>
                <table className="tabla-card-cont">
                    <thead>
                        <tr>
                            <th className='tabla-poblacion__th'>Categoría de edad</th>
                            <th className='tabla-poblacion__th'>Hombres</th>
                            <th className='tabla-poblacion__th'>Mujeres</th>
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
