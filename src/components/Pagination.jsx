import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Pagination = ({postPerPage,totalPost,setCurrentpage}) => {
    const page = []
    for(let i =1; i<= Math.ceil(totalPost /postPerPage); i++){
        page.push(i)
    }
    console.log(page)
    return (
        <Container>
            <Row>
                <Col md={5} className='mx-auto'>
                <div aria-label="Page navigation example">
                        <ul class="pagination mt-5 mb-5" style={{display:'flex',justifyContent:'center'}}>
                            {
                                page.map(singlePage => <li onClick={()=>setCurrentpage(singlePage)} class="text-center page-item"> <span className='page-link' style={{cursor:'pointer'}}>{singlePage}</span> </li>)
                            }
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Pagination;