import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo.svg'

import { ClipboardList } from 'tabler-icons-react'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (

            <Wrapper href="https://www.linkedin.com/in/jeonchristopher/">
                <ClipboardList
                    size={42}
                    strokeWidth={1.5}
                    color={'#FFFFFF'}
                    src={logo}
                />
            </Wrapper>

        )
    }
}

export default Logo
