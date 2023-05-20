import Home from "./View/screen/Home";
import List from "./View/screen/List";
import Genres from "./View/screen/Genres";
import Account from "./View/screen/Account";
import 'bootstrap/dist/css/bootstrap.min.css';
import { mangapic,menubar } from "./View/data/data";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import { Container, Row,Col ,Navbar,Nav,NavDropdown,Form,Button} from "react-bootstrap";
import MANHWA from "./View/screen/Manhwa";
import MANHUA from "./View/screen/Manhua";
import Login from "./View/screen/Login";
import Register from "./View/screen/Register";
import { useState } from "react";
import Detail from "./View/screen/Detail";

function App() {
  const [user,setUser]=useState(localStorage.getItem('user'))
  console.log(localStorage.getItem('user'))
  function logout(){
    alert('LOGOUT')
    localStorage.setItem('user',false)
    setUser(false)
  }
  return (
    <>
      <BrowserRouter>
      <Row>
        <Col>
      <Navbar className="nav" expand="lg">
      <Container fluid>
        <div className="manga-pic">
        {
          mangapic.map(function(d){
            return(
              <img src={mangapic} className="manga-pic"
              style={{width:'30%',height:'30%',borderRadius:'50px'}}/>
            )
          })
        }
        <Navbar.Brand className="title" href="#">ANGA GO</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg- "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='/'>HOME</Nav.Link>
         

            {
              menubar.map(function(d){
                return(
                  <Nav.Link href ={`/${d}`}>{d}</Nav.Link>
                )
              })
            }
          <Nav.Link href='/Register'>REGISTER</Nav.Link>


            <NavDropdown className="genre" title="GENRES" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">ACTION</NavDropdown.Item>
              <NavDropdown.Item href="#action4">ROMANCE</NavDropdown.Item> 
              <NavDropdown.Item href="#action5"> REINCARNATION </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {
              user?<Button onClick={logout}>LOGOUT</Button>:null
          }
            <Button variant="outline-success" style={{margin:'3px',backgroundColor:'black'}}><span className="search">Search</span></Button>
            <NavDropdown style={{margin:'6px'}} title="ACCOUNT" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/login" >My Account

              
               </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Col>
    </Row>
    
            <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/List" element={<List/>}/>
          <Route path="/Genres" element={<Genres/>}/>
          <Route path="/Account" element={<Account/>}/>
          <Route path="/MANHWA" element={<MANHWA/>}/>
          <Route path="/MANHUA" element={<MANHUA/>}/>
          <Route path="/Deatil" element={<Detail/>}/>
          {user?<>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          </>:null
          }
        </Routes>
            
      </BrowserRouter>
    </>
  )
}
export default App;