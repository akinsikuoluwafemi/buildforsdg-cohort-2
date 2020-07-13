import React from 'react';
import './Home.scss';
import andela from '../../assets/images/andela.png';

export default function Main() {
    return (
        <div className=" bg-hero">
            <header id="main" className="main-section">
                
                
                <div className="hero">
                    <div>
                        <div className="logo">
                            <img src={andela} alt="" /> &nbsp; &nbsp;
                            <span style={{ color: '#3A559F'}}>Facebook</span>
                            
                        </div>

                        <span>#BuildforSDG Challenge 2020</span>
                    </div>
                </div>
            </header>
        </div>
        
    )
}
