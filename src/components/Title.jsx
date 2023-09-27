import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Title() {
  return (
    <Container className='component-title'>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top"> 
        <Navbar.Brand href="#search">Cookbook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#search">Home</Nav.Link>
            <Nav.Link href="#new-recipe">New Recipe</Nav.Link>
            <Nav.Link href="#my-recipes">My Recipes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Title;