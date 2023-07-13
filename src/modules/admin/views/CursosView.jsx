
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { useEffect } from 'react';
import { useCurso } from '../../../hooks/useCurso';
import { TableCurso } from '../components/cursos/TableCurso';
import { useState } from 'react';
import { FormCurso } from '../components/cursos/FormCurso';

export const CursosView = () => {

    const { obtenerCursos, cursos=[] } = useCurso()
    const [dataModal, setDataModal] = useState({active: false })

    const handleAgregar = () => {
        setDataModal({
            active: true,
            title: "Agregar nuevo curso",
            titleBtn: "Agregar",
            action: "agregar"
        })
    }    
    useEffect(() => {
        if(cursos.length === 0){
            obtenerCursos()
        }
       
    }, [])
    
    if( cursos.length === 0 ){
        return <>Cargando...</>
    }

    return (
        <div>
            <Box sx={{ marginBottom: 10 }} >
                <Button variant='contained' onClick={handleAgregar}  startIcon={< CollectionsBookmarkIcon />}  >
                    Agregar curso
                </Button>
            </Box>
            <FormCurso data={dataModal} funcionModal={setDataModal} />
            <TableCurso cursos={cursos} funcionModal={setDataModal} />

        </div>
    )
}
