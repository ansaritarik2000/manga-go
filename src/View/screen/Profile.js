import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Container,Row,Col } from "react-bootstrap";

export default function Profile(){
    const[user,setUser] = useState(localStorage.getItem('user'));
    const[data,setData] = useState();

    useEffect(()=>{
        async function show(){
            //console.log("show");
            let res = await axios.post("showdownload",{email:user}).catch(e=>console.log(e)); 
           // console.log(res.data);
            const{message,success,data} = res?.data
            if(success){
               
                setData(data)
            }
            else{
                alert(message)
            }

        }
        show()

    },[])

console.log(data);

    return(
        <>
       <Container>
        <Row>
            <Col className="bg-primary">
                <h1>{user}</h1>
            </Col>
        </Row>
        <Row>
            <Col>
            {data!==undefined? data.map(d=>(
                <div className="m-3 bg-success rounded">
                <Row>
                    <Col>
                    <img src={d.img} style={{width:100}} className="m-1 bg-success rounded"/ >
                    </Col>
                    <Col>
                        <h2>{d.name}</h2>
                    </Col>
                </Row>
                </div>
            ))
           
            :null

            }
            </Col>
            <Col></Col>
        </Row>
       </Container>
        </>

    )
}