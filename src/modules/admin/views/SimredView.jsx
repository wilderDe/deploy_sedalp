import { useEffect, useState } from "react"
import apiSedalp from "../../../api/config"
import { Box, Button, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormPdf } from "../components/simred/FormPdf";
import { FormAlcalde } from "../components/simred/FormAlcalde";
import { FormTable } from "../components/simred/FormTable";
export const SimredView = () => {

    const [regiones, setRegiones] = useState([])
    const [regionActive, setRegionActive] = useState({})
    const [municipioGet, setMunicipioGet] = useState({})
    const [tableEdit, setTableEdit] = useState({})
    const [dataModal, setDataModal] = useState({ active: false })
    const [dataModalAlcalde, setDataModalAlcalde] = useState({ active: false })


    const obtenerRegiones = async () => {
        const { data } = await apiSedalp('/regiones');
        setRegiones(data.region)
    }

    const handleSeleccionRegion = (region) => {
        setRegionActive(region)
        setMunicipioGet({})
        setTableEdit({})
    }

    const handleMunicipio = async (municipio) => {
        setMunicipioGet({})
        setTableEdit({})
        const { data } = await apiSedalp.get(`/municipios/${municipio}`)
        setMunicipioGet(data.municipio)
    }

    const handleEditPdf = (path, municipioID) => {
        setDataModal({
            active: true,
            title: `Editar ${path}`,
            titleBtn: "editar",
            namePdf: path,
            municipioID
        })
        setTableEdit({})
    }
    const handleEditAlcalde = (alcalde, municipioID) => {
        setDataModalAlcalde({
            active: true,
            title: `Editar alcalde`,
            titleBtn: "editar",
            alcalde,
            municipioID
        })
        setTableEdit({})
    }
    const handleEditTabla = (tablas, municipioID) => {
        //console.log(tablas)
        //console.log(municipioID)
        setTableEdit({
            tablas,
            municipioID
        })
    }

    useEffect(() => {
        obtenerRegiones()
    }, [])

    if (regiones.length === 0) {
        return <>Cargando...</>
    }

    return (
        <div >
            <Typography variant="h6" color={"InactiveCaptionText"} >
                Selecciones una región
            </Typography>
            <Box>
                {regiones.map(region => (
                    <Button key={region.id} onClick={() => handleSeleccionRegion(region)} sx={{ margin: 1 }} variant="contained" color="info">
                        {region.region}
                    </Button>
                ))}
            </Box>
            {Object.keys(regionActive).length !== 0
                && <>
                    <Typography variant="h6" color={"InactiveCaptionText"} >
                        Selecciones un municipio
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'start', gap: 2 }} >

                        <Box sx={{ width: 250 }} >
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell >#</TableCell>
                                            <TableCell >Municipio</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {regionActive.municipios.map((row, index) => (
                                            <TableRow
                                                key={row}
                                                sx={{
                                                    '&:last-child td, &:last-child th': { border: 0 },
                                                    '&:hover': { backgroundColor: '#f5f5f5', cursor: 'pointer' }
                                                }}
                                                onClick={() => handleMunicipio(row)}
                                            >
                                                <TableCell >{index + 1}</TableCell>
                                                <TableCell >{row}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                        {Object.keys(municipioGet).length !== 0 &&
                            <Box sx={{ width: 250, display: 'flex', gap: 3, flexDirection: 'column' }}  >
                                <Typography variant="h6" color={"InactiveCaptionText"} >
                                    Municipio de {municipioGet.municipio}
                                </Typography>
                                <Button variant="outlined" color="secondary" onClick={() => handleEditAlcalde(municipioGet.alcalde, municipioGet.id)} >
                                    editar Alcalde
                                </Button>
                                <Button variant="outlined" color="secondary" onClick={() => handleEditTabla(municipioGet.simred, municipioGet.id)} >
                                    editar tablas
                                </Button>
                                <Button variant="outlined" color="secondary" onClick={() => handleEditPdf("poa", municipioGet.id)} >
                                    editar Poa pdf
                                </Button>
                                <Button variant="outlined" color="secondary" onClick={() => handleEditPdf("ine", municipioGet.id)}  >
                                    editar datos estadisticos pdf
                                </Button>
                                <Button variant="outlined" color="secondary" onClick={() => handleEditPdf("ptdi", municipioGet.id)} >
                                    editar ptdi pei pdf
                                </Button>
                                <Button variant="outlined" color="secondary" onClick={() => handleEditPdf("presupuestaria", municipioGet.id)} >
                                    editar Ejecución presupuestaria pdf
                                </Button>

                                <FormPdf data={dataModal} funcionModal={setDataModal} />
                                <FormAlcalde data={dataModalAlcalde} funcionModal={setDataModalAlcalde} />
                            </Box>
                        }
                        {Object.keys(tableEdit).length !== 0 &&
                            <Box sx={{ display: 'flex', gap: 3, flexDirection: 'column', alignItems:"start" }} >
                                <FormTable dataTable={tableEdit} /> 
                            </Box>
                        }
                    </Box>
                </>

            }
        </div>
    )
}
