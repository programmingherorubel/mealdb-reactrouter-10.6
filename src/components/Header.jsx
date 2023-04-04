import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/style.css'

const Header = () => {
    return (
        <Container fluid className='header'>
            <Container>
                <Row>
                    <Col>
                        <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',padding:'20px'}}>
                            <h3 className='logo'>M<span style={{color:'red'}}>E</span>AL<span style={{color:'red'}}>  DB</span></h3>
                            <div className='menu'>
                                <ul>
                                    <li><Link className='link' style={{color:'gray'}} to='/'>Home</Link></li>
                                    <li><Link className='link' style={{color:'gray'}} to='/products'>Products</Link></li>
                                    <li><Link className='link' style={{color:'gray'}} to='/'>Login</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Header;