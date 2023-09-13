import React from 'react'
import "./Education.css"

export default function Education() {
    return (
        <>
            <>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet" />
            </>
            <div id="education">
                <p className='edu-title'>EDUCATION</p>
                <div className='edu-container'>
                    <div className='each-edu'>
                        <div className='year'>
                            <p className='duration'>2022 August - 2024 May</p>
                            <p className='degree'>Master of Science in Computer and Information Sciences</p>
                        </div>
                        <div className='edu'>
                            <p className='duration'>UNIVERSITY OF FLORIDA</p>
                            <p className='degree'>CGPA: 3.83/4.0</p>
                            <p className='degree'><strong>Courses:</strong> Mathematics for Intelligent Systems, Distributed Operating Systems, Analysis of Algorithms, Machine Learning, Multimodal Data Mining, Natural Language Processing, Advanced Data Structures, Advanced Topics in Data Science, Divergent Thinking</p>
                        </div>
                    </div>
                    <div className='each-edu'>
                        <div className='year'>
                            <p className='duration'>2016 July - 2020 September</p>
                            <p className='degree'>Master of Science in Computer and Information Sciences</p>
                        </div>
                        <div className='edu'>
                            <p className='duration'>JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY</p>
                            <p className='degree'>CGPA: 8.88/10.0</p>
                            <p className='degree'><strong>Courses:</strong> Operating Systems, Data Structures, Design and Analysis Of Algorithms, Machine Learning, Computer Networking, Database Management Systems, Web Programming, Software Engineering, Cloud Computing, Artificial Intelligence and Machine Learning</p>
                        </div>
                    </div>
                </div>

            </div></>
    )
}
