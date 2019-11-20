import React from 'react';
import logo from '../images/apple.png';
import lgoo1 from '../images/ham.svg'


export function MoreHomeScreenProducts() {
    return (
        <div id='MoreHomeScreenProducts'>
            <div className='blocShaded'>
                <img className='fruity' src={logo}/>              
            </div>
            <div className='blocUnshaded'>
                <img className='fruity' src={lgoo1}/>             
            </div>
            <p></p>
        </div>
    );
}

export default MoreHomeScreenProducts;