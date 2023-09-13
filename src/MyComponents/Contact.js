import React, { useRef, useEffect } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_48deetd',
            'template_m6suigj',
            refForm.current,
            'YKlO1ezBzoHAd-Tg7'
        )
            .then(
                () => {
                    alert('Message sent successfully!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the Message! Please try again')
                    window.location.reload(false)
                }
            )
    }
    return (
        <>
            <>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet" />
            </>
            <div id="contact" className='contact-title'>SAY HELLO!</div>
            <form ref={refForm} onSubmit={sendEmail}>
                <div className='contact-main'>
                    <input type="text" name="from_name" placeholder="Name" required data-aos="fade-up" />
                    <input type="email" name="email" placeholder="Email" required data-aos="fade-up" />
                    <input type="text" name="subject" placeholder="Subject" required data-aos="fade-up" />
                    <textarea name="message" placeholder="Message" required data-aos="fade-up" />
                    <div className='button-sub'><input type="submit" className="flat-button" value="SEND" data-aos="fade-up" /></div>
                </div>
            </form>
        </>
    )
}

export default Contact