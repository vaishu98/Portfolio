import React from 'react'
import "./Experience.css"

export default function Experience() {
    return (
        <><>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet" />
        </>
            <div id="experience" className='exp-title'>EXPERIENCE</div>
            <div className='exp-main'>
                <div className='each-exp'>
                    <p className='role'><li><span>STUDENT ASSISTANT</span></li></p>
                    <p className='role'>UNIVERSITY OF FLORIDA</p>
                    <p className='des'>2023 August - 2023 October</p>
                    <p className='des'>
                        Citrus Research and Education Center
                    </p>
                </div>
                <div className='each-exp'>
                    <p className='role'><li><span>STUDENT ASSISTANT</span></li></p>
                    <p className='role'>UNIVERSITY OF FLORIDA</p>
                    <p className='des'>2023 August - 2023 December</p>
                    <p className='des'>
                        Animal Sciences Lab
                    </p>
                </div>
                <div className='each-exp'>
                    <p className='role'><li><span>SYSTEM ENGINEER</span></li></p>
                    <p className='role'>TATA CONSULTANCY SERVICES</p>
                    <p className='des'>2020 July - 2022 July</p>
                    <p className='des'>
                        Technology Business Unit, Nextgen Reseach and Development Division
                    </p>
                </div>
                <div className='each-exp2'>
                    <p className='role'><li><span>RESEARCH INTERN</span></li></p>
                    <p className='role'>TATA CONSULTANCY SERVICES</p>
                    <p className='des'>2020 January - 2022 March</p>
                    <p className='des'>
                        Technology Business Unit, Nextgen Reseach and Development Division
                    </p>
                </div>

            </div></>
    )
}
