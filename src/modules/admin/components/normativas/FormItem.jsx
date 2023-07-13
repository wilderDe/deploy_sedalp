import { useState, useEffect} from "react"
import { styleModalUser } from "../../helpers/styles";
import { formAddItemNormativa, formEditItemNormativa } from "../../helpers/validaciones";
import apiSedalp from "../../../../api/config";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UploadIcon from '@mui/icons-material/Upload';

const formInitial = {
    subtitle: "",
    archivo: ""
}

export const FormItem = ({ data, funcionModal }) => {
    const [form, setForm] = useState(formInitial)
    const [archivo, setArchivo] = useState(null)
    const [loadingUpload, setLoadingUpload] = useState(0)
    const [btnDisable, setBtnDisable] = useState(false)
    const [banderaLoagind, setBanderaLoagind] = useState(false)

    const handleChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }
    const archivoSeleccionado = (event) => {
        setArchivo(event.target.files[0])
        setForm({ ...form, archivo: event.target.files[0] })
    }

    const handleSubmit = async () => {
        if (data.action == "agregar") {
            if( !formAddItemNormativa(form) ) return;
            setBtnDisable(true)
            const resp = await apiSedalp.post(`/normativa/${data.grupoID}`, { subtitle: form.subtitle })
            const idItem = resp.data.normativa.archivos[resp.data.normativa.archivos.length - 1]._id
            const formData = new FormData();
            formData.append("archivo", form.archivo)
            setBanderaLoagind(true)
            await apiSedalp.put(`/uploads/normativa/${data.grupoID}/${idItem}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                onUploadProgress: (progressEvent) => {
                    const progressPercentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setLoadingUpload(progressPercentage)
                    console.log(`Progreso de carga: ${progressPercentage}%`);
                },
            });
            window.location.reload()
        } else {
            if ( !formEditItemNormativa(form) ) return;
            setBtnDisable(true)
            await apiSedalp.put(`/normativa/${data.grupoID}/${form._id}`, { subtitle: form.subtitle })
            if(form.archivo.length !== 0){
              
               const formData = new FormData();
                formData.append("archivo", form.archivo)
                setBanderaLoagind(true)
                await apiSedalp.put(`/uploads/normativa/${data.grupoID}/${form._id}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                    onUploadProgress: (progressEvent) => {
                        const progressPercentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        setLoadingUpload(progressPercentage)
                        console.log(`Progreso de carga: ${progressPercentage}%`);
                    },
                });
                setBanderaLoagind(false)
            }
            window.location.reload()
        }
    }

    useEffect(() => {
        if (data.action === "editar") {
            return setForm({
                ...data.item,
                archivo: ""
            })
        }
        setForm(formInitial)
    }, [data])

    return (
        <>
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
                                display: "flex"
                            }}
                        >
                            <Box>
                                <TextField
                                    sx={{ width: "100%", marginBottom: 3 }}
                                    id="form_curso_titulo"
                                    label="Titulo del item"
                                    variant="outlined"
                                    name='subtitle'
                                    value={form.subtitle}
                                    onChange={handleChange}
                                />
                                <Button variant="outlined" startIcon={< UploadIcon />} >
                                    <label htmlFor="imagen">
                                        Agregar documento
                                    </label>
                                </Button>
                                <input
                                    type='file'
                                    accept='.pdf'
                                    id="imagen"
                                    onChange={archivoSeleccionado}
                                    style={{ display: 'none' }}
                                />
                                {archivo &&
                                    <Typography>
                                        Selecciono el archivo: {archivo.name}
                                    </Typography>}

                                {banderaLoagind &&
                                    <Box sx={{ marginTop: 2 }}>
                                        <Typography variant="body1" component="div" color="teal">
                                            {`${loadingUpload}%`}
                                        </Typography>
                                    </Box>
                                }

                            </Box>
                        </Box>
                        <Button disabled={ btnDisable } variant='contained' onClick={handleSubmit}>
                            {data.titleBtn}
                        </Button>
                    </Box>
                </Fade>
            </Modal >
        </>

    )
}
