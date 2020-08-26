import React, { Component } from 'react'
import '../style/App.css'
import Logo from './Logo'
import Links from './Links'

import { Navbar } from 'react-bootstrap'


class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Logo />
                    <Links />
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar
