import React, { useState, useEffect } from 'react';
import Sign from "../Assets/sign.png";
import Resume_Vaishnavi_ChilakamarthiPdf from '../Assets/Resume_Vaishnavi_Chilakamarthi.pdf';
import './Navbar.css';

function Navbar() {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };
    const [activeMenuItem, setActiveMenuItem] = useState('about');

    const smoothScrollTo = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
            setTimeout(() => {
                setActiveMenuItem(targetId);
            }, 100);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'skills', 'education', 'experience', 'projects', 'socials', 'testimonials', 'contact'];
            let activeSection = 'about';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.getBoundingClientRect().top <= 0) {
                    activeSection = section;
                }
            }

            setActiveMenuItem(activeSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet" />

            <nav>
                <a><img src={Sign}></img></a>

                <div>
                    <ul id='navbar' className={clicked ? "#navbar active" : "navbar"}>
                        <li><a
                            href="#about"
                            className={activeMenuItem === 'about' ? 'active' : ''}
                            onClick={() => smoothScrollTo('about')}
                        >
                            ABOUT
                        </a></li>
                        <li><a
                            href="#skills"
                            className={activeMenuItem === 'skills' ? 'active' : ''}
                            onClick={() => smoothScrollTo('skills')}
                        >
                            SKILLS
                        </a></li>
                        <li><a
                            href="#education"
                            className={activeMenuItem === 'education' ? 'active' : ''}
                            onClick={() => smoothScrollTo('education')}
                        >
                            EDUCATION
                        </a></li>
                        <li><a
                            href="#experience"
                            className={activeMenuItem === 'experience' ? 'active' : ''}
                            onClick={() => smoothScrollTo('experience')}
                        >
                            EXPERIENCE
                        </a></li>
                        <li><a
                            href="#projects"
                            className={activeMenuItem === 'projects' ? 'active' : ''}
                            onClick={() => smoothScrollTo('projects')}
                        >
                            PROJECTS
                        </a></li>
                        <li><a
                            href="#socials"
                            className={activeMenuItem === 'socials' ? 'active' : ''}
                            onClick={() => smoothScrollTo('socials')}
                        >
                            SOCIALS
                        </a></li >
                        <li><a
                            href="#testimonials"
                            className={activeMenuItem === 'testimonials' ? 'active' : ''}
                            onClick={() => smoothScrollTo('testimonials')}
                        >
                            TESTIMONIALS
                        </a></li >
                        <li><a
                            href="#contact"
                            className={activeMenuItem === 'contact' ? 'active' : ''}
                            onClick={() => smoothScrollTo('contact')}
                        >
                            CONTACT
                        </a></li >
                        <li><a href={Resume_Vaishnavi_ChilakamarthiPdf} download="Resume_Vaishnavi_Chilakamarthi.pdf" target='_blank'>
                            <button className='button'>
                                RESUME                          <i className="fa fa-download"></i>
                            </button>
                        </a></li>
                    </ul>
                </div>

                <div id='mobile'>
                    <i className={clicked ? 'fas fa-times fa-xl' : 'fas fa-bars fa-xl'}
                        onClick={handleClick}></i>
                </div>
            </nav >
        </>
    )
}

export default Navbar;