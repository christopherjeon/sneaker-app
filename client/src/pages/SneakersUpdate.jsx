import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class SneakersUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            brand: '',
            price: ''
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputBrand = async event => {
        const brand = event.target.value
        this.setState({ brand })
    }

    handleChangeInputPrice = async event => {
        const price = event.target.validity.valid
            ? event.target.value
            : this.state.price

        this.setState({ price })
    }

    handleUpdateSneaker = async () => {
        const { id, name, brand, price } = this.state
        const payload = { name, brand, price }

        await api.updateSneakerById(id, payload).then(res => {
            window.alert("Sneaker update successfully!")
            this.setState({
                name: '',
                brand: '',
                price: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const sneaker = await api.getSneakerById(id)

        this.setState({
            name: sneaker.data.data.name,
            brand: sneaker.data.data.brand,
            price: sneaker.data.data.price
        })
    }

    render() {
        const { name, brand, price } = this.state
        return (
            <Wrapper>
                <Title>Update Sneaker!</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Brand: </Label>
                <InputText
                    type="text"
                    value={brand}
                    onChange={this.handleChangeInputBrand}
                />

                <Label>Price: </Label>
                <InputText
                    type="number"
                    step="1"
                    lang="en-US"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={price}
                    onChange={this.handleChangeInputPrice}
                />

                <Button onClick={this.handleUpdateSneaker}>Update Sneaker</Button>
                <CancelButton href={'/sneakers/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default SneakersUpdate
