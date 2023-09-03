import React from 'react';
import './Socialmedia.css';

export default function Socialmedia() {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="icon-bar">
                <a href="mailto:vchilakamarthi@ufl.edu" className="mail"><i className="fa fa-envelope"></i></a>
                <a href="tel:3526650657" className="phone"><i className="fa fa-phone"></i></a>
                <a href="https://www.linkedin.com/in/vaishnavi-chilakamarthi/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                <a href="https://github.com/vaishu98" className="github"><i className="fa fa-github"></i></a>
                <a href="https://www.instagram.com/vaishnavichilakamarthi/" className="insta"> <i className="fa fa-instagram"></i></a>
            </div>
        </>
    );
}
