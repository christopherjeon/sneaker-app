import React, { Component } from 'react'
import api from '../api'
import '../style/App.css'

import styled from 'styled-components'

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    width: 10rem;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    width: 10rem;
`


class SneakersInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            brand: '',
            price: '',
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



    handleIncludeSneaker = async () => {
        const { name, brand, price } = this.state
        const payload = { name, brand, price }

        await api.insertSneaker(payload).then(res => {
            window.alert(`Sneaker inserted successfully!`)
            this.setState({
                name: '',
                brand: '',
                price: '',
            })
        })
    }

    render() {
        const { name, brand, price } = this.state
        return (
            <form className="formContainer">
                <h1>Create Sneaker</h1>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                    className="inputField"
                />

                <label>Brand:</label>
                <input
                    type="text"
                    value={brand}
                    className="inputField"
                    onChange={this.handleChangeInputBrand}
                />

                <label>Price:</label>
                <input
                    type="number"
                    lang="en-US"
                    min="0"
                    max="100000"
                    step="0.01"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={price}
                    className="inputField"
                    onChange={this.handleChangeInputPrice}
                />
                <div className="btnContainer">
                    <Button onClick={this.handleIncludeSneaker}>Add Sneaker</Button>
                    <CancelButton href={'/sneakers/list'}>Cancel</CancelButton>
                </div>

            </form>
        )
    }
}

export default SneakersInsert
