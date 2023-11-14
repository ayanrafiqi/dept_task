import react from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar variant="light" bg="light" expand="lg" collapseOnSelect>
        <Container>
          <Nav className="ml-auto">
            <Nav.Link>
              <input type="text" placeholder="Search admin panel"></input>
            </Nav.Link>
            <button></button>
            <button></button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
