import React from "react";
import { Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import IconButton from '@material-ui/core/IconButton';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { useStateValue } from '../Shop/StateProvider';
import { actionType } from "../Shop/reducer";


const Navmenu = (props) => {
    const [{ basket, user }, dispatch] = useStateValue();
    const historial = useHistory();
    const [usuario, setUsuario] = useState(null)
    // const path = window.location.pathname
    const [path, setpath] = useState(window.location.pathname)
    const [show, setShow] = useState('nav__menu ')
    /*==================== DARK LIGHT THEME ==================== */






    useEffect(() => {
        onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                setUsuario(user.email)
            }
        })

    }, [])

    const cerrarSesion = () => {
        onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                signOut(getAuth(), user)
                setUsuario(null)
                dispatch({
                    type: actionType.EMPTY_BASKET,
                    basket: [],
                })
                dispatch({
                    type: actionType.SET_USER,
                    user: null,
                })
                historial.push('/')
            }
        }

        )
    }

    /*==================== SHOW MENU ====================*/
    const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

    /*===== MENU SHOW =====*/

    const menuShow = () => {
        setShow('nav__menu show-menu')
    }
    /*===== MENU HIDDEN =====*/

    const menuHidden = () => {
        setShow('nav__menu ')

    }



    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll('.nav__link')

    function linkAction() {
        const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    /*==================== CHANGE BACKGROUND HEADER ====================*/
    function scrollHeader() {
        const header = document.getElementById('header')
        // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
        if (this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

    return (


        <header className="header" id="header">

            <nav className="nav container">
                <a href="#home" className="nav__logo"><img alt='logo' src="/img/logcorto3.png" /></a>

                <div className={show} id="nav-menu">
                    <ul className="nav__list">
                        <li className='nav__item'>
                            {
                                usuario ?
                                    (
                                        <Link to='/User'><div className="nav__link ">{user ? user.email : 'user'}</div></Link>
                                    )
                                    :
                                    (
                                        <span />
                                    )
                            }

                        </li>
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
                                !usuario ?
                                    (
                                        <Link to='/Login'><div className="nav__link ">Login</div></Link>

                                    )
                                    :
                                    (
                                        <span />
                                    )
                            }

                        </li>
                        <li className="nav__item">

                            {
                                path !== '/' ?
                                    (
                                        <Link to='/'><div className="nav__link">Nosotros</div></Link>
                                    )
                                    :
                                    (
                                        <a href="#about" className="nav__link">Nosotros</a>
                                    )
                            }
                        </li>
                        <li className="nav__item">
                            <Link to='/Servicios'><div className="nav__link">Servicios</div></Link>
                        </li>
                        <li className="nav__item">
                            {
                                path !== '/' ?
                                    (
                                        <Link to='/'><div className="nav__link">Contacto</div></Link>
                                    )
                                    :
                                    (
                                        <a href="#subscribe" className="nav__link">Contacto</a>
                                    )
                            }
                        </li>

                    </ul>

                    <div className="nav__dark">

                        {
                            usuario ?
                                (

                                    <div onClick={cerrarSesion} className='ri-shut-down-line  cerrar'></div>

                                )
                                :
                                (
                                    <span/>
                                )
                        }
                    </div>

                    <i onClick={menuHidden} className="ri-close-line nav__close" id="nav-close"></i>
                </div>

                <div > <Link to={user ? '/User' : '/Login'}> <IconButton color="inherit" aria-label="show cart items">
                    <Badge badgeContent={basket?.length} color='secondary'><ShoppingCart fontSize='medium' color='primary'></ShoppingCart>
                    </Badge>
                </IconButton></Link> </div>

                <div onClick={menuShow} className="nav__toggle" id="nav-toggle">
                    <i className="ri-function-line"></i>
                </div>

            </nav>

        </header>

    )
}
export default Navmenu;