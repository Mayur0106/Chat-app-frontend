import React from "react";
import { Row,Col,Button, Container} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import "./Home.css";

function Home(){
    return (
        <Row >
            <Col md={7} className="d-flex flex-direction-column align-items-center justify-content-center element">
                <div>
                    <h1> Share the world with your friends</h1>
                    <p> Chat App lets you connect with the world </p>
                    <LinkContainer to="/chat">
                            <Button variant="success">Get Started
                                 <i className="fas fa-comments home-message-icon"></i>
                            </Button>
                    </LinkContainer>
                </div>
            </Col>
            <Col md={5} className="home__bg"></Col>
        </Row>
    );
}
export default Home;
