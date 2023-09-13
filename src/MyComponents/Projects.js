import React from 'react'
import "./Projects.css"

export default function Projects() {
    return (
        <>
            <>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet" />
            </><div id="projects" className='pro-title'>PROJECTS</div>

            <div className='allp'>
                <div className='row-pro'>
                    <div className='each-pro'>
                        <div className='each-pro-title'>
                            NEUREDA
                        </div>
                        <div className='proj-content'>
                            Developed a specialized platform catering to semiconductor chip manufacturers in the Electronic Design Automation (EDA) market. This innovative solution empowers manufacturers to seamlessly predict potential bottlenecks and efficiently burst High-Performance Computing (HPC) jobs onto the cloud infrastructure when on-premises resources are insufficient, ensuring uninterrupted chip testing processes.
                            <p className='tech'>Tech: Springboot, Angular, Terraform, MongoDB, InfluxDB</p>
                        </div>
                    </div>
                    <div className='each-pro'>
                        <div className='each-pro-title'>
                            DIGI-SCHOOLS
                        </div>
                        <div className='proj-content'>
                            Crafted a robust school management system, delivering a 70% enhancement in operational efficiency by optimizing functions and bolstering overall management. The system boasts comprehensive features, including class management, course catalog, admission, application, timetable, and attendance management, facilitating seamless school administration.
                            <p className='tech'>Tech: Springboot, Angular, MySQL</p>
                        </div>
                    </div>
                    <div className='each-pro'>
                        <div className='each-pro-title'>
                            FOODRATOR
                        </div>
                        <div className='proj-content'>
                            Designed Foodrator, a dynamic web application processing over a million product combinations and assessing more than 1000 flavors, yielding in-depth ratings and trend-based scoring for various flavors. Additionally, created a tool for crafting custom flavors and predicting their market performance. Achieved a substantial 20% reduction in bounce rate by enhancing the UI design.
                            <p className='tech'>Tech: Django, React</p>
                        </div>
                    </div>
                </div>
                <div className='row-pro'>
                    <div className='each-pro'>
                        <div className='each-pro-title'>
                            STOCK PRICE DASHBOARD
                        </div>
                        <div className='proj-content'>
                            Created an interactive Python-Dash dashboard application that displays real-time stock prices, empowering users with the ability to select specific date and time ranges for each graph. This customization allows for in-depth data analysis and exploration, enhancing the user experience and decision-making process in stock trading.
                            <p className='tech'>Tech: Flask, Dash, PostgreSQL, Docker</p>
                            <p className='tech'><a href='https://github.com/vaishu98/Flask-application-using-Dash-and-PostgreSQL'>View Code</a></p>
                        </div>
                    </div>
                    <div className='each-pro'>
                        <div className='each-pro-title'>
                            SAMPLING ALGORITHM DESIGN
                        </div>
                        <div className='proj-content'>
                            Developed an innovative algorithm for dataset sampling, ensuring that the sample accurately represents the entire population dataset which can further be seamlessly integrated with incoming real-time data, enabling continuous model updates to maintain relevance. This approach demonstrated a remarkable 20% increase in model accuracy compared to traditional random sampling methods.
                            <p className='tech'>Tech: Python, Tensorflow, Keras, Statistics</p>
                        </div>
                    </div>
                    <div className='each-pro'>
                        <div className='each-pro-title'>
                            LOAN PREDICTOR
                        </div>
                        <div className='proj-content'>
                            Designed and implemented a Loan Predictor application that harnesses application details to accurately predict loan application outcomes with an exceptional 99.7% accuracy rate, enabling banks to automate initial application screening and significantly reduce manual efforts, resulting in improved efficiency and faster processing of loan applications.
                            <p className='tech'>Tech: Flask, Scikit-learn, Matplotlib, Seaborn</p>
                        </div>
                    </div>
                </div>
                <div className='row-pro'>
                    <div className='each-pro'>
                        <div className='each-pro-title'>
                            DRIVER DROWSINESS DETECTION
                        </div>
                        <div className='proj-content'>
                            Developed a Convolutional Neural Network with an impressive accuracy rate of 99.7% to monitor the aspect ratio of a driver's eyes using a camera feed. This innovative system plays an alarm if the driver is classified as sleepy, effectively mitigating the risk of road accidents caused by driver fatigue. The solution contributes to a substantial 20% reduction in such accidents, significantly enhancing road safety.
                            <p className='tech'>Tech: Python, Flask, OpenCV, Keras</p>
                        </div>
                    </div>
                    <div className='each-pro'>
                        <div className='each-pro-title'>
                            RECHARTS DASHBOARD
                        </div>
                        <div className='proj-content'>
                            Contributed to the development of a React dashboard template enriched with Recharts, featuring a diverse array of chart types including bar, line, histograms, pie charts, and more. The template has captivating animations and interactive hover effects, resulting in an aesthetic design that can be leveraged across various web applications.
                            <p className='tech'>Tech: Flask, Dash, PostgreSQL, Docker</p>
                            <p className='tech'><a href='https://github.com/vaishu98/React-Dashboard-Using-Recharts'>View Code</a> <a href='https://vaishu98.github.io/React-Dashboard-Using-Recharts/'>Demo</a></p>
                        </div>
                    </div>
                    <div className='each-pro'>
                        <div className='each-pro-title'>
                            UNITY FPC
                        </div>
                        <div className='proj-content'>Contributed to a Unity project featuring a first-person character controller for seamless scene transitions using voice commands, leveraging the Hugging Face API for keyword extraction.
                            <p className='tech'>Tech: C#, Unity Asset Store</p>
                            <p className='tech'><a href='https://github.com/vaishu98/Unity-First-Person-Character-with-Voice-Scene-Switching'>View Code</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
