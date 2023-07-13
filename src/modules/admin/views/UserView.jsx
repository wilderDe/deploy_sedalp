import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useEffect } from 'react';
import { TableUser } from '../components/user/TableUser';
import { useUsers } from '../../../hooks/useUsers';
import { useState } from 'react';
import { FormAgregar } from '../components/user/FormAgregar';


export const UserView = () => {

    const { usuarios=[], obtenerUsuarios } = useUsers()
    const [dataModal, setDataModal] = useState({active: false })
    
    const handleAgregar = () => {
        setDataModal({
            active: true,
            title: "Agregar nuevo usuario",
            titleBtn: "Agregar",
            action: "agregar"
        })
    }    

    useEffect(() => {
        if(usuarios.length === 0){
            obtenerUsuarios()
        }
    }, [])

    if (usuarios.length === 0) {
        return <>Cargando...</>
    }
    return (
        <div>
            <Box sx={{ marginBottom: 10 }} >
                <Button variant='contained' onClick={handleAgregar}  startIcon={< PersonAddAltIcon />}  >
                    Agregar usuario
                </Button>
            </Box>
            <FormAgregar data={ dataModal } funcionModal={setDataModal} /> 
            <TableUser usuarios={usuarios} funcionModal={setDataModal} />
        </div>
    )
}
