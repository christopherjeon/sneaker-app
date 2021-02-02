import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'
import { Button } from 'react-bootstrap'
import 'react-table/react-table.css'

class UpdateSneaker extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/sneakers/update/${this.props.id}`
    }

    render() {
        return <Button variant="primary" size="sm" onClick={this.updateUser}>Update</Button>
    }
}

class DeleteSneaker extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the sneaker ${this.props.id} permanently?`,
            )
        ) {
            api.deleteSneakerById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Button variant="danger" size="sm" onClick={this.deleteUser}>Delete</Button>
    }
}

class SneakersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sneakers: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllSneakers().then(sneakers => {
            this.setState({
                sneakers: sneakers.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { sneakers, isLoading } = this.state
        console.log('TCL: SneakersList -> render -> sneakers', sneakers)

        const columns = [
            {
                Header: () => <div style={{ fontWeight: "bolder" }}> Name</div >,
                accessor: 'name',
                filterable: true,
                width: 300
            },
            {
                Header: () => <div style={{ fontWeight: "bolder" }}> Brand</div >,
                accessor: 'brand',
                filterable: true,
            },
            {
                Header: () => <div style={{ fontWeight: "bolder" }}> Price (USD)</div >,
                accessor: 'price',
                filterable: true,
                width: 130
            },
            {
                Header: () => <div style={{ fontWeight: "bolder" }}> Size (US)</div >,
                accessor: 'size',
                filterable: true,
                width: 130
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <DeleteSneaker id={props.original._id} />
                        </span>
                    )
                },
                width: 70
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <UpdateSneaker id={props.original._id} />
                        </span>
                    )
                },
                width: 70
            },
        ]

        let showTable = true
        if (!sneakers.length) {
            showTable = false
        }

        return (
            <div>
                {showTable && (
                    <ReactTable
                        data={sneakers}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                        className="react-table"
                    />
                )}
            </div>
        )
    }
}

export default SneakersList
