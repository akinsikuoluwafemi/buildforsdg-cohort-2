import React, { Component } from 'react';
import './Navbar.scss';

export default class Navbar extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState(prevValue => {
            return {
                isOpen: !prevValue.isOpen
            }
        })
    }
    render() {
        return (
            <nav className="navbartop">
                <div className="nav-center">
                
                </div>
            </nav>
        )
    }
}
