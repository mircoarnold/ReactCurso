import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarWidgetComponent from "../CartWidget/CartWidgetComponent"

import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

const NavBarComponent = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
    .get('https://dummyjson.com/products/categories')
    .then((res) => setCategories(res.data))
    .catch((error) => console.log(error));
  }, []);

  return (
    <Navbar bg="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Link style={{ textDecoration: "none", color: "tomato"}} to={'/'}>Mirco Arnold WebShop</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Mas Info" id="basic-nav-dropdown">
                {categories.map((category, index) => {
                  return(
                    <NavDropdown.Item key={index} > 
                    <Link to={`/category/${category}`} style={{ textDecoration: "none", color: "tomato"}}>{category}</Link></NavDropdown.Item>
                  );
                })}
            </NavDropdown>
          </Nav>
          <CarWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;