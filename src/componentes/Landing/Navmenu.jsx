import React from "react";
import { Link, useHistory } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import IconButton from '@material-ui/core/IconButton';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { useStateValue } from '../Shop/StateProvider';
import { actionType } from "../Shop/reducer";


const Navmenu = (props) => {
    const [{ basket, user }, dispatch] = useStateValue();
    const historial = useHistory();

    const [path, setpath] = useState(window.location.pathname)
    const [show, setShow] = useState('nav__menu')
    const [btn, setBtn] = useState('ri-function-line')
    const [header, setHeader] = useState('header')


    useEffect(() => {
        /*==================== REMOVE MENU MOBILE ====================*/
        const navLink = document.querySelectorAll('.nav__link')

        function linkAction() {
            /*Remove menu mobile*/
            setShow('nav__menu')
            setBtn('ri-function-line')
        }
        navLink.forEach(n => n.addEventListener('click', linkAction))


        function scrollHeader() {
            if (this.scrollY >= 100) {
                setHeader('header scroll-header')
            } else {
                setHeader('header')
            }
        }
        window.addEventListener('scroll', scrollHeader)


    }, [])

    const menuShow = () => {
        if (btn === 'ri-function-line') {
            setShow('nav__menu show-menu')
            setBtn('ri-close-line')
        } else {
            setShow('nav__menu')
            setBtn('ri-function-line')
        }
    }


    return (


        <header className={header} id="header">

            <nav className="nav container">
                <a href="#home" className="nav__logo"><img alt='logo' src="/img/logcorto3.png" /></a>

                <div className={show} id="nav-menu">
                    <ul className="nav__list">

                        <li className="nav__item">
                            {
                                path !== '/' ?
                                    (

                                        <Link to='/'><div className="nav__link">Inicio</div></Link>
                                    )
                                    :
                                    (
                                        <a href="#home" className="nav__link">Inicio</a>
                                    )
                            }

                        </li>

                        <li className="nav__item">
                            {
                                path !== '/' ?
                                    (

                                        <Link to='/Presupuestos'><div className="nav__link">Presupuestos</div></Link>
                                    )
                                    :
                                    (
                                        <Link to='/Presupuestos'><div className="nav__link">Presupuestos</div></Link>
                                    )
                            }

                        </li>
                        <li className="nav__item">
                            <Link to='/Servicios'><div className="nav__link">Servicios</div></Link>
                        </li>
                        <li className="nav__item">

                            <a href="#footer" className="nav__link">Contacto</a>

                        </li>

                    </ul>

                    <div className="nav__dark">


                    </div>


                </div>

                <div > <Link to={'/Cart'}> <IconButton color="inherit" aria-label="show cart items">
                    <Badge badgeContent={basket?.length} color='secondary'><ShoppingCart fontSize='medium' color='primary'></ShoppingCart>
                    </Badge>
                </IconButton></Link> </div>

                <div onClick={menuShow} className="nav__toggle" id="nav-toggle">
                    <i className={btn}></i>
                </div>

            </nav>

        </header>

    )
}
export default Navmenu;