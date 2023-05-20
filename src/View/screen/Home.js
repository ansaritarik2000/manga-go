import { Container, Row, Col, Carousel, Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import { lookism, slider, mangaspecs } from '../data/data';
import '../style/style.css'
import { useNavigate } from "react-router-dom";
function Home() {
    console.log(slider)
    const nav=useNavigate();
    return (
        <>
            <div className="slider">
                <div className="sub-slider">

                    <Carousel fade>
                        {
                            slider.map(function (d) {
                                return (
                                    <Carousel.Item interval={700}>
                                        <img
                                            style={{ position: 'relative', width: '100%', height: '700px', top: '14px' }}
                                            src={d}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>MANGA GO</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </div>
                </div>
                <div className="top-picks">
                        <p>TOP PICKS</p>
                </div>

                <div className="second-frame">
                  
                        <Row>
                        {
                    mangaspecs.map(function (d) {
                        return (
                            <Col>
                           
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={d.img} className='img-motion' onClick={() => nav('/Detail', { state: { finalpage: d } })}/>
                                    <Card.Body>
                                       {/*  <Card.Title>Card Title</Card.Title> */}
                                        <Card.Text>
                                           {d.name}
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item onClick={{}} className='img-motion'> Download {d.Download}</ListGroup.Item>
                                        <ListGroup.Item className='img-motion'>Read now {d.Readnow}</ListGroup.Item>
                                        
                                    </ListGroup>
                                    
                                </Card>
                                
                            </Col>

                        )
                    })
                }
            </Row>
            <div className='Showmore'>
                
            </div>
        
                        
                    
                </div>
        </>
               
    )
}
export default Home;
