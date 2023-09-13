import React, { useEffect } from 'react'
import "./Socials.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Socials() {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <>
            <>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet" />
            </>
            <div id="socials" className='socials-title'>SOCIALS</div>
            <div className='socials'>
                <a href="https://www.linkedin.com/in/vaishnavi-chilakamarthi/" className="linkedin" data-aos="fade-up"><i className="fa fa-linkedin fa-5x"></i></a>
                <a href="https://github.com/vaishu98" className="github"><i className="fa fa-github fa-5x" data-aos="fade-up"></i></a>
                <a href="https://www.instagram.com/vaishnavichilakamarthi/" className="insta"> <i className="fa fa-instagram fa-5x" data-aos="fade-up"></i></a>
            </div>
            <br /><br /><br />
            <div className='other-links'>
                <p className='social-link' data-aos="fade-left">Checkout my leetcode profile @  <a href="https://leetcode.com/vaishu98/" data-aos="fade-left">vaishu98</a></p>
                <p className='social-link' data-aos="fade-left">Here is my AWS Certified Cloud Practitioner credly badge @ <a href="https://www.credly.com/badges/4e3a6891-ada4-4059-813f-5021b9c3796e/linked_in_profile" data-aos="fade-left">AWS CCP</a></p>
                <p className='social-link' data-aos="fade-left">Checkout the blogs I contributed to Apps Developer Blog @ <a href="https://www.appsdeveloperblog.com/author/vishnu-avvs/" data-aos="fade-left">VC</a></p>
            </div>
        </>
    )
}
