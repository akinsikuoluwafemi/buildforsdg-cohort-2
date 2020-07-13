import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';


export default function Faq() {
    return (
        <section id="faq-section" className="faq-section">
                <div className="card-top-container">
                    <div className="item item-1">
                        <i className="fas fa-code fa-2x"></i>
                        <span>Projects</span>     
                    
                    </div>
                    <div className="item item-2">
                        <i className="fas fa-book fa-2x"></i>
                        <span>Community Library</span>
                    </div>
                    <div className="item item-3">
                    <i className="fab fa-internet-explorer fa-2x"></i>
                        <span>Showcase Page</span>
                    </div>
                    <div className="item item-4">
                    <i className="far fa-question-circle fa-2x"></i>
                        <span>FAQ</span>
                    </div>
                    <div className="item item-5">
                    <i className="fas fa-gift fa-2x"></i>
                        <span>Prizes</span>
                    </div>
                </div>
            
                Faqs

            </section>
        
    )
}
