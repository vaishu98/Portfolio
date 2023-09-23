import React from 'react'
import "./Sign.css"

export default function Sign() {
    return (
        <div className='main-sign'>
            <link href="https://fonts.cdnfonts.com/css/la-sonnambula" rel="stylesheet" />
            <style>
                @import url('https://fonts.cdnfonts.com/css/la-sonnambula');
            </style>
            <div className='V'>
                <vdown></vdown>
                <vdown2></vdown2>
                <vdown3></vdown3>
                <vup></vup>
                <vup2></vup2>
                <vup3></vup3>
                <c></c>
                <c3></c3>
                <c2></c2>
            </div>
            <div class="line"></div>
            <div class="line2"></div>
            <div className='at-container'>
                <div className='at-item' >VAISHNAVI</div>
                <div className='at-item' >CHILAKAMARTHI</div>
            </div>
        </div>
    )
}
