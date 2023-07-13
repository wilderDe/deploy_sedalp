import Button from '@mui/material/Button';
import { getEnvironments } from '../../../../helpers/getEnviroments';
import { useEffect, useState } from 'react';
import { FormTableUno } from './FormTableUno';
import { FormTableDos } from './FormTableDos';
import { FormTableTres } from './FormTableTres';
import { useFormSimred } from '../../hooks/useFormSimred';
import apiSedalp from '../../../../api/config';
import { Box, Typography } from '@mui/material';

const { VITE_API_URL } = getEnvironments

export const FormTable = ({ dataTable }) => {
    let newTexto = ""
    const [guardando, setGuardando] = useState(false)
    const [textGuardado, setTextGuardadp] = useState("")
    const {
        formPoblacion,
        formIdioma,
        formEscolaridad,
        formSalud,
        formLugNacimiento,
        formLugResidencia,
        formActEconomica,
        formActOcupacional,
        formVivAgua,
        formVivBasura,
        formVivCocinar,
        formVivComunicacion,
        formVivDesague,
        formVivEnergia,
        formVivViviendas,

        handleChangePoblacion,
        handleChangeIdioma,
        handleChangeEscolaridad,
        handleChangeSalud,
        handleChangeLugNaciminento,
        handleChangeLugResidencia,
        handleChangeActEconomica,
        handleChangeActOcupacional,
        handleChangeVivAgua,
        handleChangeVivBasura,
        handleChangeVivCocinar,
        handleChangeVivComunicacion,
        handleChangeVivDesague,
        handleChangeVivEnergia,
        handleChangeVivViviendas,

        IngresarValoresForm

    } = useFormSimred()


    //TODO no tengas miedo juega con tu enpoind

    const handleSubmit = async () => {
        //Para poblacion
        setGuardando(true)
        for (const item in formPoblacion) {
            if (typeof formPoblacion[item] != "string") {
                await apiSedalp.put(`/municipios/${dataTable.municipioID}/poblacion/${item}`, formPoblacion[item])
            }
        }
        newTexto = newTexto.concat('poblacion')
        setTextGuardadp(newTexto)

        for (const item in formIdioma) {
            if (typeof formIdioma[item] != "string") {
                await apiSedalp.put(`/municipios/${dataTable.municipioID}/idioma/${item}`, formIdioma[item])
            }
        }
        newTexto = newTexto.concat(', idioma')
        setTextGuardadp(newTexto)

        for (const item in formEscolaridad) {
            if (typeof formEscolaridad[item] != "string") {
                await apiSedalp.put(`/municipios/${dataTable.municipioID}/escolar/${item}`, formEscolaridad[item])
            }
        }
        newTexto = newTexto.concat(', escolaridad')
        setTextGuardadp(newTexto)

        for (const item in formSalud) {
            if (typeof formSalud[item] != "string") {
                await apiSedalp.put(`/municipios/${dataTable.municipioID}/salud/${item}`, formSalud[item])
            }
        }
        newTexto = newTexto.concat(', salud')
        setTextGuardadp(newTexto)

        for (const item in formLugNacimiento) {
            if (typeof formLugNacimiento[item] != "string") {
                await apiSedalp.put(`/municipios/${dataTable.municipioID}/nacimiento/lug_nacimiento/${item}`, formLugNacimiento[item])
            }
        }
        newTexto = newTexto.concat(', lug_nacimiento')
        setTextGuardadp(newTexto)

        for (const item in formLugResidencia) {
            if (typeof formLugResidencia[item] != "string") {
                await apiSedalp.put(`/municipios/${dataTable.municipioID}/nacimiento/lug_residencia/${item}`, formLugResidencia[item])
            }
        }
        newTexto = newTexto.concat(', lug_residencia')
        setTextGuardadp(newTexto)

        for (const item in formActEconomica) {
            if (typeof formActEconomica[item] != "string") {
                await apiSedalp.put(`/municipios/${dataTable.municipioID}/economica/act_economica/${item}`, formActEconomica[item])
            }
        }
        newTexto = newTexto.concat(', act_economica')
        setTextGuardadp(newTexto)

        for (const item in formActOcupacional) {
            if (typeof formActOcupacional[item] != "string") {
                await apiSedalp.put(`/municipios/${dataTable.municipioID}/economica/act_ocupacional/${item}`, formActOcupacional[item])
            }
        }
        newTexto = newTexto.concat(', act_ocupacional')
        setTextGuardadp(newTexto)

        for (const item in formVivAgua) {
            if (typeof formVivAgua[item] != "string") {
                await apiSedalp.put(`/municipios/${dataTable.municipioID}/vivienda/agua/${item}`, formVivAgua[item])
            }
        }
        newTexto = newTexto.concat(', viv_agua')
        setTextGuardadp(newTexto)

        for (const item in formVivBasura) {
            if (typeof formVivBasura[item] != "string") {
                await apiSedalp.put(`/municipios/${dataTable.municipioID}/vivienda/basura/${item}`, formVivBasura[item])
            }
        }
        newTexto = newTexto.concat(', viv_basura')
        setTextGuardadp(newTexto)

        for (const item in formVivCocinar) {
            if (typeof formVivCocinar[item] != "string") {
                await apiSedalp.put(`/municipios/${dataTable.municipioID}/vivienda/cocinar/${item}`, formVivCocinar[item])
            }
        }
        newTexto = newTexto.concat(', viv_cocinar')
        setTextGuardadp(newTexto)

        for (const item in formVivComunicacion) {
            if (typeof formVivComunicacion[item] != "string") {
                await apiSedalp.put(`/municipios/${dataTable.municipioID}/vivienda/comunicacion/${item}`, formVivComunicacion[item])
            }
        }
        newTexto = newTexto.concat(', vic_comunicacion')
        setTextGuardadp(newTexto)

        for (const item in formVivDesague) {
            if (typeof formVivDesague[item] != "string") {
                await apiSedalp.put(`/municipios/${dataTable.municipioID}/vivienda/desague/${item}`, formVivDesague[item])
            }
        }
        newTexto = newTexto.concat(', viv_desague')
        setTextGuardadp(newTexto)

        for (const item in formVivEnergia) {
            if (typeof formVivEnergia[item] != "string") {
                await apiSedalp.put(`/municipios/${dataTable.municipioID}/vivienda/energia/${item}`, formVivEnergia[item])
            }
        }

        setTextGuardadp(newTexto)
        for (const item in formVivViviendas) {
            if (typeof formVivViviendas[item] != "string") {
                await apiSedalp.put(`/municipios/${dataTable.municipioID}/vivienda/viviendas/${item}`, formVivViviendas[item])
            }
        }
        newTexto = newTexto.concat(', viv_viviendas')
        setTextGuardadp(newTexto)
        setGuardando(false)
        setTextGuardadp("")
        //window.location.reload()    
    }


    useEffect(() => {
        IngresarValoresForm(dataTable)
    }, [])

    if (Object.keys(dataTable).length === 0) return <>Cargando...</>

    if (guardando) {
        return <Box width={700} >
            Guardando...
            <Typography color={'GrayText'}>
                {textGuardado}
            </Typography>
        </Box>
    }

    return (
        <>
            <Button variant='contained' color='secondary' onClick={handleSubmit} >
                guardar
            </Button>
            {/* Poblacion */}
            <FormTableUno formContent={formPoblacion} handleChange={handleChangePoblacion} />
            {/* Idioma */}
            <FormTableUno formContent={formIdioma} handleChange={handleChangeIdioma} />
            {/* Escolaridad */}
            <FormTableUno formContent={formEscolaridad} handleChange={handleChangeEscolaridad} />
            {/* Salud */}
            <FormTableUno formContent={formSalud} handleChange={handleChangeSalud} />

            {/* Lugar de Nacimiento */}
            <FormTableDos formContent={formLugNacimiento} handleChange={handleChangeLugNaciminento} />
            {/* Lugar de Nacimiento */}
            <FormTableDos formContent={formLugResidencia} handleChange={handleChangeLugResidencia} />

            {/* Actividad Economica */}
            <FormTableDos formContent={formActEconomica} handleChange={handleChangeActEconomica} />
            {/* Actividad Ocupacional */}
            <FormTableDos formContent={formActOcupacional} handleChange={handleChangeActOcupacional} />

            {/* Vivienda Agua */}
            <FormTableTres formContent={formVivAgua} handleChange={handleChangeVivAgua} />
            {/* Vivienda Basura */}
            <FormTableTres formContent={formVivBasura} handleChange={handleChangeVivBasura} />
            {/* Vivienda Cocinar */}
            <FormTableTres formContent={formVivCocinar} handleChange={handleChangeVivCocinar} />
            {/* Vivienda Comunicacion */}
            <FormTableTres formContent={formVivComunicacion} handleChange={handleChangeVivComunicacion} />
            {/* Vivienda Desague */}
            <FormTableTres formContent={formVivDesague} handleChange={handleChangeVivDesague} />
            {/* Vivienda Energia */}
            <FormTableTres formContent={formVivEnergia} handleChange={handleChangeVivEnergia} />
            {/* Vivienda Viviendas */}
            <FormTableTres formContent={formVivViviendas} handleChange={handleChangeVivViviendas} />

        </>
    )
}
