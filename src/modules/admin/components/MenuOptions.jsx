import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { dataMenu } from '../helpers/datas';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from '../../../hooks/useAuth';
const drawerWidth = 240;
export const MenuOptions = () => {

    const { logoutUser, user } = useAuth()
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path)
    }

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List>
                {(user.rol === "Admin")
                    ? dataMenu.map((item, index) => (
                        <ListItem key={index} disablePadding onClick={() => handleNavigate(item.path)} >
                            <ListItemButton>
                                <ListItemIcon>
                                    {< item.icon />}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    ))
                    : dataMenu.map((item, index) => (
                        <ListItem key={index} disablePadding onClick={() => handleNavigate(item.path)} >
                            {(item.title !== "Usuarios")
                                && <ListItemButton>
                                    <ListItemIcon>
                                        {< item.icon />}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            }
                        </ListItem>
                    ))
                }
            </List>
            < Box sx={{ display: 'flex', alignItems: 'end', height: '60%' }}>
                <ListItemButton style={{ color: 'red' }} onClick={logoutUser} >
                    <ListItemIcon>
                        <CloseIcon color='error' />
                    </ListItemIcon>
                    <ListItemText primary={"Salir"} />
                </ListItemButton>
            </Box>
        </Drawer>
    )
}
