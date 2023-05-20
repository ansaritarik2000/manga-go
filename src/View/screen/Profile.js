import { useState } from "react"
import { Container,Row,Col } from "react-bootstrap";

export default function Profile(){
    const[user,setUser] = useState(localStorage.getItem('user'));

    return(
        <>
       <Container>
        <Row>
            <Col>
                <h1>{user}</h1>
            </Col>
        </Row>
        <Row>
            <Col>
            {
                
            }
            </Col>
        </Row>
       </Container>
        </>

    )
}