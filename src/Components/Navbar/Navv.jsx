import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/Logo.png';
import './Navv.css';

function Navv() {
  return (
    <Container fluid>
      <Row className="navbar align-items-start">
        <Col md={3}>
          <img src={Logo} alt="logo" className=" logo " />
        </Col>
        <Col md={6} lg={6}>
          <div className="search-bar-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              className="search-input form-control"
              type="text"
              placeholder="Search for your favorite groups in ATG"
            />
          </div>
        </Col>
        <Col md={3} >
          <p className="text-right">
            Create account.
            <span className="text-primary font-weight-bold nav-text">
              It’s free! &nbsp;
            </span>
            <FontAwesomeIcon icon={faCaretDown} />
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Navv;
