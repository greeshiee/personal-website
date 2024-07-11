import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from "./projects.module.css";

const Projects = ({ imageUrl, Title, Description}) => {
  return (
    <Container>
        <Card>
        <Row>
            <Col sm={3}>
                <Card.Img variant="top" src={imageUrl} className={`${styles["proj-image"]}`}/>
            </Col>
            <Col>
                <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text>
                    {Description}
                </Card.Text>
                </Card.Body> 
            </Col>
        </Row>
        </Card>
    </Container>
  )
}

export default Projects
