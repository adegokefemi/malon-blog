import React from "react";
import "./Hero.scss";
import { Container } from "react-bootstrap";

const Hero = () => {
    return (
        <Container fluid className="Hero d-flex flex-column justify-content-center">
            <Container className="px-3">
                <h1 className="pb-3"> Welcome to our Blog</h1>
                <p>Home of quality information...</p>
            </Container>
        </Container>
    )
}

export default Hero;