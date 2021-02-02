import React, { Component } from 'react'
import api from '../api'
import { Button, Form } from 'react-bootstrap'


class SneakersUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            brand: '',
            price: '',
            size: '',
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

    handleUpdateSneaker = async () => {
        const { id, name, brand, price, size } = this.state
        const payload = { name, brand, price, size }

        await api.updateSneakerById(id, payload).then(res => {
            window.alert("Sneaker update successfully!")
            this.setState({
                name: '',
                brand: '',
                price: '',
                size: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const sneaker = await api.getSneakerById(id)

        this.setState({
            name: sneaker.data.data.name,
            brand: sneaker.data.data.brand,
            price: sneaker.data.data.price,
            size: sneaker.data.data.size
        })
    }

    render() {
        const { name, brand, price, size } = this.state
        return (
            <React.Fragment>
                <h1>Update Sneaker!</h1>

                <Form>
                    <Form.Group>
                        <Form.Label>Name: </Form.Label>
                        <Form.Control value={name} onChange={this.handleChangeInputName} />



                        <Form.Label>Brand: </Form.Label>
                        <Form.Control value={brand} onChange={this.handleChangeInputBrand} />


                        <Form.Label>Price: </Form.Label>
                        <Form.Control value={price} onChange={this.handleChangeInputPrice} />


                        <Form.Label>Size: </Form.Label>
                        <Form.Control value={size} onChange={this.handleChangeInputSize} />


                    </Form.Group>


                </Form>

                <Button variant="primary" onClick={this.handleUpdateSneaker}>Update Sneaker</Button>
                <Button variant="danger" href={'/sneakers/list'}>Cancel</Button>
            </React.Fragment>
        )
    }
}

export default SneakersUpdate
