import { NavBar } from '../components/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { CursoPage } from '../pages/CursoPage'
import { EventosPage } from '../pages/EventosPage'
import { NormativaPage } from '../pages/NormativaPage'
import { SimredPage } from '../pages/SimredPage'
import { MunicipiosPage } from '../pages/MunicipiosPage'


export const WebRoutes = () => {

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path='/' element={< HomePage />} />
                <Route path='/cursos' element={< CursoPage />} />
                <Route path='/eventos' element={< EventosPage />} />
                <Route path='/normativa' element={< NormativaPage />} />
                <Route path='/simred' element={< SimredPage />} />
                <Route path='/region/:id' element={ <MunicipiosPage /> } />
                <Route path='/*' element={< Navigate to="/" replace />} />
            </Routes>
           
        </>
    )
}
