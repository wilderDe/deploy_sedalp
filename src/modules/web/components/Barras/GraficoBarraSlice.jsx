import React from 'react'
import { Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const GraficoBarraSlice = ( { data } ) => {
    
    if(Object.keys(data).length === 0){
        return <></>
    }

    const labels = Object.values(data).map(dato => dato.subtitle ).slice(1, -1);
    const hombres = Object.values(data).map(dato => dato.hombres ).slice(1, -1);
    const mujeres = Object.values(data).map(dato => dato.mujeres ).slice(1, -1);

    const title = data?.title
    const subtitle = data?.subtitle

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: `${ title ? title.toUpperCase() : "" } ${subtitle ? subtitle.toUpperCase(): ""}`,
            },
        },
        scales: {
            x: {
              ticks: {
                callback: function(val, index) {
                  return val
                },
              }
            }
        }
    }

    const dataBarra = {
        labels,
        datasets:[
            {
                label: `${data.total.mujeres} Mujeres`,
                data: mujeres,
           
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: `${data.total.hombres} Hombres`,
                data: hombres,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
        
    }


    return (
        <>
            <Bar  options={options} data={dataBarra} />
        </>
    )
}
