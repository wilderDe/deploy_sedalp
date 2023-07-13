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
import { useState } from 'react';
import { useEffect } from 'react';
import { getEnvironments } from '../../../../helpers/getEnviroments';
import { construirFecha } from '../../../../helpers/fechas';
import { useEvento } from '../../../../hooks/useEvento';

const { VITE_API_URL } = getEnvironments();

export const TableEvento = ({ eventos = [], funcionModal }) => {
    
    const [version, setVersion] = useState(0)
    const { eliminarEvento } = useEvento()

    const handleEditar = (item) => {
        funcionModal({
            active: true,
            title: "Editar Curso",
            titleBtn: "Editar",
            action: "editar",
            evento: item
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
            return eliminarEvento(id)
        }
    }
    useEffect(() => {
        setVersion(version + 1)
    }, [eventos])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >#</TableCell>
                        <TableCell >Titulo</TableCell>
                        <TableCell >Resumen</TableCell>
                        <TableCell >Descripción</TableCell>
                        <TableCell sx={{ width: "130px" }} >Fecha</TableCell>
                        <TableCell >Imagen</TableCell>
                        <TableCell >Editar</TableCell>
                        <TableCell >Eliminar</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {eventos.map((row, index) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >{index + 1}</TableCell>
                            <TableCell >{row.titulo}</TableCell>
                            <TableCell sx={{ textAlign: 'justify' }} >{row.resumen}</TableCell>
                            <TableCell sx={{ textAlign: 'justify' }} >{row.descripcion}</TableCell>
                            <TableCell sx={{ textAlign: 'justify'}} >{ construirFecha(row.fecha) }</TableCell>
                            <TableCell >
                                <Avatar
                                    sx={{ width: 200, height: 200, borderRadius: 3 }}
                                    src={`${VITE_API_URL}/uploads/evento/${row.id}?v=${version}`}
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
