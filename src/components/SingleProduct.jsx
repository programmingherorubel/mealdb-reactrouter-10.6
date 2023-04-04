import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const SingleProduct = () => {
  const data = useLoaderData()
  const {strMealThumb,strMeal,strInstructions} = data?.meals[0]
   
    return (
        <Container>
            <Row>
                <Col md={5} className='mx-auto p-5'>
                    <img src={strMealThumb} className='img-fluid'/>
                    <h3>{strMeal}</h3>
                    <p style={{color:'gray'}}>{strInstructions}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleProduct;