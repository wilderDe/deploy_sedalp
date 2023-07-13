import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styleModal } from '../helpers/styles';
import Button from '@mui/material/Button';
import { formLoginValid } from '../helpers/validaciones';
import { useAuth } from '../../../hooks/useAuth';

const formInitial = {
    usuario: "",
    password: "",
}

export const Login = ( { data, funcionModal }) => {

    const [form, setForm] = useState(formInitial)
    const { validarLogin } = useAuth()

    const handleChange = ( { target } ) =>{
        setForm({
            ...form,
            [target.name]: target.value
        })
    }
    const handleSubmit = async() => {
        if( !formLoginValid(form) ) return

        const resp = await validarLogin(form)
        if(resp){
            funcionModal({ active: false })
            setForm(formInitial)
        }
    }
    
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
                <Box sx={styleModal}>
                    <Typography variant='h6'  >
                        Panel Administrativo
                    </Typography>
                    <Box
                        component="form"
                        autoComplete='off'
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                            margin: '10px 0',
                            display: 'flex',
                        }}
                    >
                        <TextField
                            id='login_btn_user'
                            label="Usuario"
                            variant="outlined"
                            name='usuario'
                            value={form.usuario}
                            onChange={handleChange}
                        />
                        <TextField
                            id='login_btn_password'
                            label="Contraseña"
                            variant="outlined"
                            type='password'
                            name='password'
                            value={form.password}
                            onChange={handleChange}
                        />
                    </Box>
                    <Button variant='contained' onClick={handleSubmit} >
                        Ingresar
                    </Button>
                </Box>
            </Fade>
        </Modal >
    )
}
