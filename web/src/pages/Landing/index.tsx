import React from 'react'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './style.css'



function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua Plataforma de estudos online</h2>
                </div>
                <img src={landingImg} className="hero-image"></img>
                <div className="buttons-container">
                    <a href="" className="study"><img src={studyIcon} alt="estudar" />Estudar</a>
                    <a href="" className="give-classes"><img src={giveClassesIcon} alt="Dar Aulas" />Dar Aulas</a>
                </div>
                <span className="total-conections">
                    Total 8000 de Conexoes ja realizadas <img src={purpleHeartIcon} />
                </span>
            </div>
        </div>
    )
}
export default Landing