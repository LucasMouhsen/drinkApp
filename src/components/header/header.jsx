import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useModal from "../../hooks/useModal"

export default function Header() {
    const { toogleModal } = useModal()
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Drink App</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav className="me-auto">
                            <Nav.Link href="/register">Registro</Nav.Link>
                            <Nav.Link href="/login">Iniciar sesión</Nav.Link>
                            <FontAwesomeIcon icon={faCartShopping} onClick={toogleModal} />
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}