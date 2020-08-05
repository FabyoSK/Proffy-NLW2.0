import React from 'react'


import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="" alt="Fabio Alves" />
                <div>
                    <strong>Fabio Alves</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci reiciendis aperiam dolorum repellat.
            <br /><br /> Lorem ipsum dolor sit amet consectetu voluptates, eius magnam dolore deleniti, blanditiis omnis.
            </p>
            <footer>
                <p>Preco/hora
                 <strong>R$ 20,00</strong>
                </p>
                <button type="button"><img src={whatsappIcon} alt="whatsapp" />Entrar em contacto</button>
            </footer>

        </article>
    )
}
export default TeacherItem