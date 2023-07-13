import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography  from '@mui/material/Typography';


const drawerWidth = 240;
export const AppBarComponent = () => {
    return (
        <AppBar
            color='default'
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Panel de Administración de autonomias.lapaz.gob.bo
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
