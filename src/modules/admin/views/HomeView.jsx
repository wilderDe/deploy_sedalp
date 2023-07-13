import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MenuOptions } from '../components/MenuOptions';
import { AppBarComponent } from '../components/AppBarComponent';
import { Navigate, Route, Routes } from 'react-router-dom'
import { CursosView } from './CursosView'
import { EventosView } from './EventosView'
import { NormativaView } from './NormativaView'
import { SimredView } from './SimredView'
import { UserView } from './UserView'
import { useAuth } from '../../../hooks/useAuth';

export const HomeView = () => {

    const { user } = useAuth()

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBarComponent />

            <MenuOptions />

            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Routes>
                    <Route path='/' element={ <Typography>Panel administrativo, sedalp.</Typography> } />
                    {(user.rol === "Admin") 
                    ? <Route path='/usuarios' element={ <UserView /> } />
                    :null}
                    <Route path='/cursos' element={ <CursosView /> } />
                    <Route path='/eventos' element={ <EventosView /> } />
                    <Route path='/normativas' element={ <NormativaView /> } />
                    <Route path='/Simred' element={ <SimredView /> } />
                    <Route path='/*' element={ <Navigate to="/" replace /> } />
                </Routes>
            </Box>
        </Box>
    )
}
