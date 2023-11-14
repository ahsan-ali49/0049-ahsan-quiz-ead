import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  const myStyles = {
    backgroundColor: "#1F1D2B",
    color: "white",
  };
  return (
    <Navbar
      style={myStyles}
      collapseOnSelect
      expand="lg"
      className="text-light"
    >
      <Container className="text-light">
        <Navbar.Brand className="text-light" href="#home">
          FASTECH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" text-light ms-auto me-auto">
            <Nav.Link className="text-light" href="#features">
              HOME
            </Nav.Link>
            <Nav.Link className="text-light" href="#pricing">
              MY PROFILE
            </Nav.Link>
            <Nav.Link className="text-light" href="#pricing">
              ACTIVITY
            </Nav.Link>
            <Nav.Link className="text-light" href="#pricing">
              HOW IT WORKS
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <Button className="bg-transparent text-white outline-white">
                CREATE
              </Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button className="bg-transparent text-white">SIGN IN</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
