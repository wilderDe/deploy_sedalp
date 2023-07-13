import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Swal from 'sweetalert2';
import { useCurso } from '../../../../hooks/useCurso';
import { getEnvironments } from '../../../../helpers/getEnviroments';
import { useState } from 'react';
import { useEffect } from 'react';


const {VITE_API_URL} = getEnvironments();

export const TableCurso = ({ cursos = [], funcionModal }) => {

    const [version, setVersion] = useState(0)
    const { eliminarCurso  } = useCurso()

    const handleEditar = (item) => {
        funcionModal({
            active: true,
            title: "Editar Curso",
            titleBtn: "Editar",
            action: "editar",
            curso: item
        })
    }

    const handleEliminar = async (id) => {
        const resultado = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción no se puede deshacer',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        });

        if (resultado.isConfirmed) {
            return eliminarCurso(id)
        }
    }
    useEffect(() => {
        setVersion(version+1)
    }, [cursos])
    

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >#</TableCell>
                        <TableCell >Titulo</TableCell>
                        <TableCell >Parrafo</TableCell>
                        <TableCell >Imagen</TableCell>
                        <TableCell >Editar</TableCell>
                        <TableCell >Eliminar</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {cursos.map((row, index) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >{index + 1}</TableCell>
                            <TableCell >{row.titulo}</TableCell>
                            <TableCell sx={{ textAlign: 'justify' }} >{row.parrafo}</TableCell>
                            <TableCell >
                                <Avatar 
                                    sx={{ width: 200, height: 200, borderRadius: 3}}
                                    src={`${VITE_API_URL}/uploads/cursos/${row.id}?v=${version}`}  
                                />
                            </TableCell>
                            <TableCell >
                                <Button variant='outlined' onClick={() => handleEditar(row)} >
                                    <EditIcon />
                                </Button>
                            </TableCell>
                            <TableCell >
                                <Button variant='outlined' onClick={() => handleEliminar(row.id)} color='error'>
                                    <DeleteIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
