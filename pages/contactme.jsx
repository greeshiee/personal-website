import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Content from './components/content.jsx';
import CustomHeader from './components/customheader';
import CustomFooter from './components/customfooter.jsx';

const Contactme = () => {
  return (
    <Container>
       <header>
            <CustomHeader/>
       </header> 

    <Container>
       <Row>
        <Col>
            <Content Title={"Find me @"} Description={"Link 1\nLink 2\nLink 3"} />
        </Col>
        <Col>
            <Content Title={"Contact Me"} Description={"nerella.saigreeshma@gmail.com\n+1 (214) 537-9845"} />
        </Col>
       </Row>
    </Container>
    <CustomFooter/>
    </Container>
  )
}

export default Contactme
