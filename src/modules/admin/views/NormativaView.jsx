import React, { useEffect, useState } from 'react'
import { useNormativa } from '../../../hooks/useNormativa'
import Box from '@mui/material/Box';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CollectionsIcon from '@mui/icons-material/Collections';
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
import Swal from 'sweetalert2';
import { FormGrupor } from '../components/normativas/FormGrupor';
import { FormItem } from '../components/normativas/FormItem';
import apiSedalp from '../../../api/config';


export const NormativaView = () => {


    const { normativas, obtenerNormativas, eliminarGrupo } = useNormativa()
    const [groupSelect, setGroupSelect] = useState({})
    const [dataModalGroup, setDataModalGroup] = useState({active: false })
    const [dataModalItem, setDataModalItem] = useState({active: false })


    const handleClickGroup = (item) => {
        setGroupSelect(item)
    }
    const handleAgregarGrupo = () => {
        setDataModalGroup({
            active: true,
            title: "Crear nuevo Grupo",
            titleBtn: "Agregar",
            action: "agregar"
        })
    }
    const handleEditarGrupo = ( groupId ) => {
        setDataModalGroup({
            active: true,
            title: "Editar grupo",
            titleBtn: "Editar",
            action: "editar",
            grupo: groupId
        })
    }
    const handleEliminarGrupo = async(groupID ) => {
        const resultado = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Eliminaras todos los documentos del grupo, recomienda realizar una copia de seguridad',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        });

        if (resultado.isConfirmed) {
            return eliminarGrupo(groupID)
        }
    }


    const handleAgregarItem = ( group ) => {
        setDataModalItem({
            active: true,
            title: "Añadir nuevo item",
            titleBtn: "Agregar",
            action: "agregar",
            grupoID: group
        })
    }
    const handleEditarItem = (group, item) => {
        setDataModalItem({
            active: true,
            title: "Editar item",
            titleBtn: "editar",
            action: "editar",
            grupoID: group,
            item
        })
    }
    const handleEliminarItem = async(groudID, itemID) => {
        const resultado = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Eliminara el item, recomienda realizar una copia de seguridad',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        });

        if (resultado.isConfirmed) {
            await apiSedalp.delete(`/uploads/normativa/${groudID}/${itemID}`)
            await apiSedalp.delete(`/normativa/${groudID}/${itemID}`)
            console.log("borrado")
            window.location.reload()
        }
    }


    useEffect(() => {
        if (normativas.length === 0) {
            obtenerNormativas()
        }
    }, [])
    

    if (normativas.length === 0) {
        return <>Cargando... </>
    }

    return (
        <div>
            <Box sx={{ display: 'flex', gap: 2 }} >
                <Box sx={{ width: "50%", }} >
                    <Button variant='contained' onClick={()=> handleAgregarGrupo() } startIcon={< AccountBalanceIcon/>}  >
                        Crear Grupo
                    </Button>
                    <FormGrupor data={dataModalGroup} funcionModal={setDataModalGroup} />
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell >#</TableCell>
                                    <TableCell >Titulo</TableCell>
                                    <TableCell >Editar</TableCell>
                                    <TableCell >Eliminar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {normativas.map((row, index) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{
                                            '&:last-child td, &:last-child th': { border: 0 },
                                            '&:hover': { backgroundColor: '#f5f5f5', cursor: 'pointer' }
                                        }}
                                    >
                                        <TableCell >{index + 1}</TableCell>
                                        <TableCell onClick={() => handleClickGroup(row)} >{row.titulo}</TableCell>
                                        <TableCell >
                                            <Button variant='outlined' onClick={()=>handleEditarGrupo(row)} >
                                                <EditIcon />
                                            </Button>
                                        </TableCell>
                                        <TableCell >
                                            <Button variant='outlined' onClick={() => handleEliminarGrupo(row.id)} color='error'>
                                                <DeleteIcon />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box sx={{ width: "50%", }} >
                    {(Object.keys(groupSelect).length !== 0)
                        ? <>
                            <Button variant='contained' onClick={()=>handleAgregarItem(groupSelect.id)} startIcon={< CollectionsIcon />}  >
                                Agregar nuevo item
                            </Button>
                           <FormItem data={dataModalItem} funcionModal={setDataModalItem} />
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell >#</TableCell>
                                            <TableCell >Subtitulo</TableCell>
                                            <TableCell >Editar</TableCell>
                                            <TableCell >Eliminar</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {groupSelect.archivos.map((row, index) => (
                                            <TableRow
                                                key={row._id}
                                                sx={{
                                                    '&:last-child td, &:last-child th': { border: 0 },
                                                    '&:hover': { backgroundColor: '#f5f5f5', cursor: 'pointer' }
                                                }}
                                            >
                                                <TableCell >{index + 1}</TableCell>
                                                <TableCell  >{row.subtitle}</TableCell>
                                                <TableCell >
                                                    <Button variant='outlined' onClick={()=>handleEditarItem(groupSelect.id, row )} >
                                                        <EditIcon />
                                                    </Button>
                                                </TableCell>
                                                <TableCell >
                                                    <Button variant='outlined' onClick={()=>handleEliminarItem(groupSelect.id, row._id)} color='error'>
                                                        <DeleteIcon />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </>
                        : null
                    }
                </Box>
            </Box>
        </div>
    )
}
