import React from "react";
import { useState } from "react";

import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';


const Videosecsion = () => {
    
        const sr = ScrollReveal({
            distance: '60px',
            duration: 2800,
            reset: false
        })
    
        useEffect(() => {
            sr.reveal(`.section__title`, {origin: 'left' ,interval: 100, delay: 400});
            sr.reveal('.video__container', {origin: 'right' ,interval: 100, delay: 400});
        }, [])




    /*==================== VIDEO ==================== */

    const [icono, setIcono] = useState('ri-play-line  video__button-icon');

    const playPause = async () => {
        const videoFile = document.querySelector(".video-file");
        const finalVideo = () => {
            if (videoFile.ended) {
                setIcono('ri-play-line  video__button-icon')
            }
        }
        try {
            if (icono === 'ri-play-line  video__button-icon') {
                await videoFile.play()
                // We change the icon
                setIcono('ri-pause-line  video__button-icon')

                videoFile.addEventListener("ended", finalVideo);
            } else {
                // Pause video
                videoFile.pause();
                // We change the icon
                setIcono('ri-play-line  video__button-icon')
            }
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div>
            <section className="video section">
                <h2 className="section__title">Soluciones integrales</h2>

                <div className="video__container container">
                    <p className="video__description">
                    </p>

                    <div className="video__content">
                        <video className='video-file' id="video-file">
                            <source src="/video/Acá se trabaja.mp4" type="video/mp4" />
                        </video>

                        <button onClick={playPause} className="button button--flex video__button" id="video-button">
                            <i className={icono} id="video-icon"></i>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Videosecsion;