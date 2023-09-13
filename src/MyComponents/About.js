import React from 'react'
import dp from "../Assets/dp.jpeg"

import "./About.css"

export default function About() {
    return (
        <>
            <>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet" />
            </>
            <div id="about" className="container">
                <div className="parallelogram">
                    <p className='about-title'>HELLO! THIS IS VAISHNAVI CHILAKAMARTHI</p>
                    <p className='about-data'>A dedicated technologist with a strong background in a diverse range of technologies and a passion for solving complex challenges.
                        My expertise spans programming languages, database systems, web development, cloud computing, and artificial intelligence.
                    </p>
                </div>
                <img className='dp' src={dp} />
            </div></>
    )
}
