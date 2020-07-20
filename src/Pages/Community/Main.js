import React from 'react';
import './Community.scss';
import andela from '../../assets/images/andela.png';

export default function Main() {
    return (
        <div>
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
                <section class="py-5">
                <div class="container">
                    <h2 class="font-weight-light">Community Page</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab nulla dolorum autem nisi officiis blanditiis voluptatem hic, assumenda aspernatur facere ipsam nemo ratione cumque magnam enim fugiat reprehenderit expedita.</p>
                </div>
                </section>
            </div>  
    )
}
