import React from 'react'
import { useEvento } from '../../../hooks/useEvento'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CollectionsIcon from '@mui/icons-material/Collections';
import { TableEvento } from '../components/eventos/TableEvento';
import { FormEvento } from '../components/eventos/FormEvento';

export const EventosView = () => {

    const { obtenerEventos, eventos=[] } = useEvento()
    const [dataModal, setDataModal] = useState({active: false })

    const handleAgregar = () => {
        setDataModal({
            active: true,
            title: "Agregar nuevo evento",
            titleBtn: "Agregar",
            action: "agregar"
        })
    }  

    useEffect(() => {
        if(eventos.length === 0){
            obtenerEventos()
        }
       
    }, [])
    if( eventos.length === 0 ){
        return <>Cargando...</>
    }
    return (
        <div>
            <Box sx={{ marginBottom: 10 }} >
                <Button variant='contained' onClick={handleAgregar}  startIcon={< CollectionsIcon />}  >
                    Agregar evento
                </Button>
            </Box>
            <FormEvento data={dataModal} funcionModal={setDataModal} />
            <TableEvento eventos={eventos} funcionModal={setDataModal} />
        </div>
    )
}
