import { Row,Col,Card,ListGroup } from "react-bootstrap";
import { mangaspecs} from "../data/data";
import { useNavigate } from "react-router-dom";
function MANHWA(){
    const nav=useNavigate();
    return(
        <div className="manhwa"><h1>--------------------------------------MANHWA--------------------------------------------</h1>
        <>
        <div className="second-frame">
                    
                    <Row>
                    {
                mangaspecs.map(function (d) {
                    return (
                        <Col>
                       
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={d.img} className="motion" onClick={() => nav('/Detail', { state: { finalpage: d } })}></Card.Img>
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
        </>
        </div>
    )
}
export default MANHWA;
