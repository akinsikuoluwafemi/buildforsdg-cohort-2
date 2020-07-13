import React from 'react';
import '../Pages/Home/Home.scss';
import { BsDiamond } from "react-icons/bs";

import { Link } from 'react-scroll';


export default function Navbar() {
    return (
        <div className="navbar">
            <ul className="scroll">
                <Link
                    activeClass="active"
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={600}

                >
                    <BsDiamond style={{height: '0.8rem'}} />
                    
                </Link>

                 <Link
                    activeClass="active"
                    to="faq-section"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={600}

                >
                    <BsDiamond style={{ height: '0.8rem' }}/>
                    </Link>

                    <Link
                    activeClass="active"
                    to="prizes"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={600}
                
                >
                    <BsDiamond style={{ height: '0.8rem' }} />

                    </Link>

                  

            </ul>
        </div>
    )
}
