import React, { Component } from 'react'
import api from '../api'
import '../style/App.css'
import { Grid, Row, Col } from 'react-bootstrap'

import styled from 'styled-components'

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})``

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})``


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
            <form className="container">
                <h1>Create Sneaker</h1>
                <Row className="input-field">
                    <label>Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={this.handleChangeInputName}
                    />

                    <label>Brand: </label>
                    <input
                        type="text"
                        value={brand}
                        onChange={this.handleChangeInputBrand}
                    />

                    <label>Price: </label>
                    <input
                        type="number"
                        lang="en-US"
                        min="0"
                        max="100000"
                        pattern="[0-9]+([,\.][0-9]+)?"
                        value={price}
                        onChange={this.handleChangeInputPrice}
                    />


                </Row>


                <Button onClick={this.handleIncludeSneaker}>Add Sneaker</Button>
                <CancelButton href={'/sneakers/list'}>Cancel</CancelButton>
            </form>
        )
    }
}

export default SneakersInsert
