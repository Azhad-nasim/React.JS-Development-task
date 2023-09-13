import React from 'react';
import './Header.css';
import HeaderBg from '../../assets/Header-bg.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="header-container">
      <img src={HeaderBg} alt="Header-Background_Image" className="HeaderBg" />
      <div className="content">
        <Container>
          <Row>
            <Col>
              <span>Computer Engineering</span>
              <span>142,765 Computer Engineers follow this</span>
            </Col>
          </Row>
        </Container>
        <FontAwesomeIcon icon={faArrowLeft} className='fs-2 left-arrow d-md-none'/>
        <Button className="join-button  d-md-none">Join Group</Button>

      </div>
      
    </div>
  );
}

export default Header;
