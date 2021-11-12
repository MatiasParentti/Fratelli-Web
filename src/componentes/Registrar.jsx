import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useHistory } from "react-router-dom";
import Futer from "./Landing/Futer";
import Navmenu from "./Landing/Navmenu";
import Home from "./Landing/Home";



const Registrar = () => {



    const historial = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [password2, setPass2] = useState('');
    const [msgError, setMsgError] = useState(null);



    const registrarUsuario = async (e) => {
        e.preventDefault()
        if (password !== password2) {
            setMsgError('Las contraseñas no coinciden')
        } else {
            await createUserWithEmailAndPassword(getAuth(), email, password)
                .then((r) => {
                    historial.push('/User')
                })
                .catch(e => {
                    if (e.code === 'auth/email-already-in-use') {
                        setMsgError('el mail ingrasado ya esta en uso')
                    }
                    if (e.code === 'auth/weak-password') {
                        setMsgError('la contraseña es muy corta')
                    }
                    if (e.code === 'auth/invalid-email') {
                        setMsgError('el mail es invalido')
                    }


                })
        }

    }

    return (

        <React.Fragment>

<Navmenu></Navmenu>
            <Home></Home>

            <section className="subscribe section" id="subscribe">
                <div className="subscribe__bg" >
                    <div className="subscribe__container container keke">
                        <h2 className="section__title subscribe__title">Crear cuenta</h2>

                        <div className="social-container">
                            <a href="#" className="social"><i className="bi bi-bug"></i></a>
                            <a href="#" className="social"><i className="bi-globe"></i></a>
                            <a href="#" className="social"><i className="bi bi-bucket"></i></a>
                        </div>
                        <p className="subscribe__description">-registrarse con email</p>
                        <form onSubmit={registrarUsuario} action="#" className="subscribe__form registrar__form">

                            <input onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Email" className="subscribe__input registrar__input" />
                            <input onChange={(e) => { setPass(e.target.value) }} type="password" placeholder="Contraseña" className="subscribe__input registrar__input" />
                            <input onChange={(e) => { setPass2(e.target.value) }} type="password" placeholder="Contraseña" className="subscribe__input registrar__input" />
                            <button className="button">Registrarse</button>

                        </form>
                        <span className='error'>{msgError}</span>
                    </div>
                </div>
            </section>
            
           


            <Futer></Futer>
        </React.Fragment>




    )



}
export default Registrar;