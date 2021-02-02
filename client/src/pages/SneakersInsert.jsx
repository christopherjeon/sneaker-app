import React, { Component } from 'react'
import api from '../api'
import { Button } from 'react-bootstrap'
import '../style/App.css'

class SneakersInsert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            brand: '',
            price: '',
            size: ''
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

    handleChangeInputSize = async event => {
        const size = event.target.validity.valid
            ? event.target.value
            : this.state.size

        this.setState({ size })
    }



    handleIncludeSneaker = async () => {
        const { name, brand, price, size } = this.state
        const payload = { name, brand, price, size }

        await api.insertSneaker(payload).then(res => {
            window.alert(`Sneaker inserted successfully!`)
            this.setState({
                name: '',
                brand: '',
                price: '',
                size: '',
            })
        })
    }

    render() {
        const { name, brand, price, size } = this.state
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

                <label>Size:</label>
                <input
                    type="number"
                    lang="en-US"
                    min="0"
                    max="100000"
                    step="0.01"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={size}
                    className="inputField"
                    onChange={this.handleChangeInputSize}
                />
                <div className="btnContainer">
                    <Button variant="primary" onClick={this.handleIncludeSneaker}>Add Sneaker</Button>
                    <Button variant="danger" href={'/sneakers/list'}>Cancel</Button>
                </div>

            </form>
        )
    }
}

export default SneakersInsert
