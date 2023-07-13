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
import { useUsers } from '../../../../hooks/useUsers';
import Swal from 'sweetalert2';

export const TableUser = ({ usuarios = [], funcionModal }) => {

    const { eliminarUsuario } = useUsers()

    const handleEditar = (item) => {
        funcionModal({
            active: true,
            title: "Editar usuario",
            titleBtn: "Editar",
            action: "editar",
            usuario: item
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
            return eliminarUsuario(id)
        }
    }


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >#</TableCell>
                        <TableCell >Nombre y Apellidos</TableCell>
                        <TableCell >Telefono</TableCell>
                        <TableCell >Usuario</TableCell>
                        <TableCell >Contraseña</TableCell>
                        <TableCell >Rol</TableCell>
                        <TableCell >Editar</TableCell>
                        <TableCell >Eliminar</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {usuarios.map((row, index) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >{index + 1}</TableCell>
                            <TableCell >{row.nombreApellido}</TableCell>
                            <TableCell >{row.telefono}</TableCell>
                            <TableCell >{row.usuario}</TableCell>
                            <TableCell >{row.contrasenia}</TableCell>
                            <TableCell >{row.rol}</TableCell>
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
