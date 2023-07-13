import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { WebRoutes } from '../modules/web/routes/WebRoutes'
import { Login } from '../modules/admin/components/Login';
import { HomeView } from '../modules/admin/views/HomeView';


export const AppRouter = () => {

    const { login,verificarLocalStorage } = useAuth()
    const [active, setActive] = useState({ active: false })
    
    const handleKeywoard = (e) => {
        if (e.altKey && e.key === "a") {
            console.log("Se presionó Alt + a");
            if(login === 'no-authenticated'){
                setActive({active: true})
            }
        }
    }
    
    useEffect(() => {
        document.addEventListener("keydown", handleKeywoard)
        return () => {
            document.removeEventListener("keydown", handleKeywoard)
        }
    }, [login])

    useEffect(() => {
        verificarLocalStorage()
    }, [])

    return (
        <>  
            {active && 
                <Login data={ active } funcionModal={setActive} 
            />  }
       
                {(login === 'authenticated')
                    ? < HomeView /> 
                    : <WebRoutes />
                }
        </>
    )
}
