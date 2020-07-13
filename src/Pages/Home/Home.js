import React, { Component } from 'react';
import './Home.scss';
import ClickToScroll from '../../components/ClickToScroll';
import Main from './Main';
import Contact from './Prizes';
import SectionTwo from './Faq';



export default class Home extends Component {
    render() {
        return (

            <div className="bg-light">
                <div className="">
                    <ClickToScroll />
                    <Main />
                    <SectionTwo />
                    <Contact />
                </div>
                
            </div>
           




        )
    }
}
