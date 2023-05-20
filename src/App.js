import Home from "./View/screen/Home";
import List from "./View/screen/List";
import Genres from "./View/screen/Genres";
import Account from "./View/screen/Account";
import 'bootstrap/dist/css/bootstrap.min.css';
import { mangapic,menubar } from "./View/data/data";
import { BrowserRouter, Routes, Route,Link, useNavigate } from "react-router-dom";
import { Container, Row,Col ,Navbar,Nav,NavDropdown,Form,Button} from "react-bootstrap";
import MANHWA from "./View/screen/Manhwa";
import MANHUA from "./View/screen/Manhua";
import Login from "./View/screen/Login";
import Register from "./View/screen/Register";
import { useState } from "react";
import Detail from "./View/screen/Detail";
import Profile from "./View/screen/Profile";

function App() {
  const nav = useNavigate();
  const [user,setUser]=useState(localStorage.getItem('user'))
  console.log(localStorage.getItem('user'))



  function logout(){
    alert('LOGOUT')
    localStorage.clear()
nav("/")
    window.location.reload();
  }
  return (
    <>
    
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
           
            <Button variant="outline-success" style={{margin:'3px',backgroundColor:'black'}}><span className="search">Search</span></Button>
            <NavDropdown style={{margin:'6px'}} title="ACCOUNT" id="navbarScrollingDropdown">
             {user?<>
             
              <NavDropdown.Item href="#" >My Account
               </NavDropdown.Item>
              <NavDropdown.Item href="/profile">
                profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logout}>
                Logout
              </NavDropdown.Item>
              </>:
                <>

              <NavDropdown.Item href="/login" >Login
               </NavDropdown.Item>
              <NavDropdown.Item href="/profile">
               Register
              </NavDropdown.Item>
              </>
             }


              
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
          <Route path="/Detail" element={<Detail/>}/>
          {user? <Route path="/profile" element={<Profile/>}/>:<>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          </>
          }
        </Routes>
            
     
    </>
  )
}
export default App;