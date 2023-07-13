import { useState, useEffect } from "react"
import { styleModalCurso } from "../../helpers/styles";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UploadIcon from '@mui/icons-material/Upload';
import Avatar from '@mui/material/Avatar';
import Swal from "sweetalert2";
import { formAlcaldeValid } from "../../helpers/validaciones";
import apiSedalp from "../../../../api/config";

const formInitial = {
    nombre: "",
    telefono: "",
    correo: "",
    direccion: "",
    sigla: ""
}
export const FormAlcalde = ({ data, funcionModal }) => {

    const [form, setForm] = useState(formInitial)
    const [archivo, setArchivo] = useState(null)
    const [btnDisable, setBtnDisable] = useState(false)

    const handleChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }
    const archivoSeleccionado = (event) => {
        if (event.target.files[0].size >= 1048576) {
            return Swal.fire("EL archivo debe ser menor de 1Mb")
        }
        setArchivo(event.target.files[0])
        setForm({ ...form, archivo: event.target.files[0] })
    }

    const handleSubmit = async () => {

        if (!formAlcaldeValid(form)) return
        setBtnDisable(true)
        await apiSedalp.put(`/municipios/alcalde/${data.municipioID}`, form)
        if (form.archivo.length !== 0) {
            const formData = new FormData();
            formData.append("archivo", form.archivo)
            await apiSedalp.put(`/uploads/alcalde/${data.municipioID}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        }
        window.location.reload()

    }

    useEffect(() => {
        setForm({
            ...data.alcalde,
            archivo: ""
        })
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
                <Box sx={styleModalCurso}>
                    <Typography variant='h6'  >
                        {data.title}
                    </Typography>
                    <Box
                        component="form"
                        autoComplete='off'
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                            margin: '10px 0',
                            display: "flex"
                        }}
                    >
                        <Box sx={{ width: "50%" }} >
                            <TextField
                                sx={{ width: "100%", marginBottom: 3 }}
                                id="form_nombre_al"
                                label="Nombre y apellido"
                                variant="outlined"
                                name='nombre'
                                value={form.nombre}
                                onChange={handleChange}
                            />
                            <TextField
                                sx={{ width: "100%", marginBottom: 3 }}
                                id="form_telefono_al"
                                label="Telefono institucional"
                                variant="outlined"
                                name='telefono'
                                value={form.telefono}
                                onChange={handleChange}
                            />
                            <TextField
                                sx={{ width: "100%", marginBottom: 3 }}
                                id="form_correo_al"
                                label="Correo institucional"
                                variant="outlined"
                                name='correo'
                                value={form.correo}
                                onChange={handleChange}
                            />
                            <TextField
                                sx={{ width: "100%", marginBottom: 3 }}
                                id="form_direccion_al"
                                label="dirección institucional"
                                variant="outlined"
                                name='direccion'
                                value={form.direccion}
                                onChange={handleChange}
                            />
                            <TextField
                                sx={{ width: "100%", marginBottom: 3 }}
                                id="form_sigla_al"
                                label="Sigla del partido"
                                variant="outlined"
                                name='sigla'
                                value={form.sigla}
                                onChange={handleChange}
                            />

                        </Box>
                        <Box sx={{ width: "50%" }} >
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
                    <Button disabled={btnDisable} variant='contained' onClick={handleSubmit}>
                        {data.titleBtn}
                    </Button>
                </Box>
            </Fade>
        </Modal >
    )
}
