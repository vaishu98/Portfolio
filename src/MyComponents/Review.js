import React, { useEffect } from 'react'
import "./Reviews.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Review() {

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
            <div id="testimonials" className='reviews-title'>TESTIMONIALS</div>

            <div className='all-reviews'>
                <div className='open-quote' data-aos="fade-left"><i class="fa fa-quote-left" aria-hidden="true"></i></div>
                <div className='each-review' data-aos="fade-left">
                    Vaishnavi joined my team as an intern and then as a full-time Engineer. At both of her stints, Vaishnavi brought in exceptional commitment and technical abilities that I would rate among the top 5% of the talent pool I have worked with. She is detail-oriented, strives for excellence, and betters her deliverables constantly. As a research and innovation team working with the unit CTO leadership, we had to build innovative products that create an impact on the industry and on our customers. Vaishnavi delivered exceptional results in building our products. Her skills in backend development in Java Spring Boot and her shift left approach to packaging her code, leveraging modern DevOps tools and processes, helped us function as a lean and effective team.
                    She is amazing at turning business requirements into fully functional software features. Give her a requirement, and she gives you a Beta version of it at the most optimal time. During COVID, we had to remote work; I understand how difficult it was for an entry-level talent to work from home for over a year. Vaishnavi was proactive; I was amazed at the resilience and professionalism that she had shown during the toughest times that I had witnessed in more than a decade. She is a must-have team member, and I would pick her in my team 10 times out of 10.
                    I strongly vouch for her technical and interpersonal skills, grit, and commitment. She would be a great asset to any team.
                </div>
                <div className='close-quote' data-aos="fade-left"><i class="fa fa-quote-right" aria-hidden="true"></i></div>
                <div className='each-review2' data-aos="fade-left">
                    <strong> &nbsp; &nbsp; &nbsp; &nbsp; - Guru Charan Prasad Jonnalagadda, Head Cloud, DevOps and Enterprise Architecture, Tata Consultancy Services.</strong>
                </div>
                <div className='gap-div'></div>
                <div className='open-quote' data-aos="fade-left"><i class="fa fa-quote-left" aria-hidden="true"></i></div>

                <div className='each-review' data-aos="fade-left">
                    Vaishnavi is an excellent resource, dedicated, and someone you can always rely on. She makes sure all deadlines are reached with the highest quality.
                    At work, she displays her versatility to respond to a demanded technology by quickly molding herself and adapting to the requirements.
                    Her work always inspired and motivated her fellow coworkers.
                    She is also an excellent team player, and it was a joy to work with her.
                    I would definitely recommend and endorse her.
                </div>
                <div className='close-quote' data-aos="fade-left"><i class="fa fa-quote-right" aria-hidden="true"></i></div>
                <div className='each-review2' data-aos="fade-left">
                    <strong>&nbsp; &nbsp; &nbsp; &nbsp; - Monika Bhuvanagiri, Senior Technical Lead, Tata Consultancy Services.</strong>
                </div>
            </div>
        </>
    )
}
