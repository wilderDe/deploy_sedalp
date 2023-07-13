import { useState } from "react"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styleModalUser } from "../../helpers/styles";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from "react";
import { formAddUserValid } from "../../helpers/validaciones";
import { useUsers } from "../../../../hooks/useUsers";

const formInitial = {
    nombreApellido: "",
    estado: true,
    rol: "",
    telefono: "",
    usuario: "",
    contrasenia: ""
}


export const FormAgregar = ({ data, funcionModal }) => {

    const [form, setForm] = useState(formInitial)
    const { agregarUsuario, editarUsuario } = useUsers()
    const [btnDisable, setBtnDisable] = useState(false)

    const handleChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }
    const handleSubmit = async() => {
        if ( !formAddUserValid(form)) return
        setBtnDisable(true)
        if(data.action=="agregar"){
            const resp = await agregarUsuario(form)
            if(resp){
                funcionModal({active: false})
                setForm(formInitial)
            }
        }else{
            const resp = await editarUsuario(form)
            if(resp){
                funcionModal({active: false})
            }
        }
        setBtnDisable(false)
    }

    useEffect(() => {
        if( data.action === "editar" ){
            return setForm(data.usuario)
        }
        setForm(formInitial )
    }, [data])
    

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={data.active}
            onClose={() => funcionModal({ active: false })}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={data.active}>
                <Box sx={styleModalUser}>
                    <Typography variant='h6'  >
                        {data.title}
                    </Typography>
                    <Box
                        component="form"
                        autoComplete='off'
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                            margin: '10px 0'
                        }}
                    >
                        <TextField
                            id="outlined-basic"
                            label="Nombre y Apellidos"
                            variant="outlined"
                            name='nombreApellido'
                            value={form.nombreApellido}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Telefono"
                            variant="outlined"
                            name='telefono'
                            type="number"
                            value={form.telefono}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Usuario"
                            variant="outlined"
                            name='usuario'
                            value={form.usuario}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Contraseña"
                            variant="outlined"
                            name='contrasenia'
                            value={form.contrasenia}
                            onChange={handleChange}
                        />
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-helper-label">Rol</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={form.rol}
                                label="Rol"
                                onChange={handleChange}
                                name="rol"
                            >
                                <MenuItem value={"Admin"}>Administrador</MenuItem>
                                <MenuItem value={"User"}>Usuario</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Button disabled={ btnDisable } variant='contained' onClick={handleSubmit}>
                        {data.titleBtn}
                    </Button>
                </Box>
            </Fade>
        </Modal >
    )
}
