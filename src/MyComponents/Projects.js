import React from 'react'
import "./Projects.css"

export default function Projects() {
    return (
        <div className='projects-main'>

            <p className='tag-open'><mark>&lt; Projects &gt; </mark></p>

            <div className='container-projects'>
                <div className='each-project'>
                    NEUREDA
                </div>
                <div className='each-project'>
                    Algo design
                </div>
                <div className='each-project'>
                    School management system
                </div>
            </div>
            <div className='gap' />

            <div className='container-projects'>
                <div className='each-project'>
                    react dashboard with recharts
                </div>
                <div className='each-project'>
                    python dashboard using Dash
                </div>
                <div className='each-project'>
                    RBAC application using Angular and spring boot
                </div>
            </div>
            <div className='gap' />
            <div className='container-projects'>
                <div className='each-project'>
                    Loan predictor
                </div>
                <div className='each-project'>
                    Driver drowsiness detection
                </div>
                <div className='each-project'>
                    Unity
                </div>
            </div>

            <p className='tag-close'><mark>&lt; Projects &#47; &gt; </mark></p>
        </div>
    )
}
