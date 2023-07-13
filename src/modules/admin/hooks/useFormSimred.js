import React, { useState } from 'react'

export const useFormSimred = ( ) => {

    const [formPoblacion, setFormPoblacion] = useState({})
    const [formIdioma, setFormIdioma] = useState({})
    const [formEscolaridad, setFormEscolaridad] = useState({})
    const [formSalud, setFormSalud] = useState({})
    const [formLugNacimiento, setFormLugNacimiento] = useState({})
    const [formLugResidencia, setFormLugResidencia] = useState({})
    const [formActEconomica, setFormActEconomica] = useState({})
    const [formActOcupacional, setFormActOcupacional] = useState({})
    const [formVivAgua, setFormVivAgua] = useState({})
    const [formVivBasura, setFormVivBasura] = useState({})
    const [formVivCocinar, setFormVivCocinar] = useState({})
    const [formVivComunicacion, setFormVivComunicacion] = useState({})
    const [formVivDesague, setFormVivDesague] = useState({})
    const [formVivEnergia, setFormVivEnergia] = useState({})
    const [formVivViviendas, setFormVivViviendas] = useState({})
  
    const IngresarValoresForm  =( dataTable ) => {
        setFormPoblacion(dataTable.tablas.poblacion)
        setFormIdioma(dataTable.tablas.idioma)
        setFormEscolaridad(dataTable.tablas.escolar)
        setFormSalud(dataTable.tablas.salud)
        setFormActEconomica(dataTable.tablas.economica.act_economica)
        setFormActOcupacional(dataTable.tablas.economica.act_ocupacional)
        setFormLugNacimiento(dataTable.tablas.nacimiento.lug_nacimiento)
        setFormLugResidencia(dataTable.tablas.nacimiento.lug_residencia)
        setFormVivAgua(dataTable.tablas.vivienda.agua)
        setFormVivBasura(dataTable.tablas.vivienda.basura)
        setFormVivCocinar(dataTable.tablas.vivienda.cocinar)
        setFormVivComunicacion(dataTable.tablas.vivienda.comunicacion)
        setFormVivDesague(dataTable.tablas.vivienda.desague)
        setFormVivEnergia(dataTable.tablas.vivienda.energia)
        setFormVivViviendas(dataTable.tablas.vivienda.viviendas)
    }

    const handleChangePoblacion = ({ target }, key) => {
        setFormPoblacion(prevForm => ({
            ...prevForm,
            [target.name]: {
                ...prevForm[target.name],
                [key]: target.value
            }
        }))
    }
    const handleChangeIdioma = ({ target }, key) => {
        setFormIdioma(prevForm => ({
            ...prevForm,
            [target.name]: {
                ...prevForm[target.name],
                [key]: target.value
            }
        }))
    }
    const handleChangeEscolaridad = ({ target }, key) => {
        setFormEscolaridad(prevForm => ({
            ...prevForm,
            [target.name]: {
                ...prevForm[target.name],
                [key]: target.value
            }
        }))
    }
    const handleChangeSalud = ({ target }, key) => {
        setFormSalud(prevForm => ({
            ...prevForm,
            [target.name]: {
                ...prevForm[target.name],
                [key]: target.value
            }
        }))
    }
    const handleChangeActEconomica = ({ target }, key) => {
        setFormActEconomica(prevForm => ({
            ...prevForm,
            [target.name]: {
                ...prevForm[target.name],
                [key]: target.value
            }
        }))
    }
    const handleChangeActOcupacional = ({ target }, key) => {
        setFormActOcupacional(prevForm => ({
            ...prevForm,
            [target.name]: {
                ...prevForm[target.name],
                [key]: target.value
            }
        }))
    }
    const handleChangeLugNaciminento = ({ target }, key) => {
        setFormLugNacimiento(prevForm => ({
            ...prevForm,
            [target.name]: {
                ...prevForm[target.name],
                [key]: target.value
            }
        }))
    }
    const handleChangeLugResidencia = ({ target }, key) => {
        setFormLugResidencia(prevForm => ({
            ...prevForm,
            [target.name]: {
                ...prevForm[target.name],
                [key]: target.value
            }
        }))
    }
    const handleChangeVivAgua = ({ target }, key) => {
        setFormVivAgua(prevForm => ({
            ...prevForm,
            [target.name]: {
                ...prevForm[target.name],
                [key]: target.value
            }
        }))
    }
    const handleChangeVivBasura = ({ target }, key) => {
        setFormVivBasura(prevForm => ({
            ...prevForm,
            [target.name]: {
                ...prevForm[target.name],
                [key]: target.value
            }
        }))
    }
    const handleChangeVivCocinar = ({ target }, key) => {
        setFormVivCocinar(prevForm => ({
            ...prevForm,
            [target.name]: {
                ...prevForm[target.name],
                [key]: target.value
            }
        }))
    }
    const handleChangeVivComunicacion = ({ target }, key) => {
        setFormVivComunicacion(prevForm => ({
            ...prevForm,
            [target.name]: {
                ...prevForm[target.name],
                [key]: target.value
            }
        }))
    }
    const handleChangeVivDesague = ({ target }, key) => {
        setFormVivDesague(prevForm => ({
            ...prevForm,
            [target.name]: {
                ...prevForm[target.name],
                [key]: target.value
            }
        }))
    }
    const handleChangeVivEnergia = ({ target }, key) => {
        setFormVivEnergia(prevForm => ({
            ...prevForm,
            [target.name]: {
                ...prevForm[target.name],
                [key]: target.value
            }
        }))
    }
    const handleChangeVivViviendas = ({ target }, key) => {
        setFormVivViviendas(prevForm => ({
            ...prevForm,
            [target.name]: {
                ...prevForm[target.name],
                [key]: target.value
            }
        }))
    }
    return {
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
    }
}
