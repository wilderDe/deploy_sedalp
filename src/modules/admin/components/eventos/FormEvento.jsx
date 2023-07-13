import { useState,useEffect } from "react"
import {  styleModalEvento } from "../../helpers/styles";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { formAddEventoValid, formAddEventoValidEdit } from "../../helpers/validaciones";
import { useEvento } from "../../../../hooks/useEvento";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import UploadIcon from '@mui/icons-material/Upload';
import Avatar from '@mui/material/Avatar';
import esLocale from 'dayjs/locale/es'
import dayjs from "dayjs";
dayjs.locale( esLocale )

const formInitial = {
    titulo: "",
    resumen: "",
    descripcion: "",
    fecha: "",
    archivo: ""
}

export const FormEvento = ({ data, funcionModal }) => {

    const { agregarEvento, editarEvento } = useEvento()
    const [form, setForm] = useState(formInitial)
    const [archivo, setArchivo] = useState(null)
    const [fecha, setFecha] = useState(null)
    const [btnDisable, setBtnDisable] = useState(false)
    
    const handleChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    const handleChangeFecha= ( newDate ) => {
        setForm({
            ...form,
            ['fecha']: newDate.$d
        })
        setFecha(newDate);
    }

    const archivoSeleccionado = (event) => {
        if (event.target.files[0].size >= 1048576) {
            return Swal.fire("EL archivo debe ser menor de 1Mb")
        }
        setArchivo(event.target.files[0])
        setForm({ ...form, archivo: event.target.files[0] })
    }
    
    const handleSubmit = async () => {
        if(data.action == "agregar"){
            if(! formAddEventoValid(form) ) return
            setBtnDisable(true)
            const resp = await agregarEvento(form)
            if (resp){
                funcionModal({active: false})
                setForm(formInitial)
                setArchivo(null)
                setBtnDisable(false)
            }
        }else{
            if(! formAddEventoValidEdit(form) ) return
            setBtnDisable(true)
            const resp = await editarEvento(form)
            if (resp){
                funcionModal({active: false})
                setForm(formInitial)
                setArchivo(null)
                setBtnDisable(false)
            }
        }
  
    }

    useEffect(() => {
        if (data.action === "editar") {
            return setForm({
                ...data.evento,
                archivo: ""
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
                <Box sx={styleModalEvento}>
                    <Typography variant='h6'  >
                        {data.title}
                    </Typography>
                    <Box component="form" autoComplete='off'
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                            margin: '10px 0',
                            display: "flex"
                        }}
                    >
                        <Box sx={{ width: "50%" }} >
                            <TextField
                                sx={{ width: "100%", marginBottom: 3 }}
                                label="Titulo"
                                variant="outlined"
                                name='titulo'
                                value={form.titulo}
                                onChange={handleChange}
                            />
                            <TextareaAutosize
                                style={{
                                    width: "100%",
                                    fontFamily: "IBM Plex Sans, sans-serif",
                                    fontSize: "0.875rem",
                                    fontWeight: 400,
                                    lineHeight: 1.5,
                                    padding: "12px",
                                    borderRadius: 3
                                }}
                                placeholder="Descripcion 5 lineas"
                                name="descripcion"
                                value={form.descripcion}
                                onChange={handleChange}
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs} locale="es" >
                                <DateCalendar 
                                    value={fecha}
                                    onChange={ handleChangeFecha}
                                />
                            </LocalizationProvider>
                        </Box>
                        <Box sx={{ width: "50%" }} >
                            <TextareaAutosize
                                style={{
                                    width: "100%",
                                    fontFamily: "IBM Plex Sans, sans-serif",
                                    fontSize: "0.875rem",
                                    fontWeight: 400,
                                    lineHeight: 1.5,
                                    padding: "12px",
                                    borderRadius: 3
                                }}
                                placeholder="Resumen 3 lineas"
                                name="resumen"
                                value={form.resumen}
                                onChange={handleChange}
                            />
                            <Button variant="outlined" startIcon={< UploadIcon />} >
                                <label htmlFor="imagen">
                                    Agregar imagen
                                </label>
                            </Button>

                            <input
                                type='file'
                                accept='.jpg,.png'
                                id="imagen"
                                onChange={archivoSeleccionado}
                                style={{ display: 'none' }}
                            />
                            {archivo &&
                                <Avatar
                                    sx={{ width: 250, height: 250, borderRadius: 1, marginTop: 3 }}
                                    src={URL.createObjectURL(archivo)}
                                />
                            }
                        </Box>

                    </Box>
                    <Button disabled={ btnDisable } variant='contained' onClick={handleSubmit}>
                        {data.titleBtn}
                    </Button>
                </Box>
            </Fade>
        </Modal >
    )
}
