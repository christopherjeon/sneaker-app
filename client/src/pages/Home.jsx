import React, { Component } from 'react'
import { Jumbotron, Carousel } from 'react-bootstrap'
import blacktoes from '../images/blacktoes.jpg'
import guavas from '../images/guavas.jpg'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid bsPrefix="testtest">
                    <h1>Welcome to the Snkr Portfolio App!</h1>
                    <p>
                        Grow your collection!
                    </p>
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


export default Home
