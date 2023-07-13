import { useEffect, useState} from "react"
import apiSedalp from "../../../../api/config";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UploadIcon from '@mui/icons-material/Upload';
import { styleModalUser } from "../../helpers/styles";
import { formPdfValid } from "../../helpers/validaciones";

export const FormPdf = ({ data, funcionModal }) => {

    const [archivo, setArchivo] = useState(null)
    const [loadingUpload, setLoadingUpload] = useState(0)
    const [banderaLoagind, setBanderaLoagind] = useState(false)
    const [btnDisable, setBtnDisable] = useState(false)

    const archivoSeleccionado = (event) => {
        setArchivo(event.target.files[0])
    
    }
    const handleSubmit = async () => {
        if(!formPdfValid(archivo)) return
        setBtnDisable(true)
        const formData = new FormData();
        formData.append("archivo", archivo);
        setBanderaLoagind(true)
        await apiSedalp.put(`/uploads/pdfs/${data.namePdf}/${data.municipioID}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress: (progressEvent) => {
                const progressPercentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setLoadingUpload(progressPercentage)
                //console.log(`Progreso de carga: ${progressPercentage}%`);
            },
        });
        funcionModal({active: false})
        setLoadingUpload(0)
        setArchivo(null)
        setBanderaLoagind(false)
        setBtnDisable(false)
    }

    const handleClose = () =>{
        setArchivo(null)
        funcionModal({active: false})
    }

    return (
        <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={data.active}
                onClose={() => handleClose()}
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
    )
}
