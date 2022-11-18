import React from 'react'
import Iframe from 'react-iframe'
import "./ContactMap.scss"

const ContactMap = () => {
    return (
        <div className='contacMap'>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96778.87301187502!2d-74.002121!3d40.710536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York!5e0!3m2!1str!2sus!4v1667568609377!5m2!1str!2sus"
                width="100%"
                height="450"
                style="border:0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </Iframe>
        </div>
    )
}

export default ContactMap