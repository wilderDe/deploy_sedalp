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
export const GraficoBarraComunicacion = ({data}) => {
    if(Object.keys(data).length === 0){
        return <></>
    }

    const labels = Object.values(data).map(dato => dato.subtitle).slice(0, -1);
    const total = Object.values(data).map(dato => dato.total ).slice(0,-1);
    


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: `${data.title.toUpperCase()} `,
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
                label: ` viviendas`,
                data: total,
                backgroundColor: 'rgba(200, 150, 255, 0.5)',
            }
    
        ]
        
    }


    return (
        <>
            <Bar  options={options} data={dataBarra} />
        </>
    )
}
