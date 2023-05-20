import { MANHUA1 } from "../data/data";
import { Row,Col,Card,ListGroup } from "react-bootstrap"; 
function MANHUA(){
    return(
        <div>
        <div className="manhua-headline">MANHUA</div>
        <div className="second-frame">
                    
                    <Row>
                    {
                MANHUA1.map(function (d) {
                    return (
                        <Col>
                       
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={d.img} className="motion"/>
                                <Card.Body>
                                   {/*  <Card.Title>Card Title</Card.Title> */}
                                    <Card.Text>
                                       {d.name}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Download {d.perchapter}</ListGroup.Item>
                                    <ListGroup.Item>Read now {d.gooffline}</ListGroup.Item>
                                    
                                </ListGroup>
                                
                            </Card>
                            
                        </Col>

                    )
                })
            }
        </Row>
                    
                
            </div>
            </div>
    )
}
export default MANHUA;