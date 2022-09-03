import React from 'react';
import { Button, Container, Navbar } from "react-bootstrap";

const Header = ({ openModal }) => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Malon Blog Dashboard</Navbar.Brand>
                <Button variant='success' size="md" className="py-1" onClick={openModal}>Add Article</Button>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header;