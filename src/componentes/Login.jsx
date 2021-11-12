import React from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory, Link } from "react-router-dom";
import Futer from "./Landing/Futer";
import Navmenu from "./Landing/Navmenu";
import Home from "./Landing/Home";
import Scroll from "./Landing/Scroll";




const Login = () => {



    const historial = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [msgError, setMsgError] = useState(null);

    const iniciarSesion = async (e) => {
        e.preventDefault()
        await signInWithEmailAndPassword(getAuth(), email, password)
            .then((r) => {
                return historial.push('/User')

            })
            .catch((e) => {
                if (e.code === 'auth/wrong-password') {
                    setMsgError('contraseña incorrecta')
                } if (e.code === 'auth/user-not-found') {
                    setMsgError('email no encontrado')
                }
                else {
                    console.log(e.code)
                }
            })
    }




    return (
        <React.Fragment>


<Navmenu></Navmenu>
                   
                    <Home></Home>

                
                        <section className="subscribe section" id="subscribe">
                            <div className="subscribe__bg" >
                                <div className="subscribe__container container keke">
                                    <h2 className="section__title subscribe__title">Comenzar</h2>
                                    <div className="social-container">
                                        <a href="#" className="social"><i className="bi bi-bug"></i></a>
                                        <a href="#" className="social"><i className="bi-globe"></i></a>
                                        <a href="#" className="social"><i className="bi bi-bucket"></i></a>
                                    </div>
                                    <p className="subscribe__description">-entrar en la cuenta</p>
                                    <form action="#" className="subscribe__form registrar__form">
                                        <input onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Email" className="subscribe__input registrar__input" />
                                        <input onChange={(e) => { setPass(e.target.value) }} type="password" placeholder="Contraseña" className="subscribe__input registrar__input" />
                                        <span className='error'>{msgError}</span>

                                        <button onClick={iniciarSesion} className="button">Ingresar</button>

                                    </form>
                                    <div className='links_login'>
                                        <div href="#" className='pass'>Olvide la contraseña</div>
                                        <Link to='/Registrar'><div className='pass'>Registrarse</div></Link>
                                    </div>
                                </div>
                            </div>
                        </section>

                

             
               
                        <Futer></Futer>
         
        </React.Fragment>
    )
}

export default Login;