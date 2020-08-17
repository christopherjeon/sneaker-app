import React, { Component } from 'react'
import styled from 'styled-components'
import '../style/App.css'
import Logo from './Logo'
import Links from './Links'


const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`

class NavBar extends Component {
    render() {
        return (
            <div>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </div>
        )
    }
}

export default NavBar
