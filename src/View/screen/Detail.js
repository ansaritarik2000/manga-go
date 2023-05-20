import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container,Row,Col, Button } from "react-bootstrap";
import axios from "axios";
function Detail(){
    const nav=useNavigate();
    const loc = useLocation();
    const [pro, setPro] = useState(loc.state)
const[user,setUser]=useState(localStorage.getItem('user'))

    console.log(pro);
    console.log(user);
   async function download(data){
    if(user){
        console.log(data);
        let params = {
            ...data,
            username:user
        }
        console.log(params);

        const res = await axios.post("download",params).catch(e=>console.log(e))
        console.log(res.data);
        const{success, message} = res?.data;
        if(success){
            alert(message)
            nav('/profile')
        }
        else{
            alert(message)
        }
    }
    else{
        alert("login")
        nav("/login")

    }
//console.log(data);

    }
    return(
        <>
      <Container>
        <Row>
        <Col>
        <img src={pro.img} style={{width:'80%'}}/>
        <h3>{pro.name}</h3>
        </Col>
        <Col>
        <Button onClick={()=>download(pro)}>Download</Button>
        </Col>
        </Row>
        </Container> 
        </>
    )
}
export default Detail;