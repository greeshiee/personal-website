import React, {useRef} from "react";
import CustomHeader from './components/customheader.jsx';
import Content from './components/content.jsx';
import Profile from './components/profile.jsx';
import { ArrowCircleDown } from '@phosphor-icons/react';
import {Container, Row, Col, Button} from "react-bootstrap";
import CustomFooter from "./components/customfooter.jsx";


const Aboutme = () => {
  const interests = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
        <header>
            <CustomHeader/>
        </header>
        
        <Container>
            <Row>
                <Col>
                    <Content Title={"Heya!"} Description={"This is line one.\nThis is line two.\nThis is line three.\n"}/>
                </Col>
                <Col>
                    <Profile src={"/about.png"} author={"aube_blue"} platform={"X"} link={"https://x.com/aube_blue?lang=en"}/>
                </Col>
            </Row>

            <Container className="d-flex justify-content-center">
              <Button size="xl" variant="Link" onClick={() => scrollToSection(interests)}><ArrowCircleDown size={70}/></Button>
            </Container>

            <Row ref={interests}>
                <Col>
                    <Content Title={"Tech things I find interesting"} Description={"My name is Greeshma. I am a junior studying computer science at the University of Texas at Dallas. \n [something about my passions] \n [values]"}/>
                </Col>
                <Col>
                <Content Title={"Tech things I find interesting"} Description={"My name is Greeshma. I am a junior studying computer science at the University of Texas at Dallas. \n [something about my passions] \n [values]"}/>
                </Col>
            </Row>

        </Container>
        <CustomFooter/>
    </Container>
  )
}

export default Aboutme
