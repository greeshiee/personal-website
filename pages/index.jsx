import Head from "next/head";
import CustomHeader from "./components/customheader.jsx";
import { Container, Row, Col, Button, Image} from "react-bootstrap";
import Content from "./components/content.jsx"
import Projects from "./components/projects.jsx"
import Profile from "./components/profile.jsx";
import {ArrowCircleDown} from "@phosphor-icons/react"
import React, {useRef} from "react";
import CustomFooter from "./components/customfooter.jsx";


export default function Home() {
  const projects = useRef(null);

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
                <Profile src={"/profile.jpg"} author={"@aube_blue"} platform={"X"} link={"https://x.com/aube_blue?lang=en"}/>
              </Col>
              <Col>
                <Content Title={"Hello, I’m Greeshma!"} Description={"I am a computer science student and a math-lover. I love turning random ideas into useful solutions."}/>
              </Col>
            </Row>
            
            <Container className="d-flex justify-content-center">
              <Button size="xl" variant="Link" onClick={() => scrollToSection(projects)}><ArrowCircleDown size={70}/></Button>
            </Container>
            
            <hr/>
            <Container className="project-cards" ref={projects}>
              <Projects imageUrl={"https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699"} Title={"Hello"} Description={"This is the project's description haha"}/>
            </Container>
            
        </Container>

      <CustomFooter/>
    </Container>
  );
}
