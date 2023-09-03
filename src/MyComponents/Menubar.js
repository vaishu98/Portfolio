import React from 'react';
import './Menubar.css';
import Resume_Vaishnavi_ChilakamarthiPdf from '../Assets/Resume_Vaishnavi_Chilakamarthi.pdf';
import sign from "../Assets/sign.png"
function MenuBar() {
    return (
        <><link href='https://fonts.googleapis.com/css?family=La Belle Aurore' rel='stylesheet'></link><div className="topnav" id="myTopnav">
            <div>
                <img className='img' src={sign} />
                <a href="#home" className="active">&lt; About &#47; &gt; </a>
                <a href="#news">&lt; Projects &#47; &gt; </a>
                <a href="#contact">&lt; Skills &#47; &gt; </a>
                <a href="#experience">&lt; Experience &#47; &gt; </a>
                <a href="#contact">&lt; Contact &#47; &gt; </a>
            </div>

            <div className='nohover'>
                <a href={Resume_Vaishnavi_ChilakamarthiPdf} download="Resume_Vaishnavi_Chilakamarthi.pdf" target='_blank'>
                    <button className='button'>&lt; Resume PDF&#47; &gt; </button>
                </a>
            </div>
        </div></>
    );
}


export default MenuBar;
