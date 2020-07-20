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
                <div class="container titlepage">
                    <h2 class="font-weight-light">Community Page</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab nulla dolorum autem nisi officiis blanditiis voluptatem hic, assumenda aspernatur facere ipsam nemo ratione cumque magnam enim fugiat reprehenderit expedita.</p>
                </div>
                </section>


                <section class="showcase">
    <div class="container-fluid p-0">
      <div class="row no-gutters">

        <div class="col-lg-6 order-lg-2 text-white showcase-img bg-sec">
        </div>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Fully Responsive Design</h2>
          <p class="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 text-white showcase-img bg-sec1"></div>
        <div class="col-lg-6 my-auto showcase-text">
          <h2>Updated For Bootstrap 4</h2>
          <p class="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 order-lg-2 text-white showcase-img bg-sec2"></div>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Easy to Use &amp; Customize</h2>
          <p class="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
        </div>
      </div>
    </div>
  </section>
            </div>  
    )
}
