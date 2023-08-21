import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pdsLogo from '../../assets/pdslogo.svg';
import SearchBar from '../SearchBar';

function Header () {
    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={pdsLogo} style={{width: '35.95px', height: '32px'}} alt="Logo" />
                    </Navbar.Brand>
                    <SearchBar></SearchBar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Matérias</Nav.Link>
                            <Nav.Link href="#features">Seja um Curador</Nav.Link>
                            <Nav.Link href="#pricing">Entrar</Nav.Link>
                            <Nav.Link href="#pricing">Registre-se</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header