import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
        <Grid>
          <Jumbotron>
            <h2>Welcome to CodeLife.io</h2>
            <p>This is how to build a website with React</p>
            <Link to="/about">
              <Button bsStyle="primary">About</Button>
            </Link>
          </Jumbotron>
          <Row className="show-grid text-center " >
            <Col xs={12} sm={4} className="person-wrapper" >
              <Image src="assets/person-1.jpg.jpg" circle className="profile-pic" />
              <h3>Muhammed</h3>
              <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
              </Col>
            <Col xs={12} sm={4} className="person-wrapper" >
              <Image src="assets/person-2.jpg.jpg" circle className="profile-pic" />
              <h3>Faruk</h3>
              <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
              </Col>
            <Col xs={12} sm={4} className="person-wrapper" >
              <Image src="assets/person-3.jpg.jpg" circle className="profile-pic" />
              <h3>Merve</h3>
              <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
              </Col>
              </Row>
        </Grid>
    );
  }
}
