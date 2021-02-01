import React, { Component } from 'react'
import '../style/App.css'
import { Nav, Navbar } from 'react-bootstrap'
import logo from '../logo.svg'
import { ClipboardList } from 'tabler-icons-react'


class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <a href="https://www.linkedin.com/in/jeonchristopher/">
                        <ClipboardList
                            size={42}
                            strokeWidth={1.5}
                            color={'#FFFFFF'}
                            src={logo}
                        />
                    </a>

                    <Navbar.Brand href="/">Snkr Portfolio App</Navbar.Brand>

                    <Nav className="mr-auto">
                        <Nav.Link href="/sneakers/list">Your List</Nav.Link>
                        <Nav.Link href="/sneakers/create">Add New Sneaker</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar
