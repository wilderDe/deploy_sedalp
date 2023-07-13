import { useState } from "react"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styleModalUser } from "../../helpers/styles";
import { useEffect } from "react";
import { formAddGroudNormativaValid } from "../../helpers/validaciones";
import { useNormativa } from "../../../../hooks/useNormativa";

const formInitial = {
    titulo: "",
}

export const FormGrupor = ({ data, funcionModal }) => {

    const [form, setForm] = useState(formInitial)
    const [btnDisable, setBtnDisable] = useState(false)
    const { agregarNuevoGrupo, editarGrupo } = useNormativa()

    const handleChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    const handleSubmit = async () => {
        if(!formAddGroudNormativaValid(form)) return
        setBtnDisable(true)
        if(data.action == "agregar"){
            const resp = await agregarNuevoGrupo(form)
            if(resp){
                funcionModal({active: false})
                setForm(formInitial)
            }
        }else{
            const resp = await editarGrupo(form)
            if(resp){
                funcionModal({active: false})
                setForm(formInitial)
            }
        }
        setBtnDisable(false)
    }

    useEffect(() => {
        if (data.action === "editar") {
            return setForm({
                ...data.grupo
            })
        }
        setForm(formInitial)
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
                            '& > :not(style)': { m: 1, width: '100%' },
                            margin: '10px 0',
                        }}
                    >
                        <Box sx={{ width: "50%" }} >
                            <TextField
                                sx={{ width: "100%", marginBottom: 3 }}
                                id="form_curso_titulo"
                                label="Titulo del grupo"
                                variant="outlined"
                                name='titulo'
                                value={form.titulo}
                                onChange={handleChange}
                            />
                        </Box>
                        <Button disabled={ btnDisable } variant='contained' onClick={handleSubmit}>
                            {data.titleBtn}
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Modal >
    )
}
