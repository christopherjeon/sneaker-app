import React, { Component } from 'react'
import { Jumbotron, Container, Carousel } from 'react-bootstrap'
import blacktoes from '../images/blacktoes.jpg'
import guavas from '../images/guavas.jpg'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid style={jumboStyles}>
                    <Container>
                        <h1>Welcome to the Sneaker Wishlist App!</h1>
                        <p>
                            Keep track of the shoes you've been eyeing and hopefully will cop soon!
                    </p>
                    </Container>
                </Jumbotron>
                <div>
                    <Carousel className="caro">
                        <Carousel.Item interval={100}>
                            <img
                                src={guavas}
                                alt="First slide"
                                className="slide-pic"
                            />

                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={50}>
                            <img
                                src={blacktoes}
                                alt="Third slide"
                                className="slide-pic"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>


            </React.Fragment>

        )
    }

}

const jumboStyles = {
    backgroundColor: '#F4F0DB',
    textAlign: 'center',
    marginTop: '5px',
    marginBottom: '5px',
    paddingTop: '15px',
    paddingBottom: '15px'

}


export default Home
