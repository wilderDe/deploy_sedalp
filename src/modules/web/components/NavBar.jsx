import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import img_gober from '../../../assets/sedalp/GADLP.png'
import img_sedalp from '../../../assets/sedalp/sedalp.png'
import menu_icons from '../../../assets/icons/menu.svg'
import close_icons from '../../../assets/icons/close.svg'
import { container } from '../../../helpers/framerMotion'
import '../styles/navbar.css'

export const NavBar = () => {

    const [ isMobile, setIsMobile] = useState(window.innerWidth);
    const [open, setOpen] = useState(false)

    const handleOpen = (isOpen) => {
        setOpen(isOpen)
    }

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (

        <div className='navbar' >
            <div className="navbar-logos">
                <Link to="https://www.gobernacionlapaz.gob.bo/" target='_blank'><img className="img-gober" src={img_gober} /></Link>
               
                <img className="img-sedalp" src={img_sedalp} />
            </div>

            {(isMobile >= 768 )
                ? <div className="navbar-menu">
                    <NavLink to="/" className={({ isActive }) => isActive ? "menu-link active-link" : "menu-link"}>Inicio</NavLink>
                    <NavLink to="/cursos" className={({ isActive }) => isActive ? "menu-link active-link" : "menu-link"}>Cursos</NavLink>
                    <NavLink to="/eventos" className={({ isActive }) => isActive ? "menu-link active-link" : "menu-link"}>Eventos</NavLink>
                    <NavLink to="/normativa" className={({ isActive }) => isActive ? "menu-link active-link" : "menu-link"}>Normativas</NavLink>
                    <NavLink to="/simred" className={({ isActive }) => isActive ? "menu-link active-link" : "menu-link"}>SIMRED</NavLink>
                </div>

                : <div className='navbar-mobile'>
                    <img src={menu_icons} onClick={() => handleOpen(true)} />
                    {(open) &&
                        <motion.div
                            className="navbar-mobile_content"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="navbar-mobile_items">
                                <div className="navbar-mobile-end">
                                    <img src={close_icons} onClick={() => handleOpen(false)} />
                                </div>

                                <div className="navbar-mobile_links">
                                    <NavLink to="/" onClick={() => handleOpen(false)}  className={({ isActive }) => isActive ? "menu-link active-link" : "menu-link"}>Inicio</NavLink>
                                    <NavLink to="/cursos" onClick={() => handleOpen(false)} className={({ isActive }) => isActive ? "menu-link active-link" : "menu-link"}>Cursos</NavLink>
                                    <NavLink to="/eventos" onClick={() => handleOpen(false)}  className={({ isActive }) => isActive ? "menu-link active-link" : "menu-link"}>Eventos</NavLink>
                                    <NavLink to="/normativa" onClick={() => handleOpen(false)}  className={({ isActive }) => isActive ? "menu-link active-link" : "menu-link"}>Normativas</NavLink>
                                    <NavLink to="/simred" onClick={() => handleOpen(false)}  className={({ isActive }) => isActive ? "menu-link active-link" : "menu-link"}>SIMRED</NavLink>
                                </div>
                            </div>
                        </motion.div>
                    }
                </div>}
        </div>
    )
}
