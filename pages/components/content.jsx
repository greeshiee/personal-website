import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./content.module.css";

const Content = ({Title, Description}) => {
  return (
    <Container>
        <Col>
              <Row className={`${styles["hello"]}`}>
                {Title}
              </Row>
              <Row className={`${styles["description"]}`}>
                {Description}
              </Row>
        </Col>
    </Container>
  )
}

export default Content
