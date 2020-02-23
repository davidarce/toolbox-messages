import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import './home.css';

class Home extends Component {

  render() {
    return (
      <Container className="d-flex flex-column align-items-center justify-content-center">
          <h1>toolbox</h1>
          <Link to={'./messages'} className="d-flex justify-content-center primary-button">
             Send Messages
          </Link>
      </Container>
    );
  }
}

export default Home;