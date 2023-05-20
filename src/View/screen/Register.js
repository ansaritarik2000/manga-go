import { Button, Form, Row, Col, Container } from "react-bootstrap";
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register(){
    const nav=useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState("");
    const [fileName, setFileName] = useState("");
     
let submitregister=async()=>{
  console.log("register");
   /*  console.log(file);
    console.log(fileName);
    
      const formdata= new FormData();
      formdata.append("file",file)
      formdata.append("filename",fileName)
      let data =JSON.stringify( Object.fromEntries(formdata));
    
    console.log(data);
    */
    let params={
      username:name,
      email:email,
      password:password,
     // image:file
    }
   /*  console.log(params);  */      /*  params =  value hold kar raha ha name,email,password */
    try {

      let res =await axios.post("register",params).catch(err=>alert(err))
      
        console.log(res.data);
       
        let {success,message} =res.data
        if(success){
          alert(message)
          nav("/login")
          
        }
        else{
          alert(message)
        }
      } catch (error) {
      console.log("error==",error);
        alert(error) 
      }
    
    setEmail("")
    setPassword("")
    setName("")
    }
    
    return(
        <>  

<Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(d) => setName(d.target.value)} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(d) => setEmail(d.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(d) => setPassword(d.target.value)} />
                        </Form.Group>

                        <Button variant="primary" onClick={submitregister}>
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Register;
