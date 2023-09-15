import React, { useEffect } from 'react'
import "./Skills.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faPython, faJava, faJs, faHtml5, faCss3, faBootstrap, faReact, faAngular, faMdb, faDocker, faMaxcdn, faGitAlt, faJira } from '@fortawesome/free-brands-svg-icons'

export default function Skills() {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <>
            <>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet" />
            </><div id="skills" className='skills-title'><p >SKILLS</p></div>
            <div className='skills-container'>
                <div className='left-skills'>
                    <div className='each-domain1'>
                        <div className='skill-domain-title' data-aos="fade-up">
                            LANGUAGES
                        </div>
                        <div className='actual-skills' data-aos="fade-left">
                            <div className='left-skill'>
                                <p className='skill'><FontAwesomeIcon className='ficon' icon={faPython} size="2xl" />Python</p>
                                <p className='skill'><FontAwesomeIcon className='ficon' icon={faJava} size="2xl" />JAVA</p>
                                <p className='skill'>C</p>
                            </div>
                            <div className='right-skill'>
                                <p className='skill'><FontAwesomeIcon className='ficon' icon={faJs} size="2xl" />JavaScript</p>
                                <p className='skill'>Typescript</p>
                                <p className='skill'>Bash</p>
                            </div>
                        </div>
                    </div>
                    <div className='each-domain1'>
                        <div className='skill-domain-title' data-aos="fade-up">
                            BACKEND
                        </div>
                        <div className='center-skill' data-aos="fade-left">
                            <p className='skill'>Spring boot</p>
                            <p className='skill'>Flask</p>
                            <p className='skill'>Django</p>
                            <p className='skill'>Microservice-Architecture</p>
                        </div>
                    </div>
                    <div className='each-domain1'>
                        <div className='skill-domain-title' data-aos="fade-up">
                            DATABASES
                        </div>
                        <div className='actual-skills' data-aos="fade-left">
                            <div className='left-skill'>
                                <p className='skill'>MySQL</p>
                                <p className='skill'>Oracle(PL/SQL)</p>
                                <p className='skill'>MongoDB</p>
                                <p className='skill'>InfluxDB</p>
                            </div>
                            <div className='right-skill'>
                                <p className='skill'>PostgreSQL</p>
                                <p className='skill'>DynamoDB</p>
                                <p className='skill'>Amazon RDS</p>
                                <p className='skill'>SQLite</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-skills'>
                    <div className='each-domain1'>
                        <div className='skill-domain-title' data-aos="fade-up">
                            FRONTEND
                        </div>
                        <div className='actual-skills' data-aos="fade-left">
                            <div className='left-skill'>
                                <p className='skill'><FontAwesomeIcon className='ficon' icon={faHtml5} size="2xl" />HTML</p>
                                <p className='skill'><FontAwesomeIcon className='ficon' icon={faCss3} size="2xl" />CSS</p>
                                <p className='skill'><FontAwesomeIcon className='ficon' icon={faBootstrap} size="2xl" />Bootstrap</p>
                            </div>
                            <div className='right-skill'>
                                <p className='skill'><FontAwesomeIcon className='ficon' icon={faReact} size="2xl" />React</p>
                                <p className='skill'><FontAwesomeIcon className='ficon' icon={faAngular} size="2xl" />Angular</p>
                                <p className='skill'><FontAwesomeIcon className='ficon' icon={faMdb} size="2xl" />Material UI</p>
                            </div>
                        </div>
                    </div>
                    <div className='each-domain1'>
                        <div className='skill-domain-title' data-aos="fade-up">
                            TOOLS
                        </div>
                        <div className='actual-skills' data-aos="fade-left">
                            <div className='left-skill'>
                                <p className='skill'><FontAwesomeIcon className='ficon' icon={faDocker} size="2xl" />Docker</p>
                                <p className='skill'>Kubernetes</p>
                                <p className='skill'>Grafana</p>
                                <p className='skill'><FontAwesomeIcon className='ficon' icon={faMaxcdn} size="2xl" />Maven</p>
                            </div>
                            <div className='right-skill'>
                                <p className='skill'>Terraform</p>
                                <p className='skill'>GraphQL</p>
                                <p className='skill'><FontAwesomeIcon className='ficon' icon={faGitAlt} size="2xl" />GIT</p>
                                <p className='skill'><FontAwesomeIcon className='ficon' icon={faJira} size="2xl" />Jira</p>
                            </div>
                        </div>
                    </div>
                    <div className='each-domain1'>
                        <div className='skill-domain-title' data-aos="fade-up">
                            AIML
                        </div>
                        <div className='center-skill' data-aos="fade-left">
                            <p className='skill'>Keras</p>
                            <p className='skill'>Tensorflow</p>
                            <p className='skill'>Pytorch</p>
                            <p className='skill'>SciPy</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
