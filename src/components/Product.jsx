import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';





const Product = ({meal}) => {
    const {strMealThumb,strMeal,strYoutube,strCategory,idMeal} = meal || {}
   

    return (
        <div className="col">
                <div className="card h-100">
                <Link style={{textDecoration:'none',color:'gray'}} to={`/product/${idMeal}`}>
                    <img src={strMealThumb} className="card-img-top" alt="..." />
                </Link>
            <div className="card-body">
                <h5 className="card-title p-2" style={{borderBottom:'1px solid rgb(230, 226, 226)'}}>{strMeal}</h5>
                <div className='p-1' style={{display:'flex',justifyContent:'space-evenly'}}>
                    <h5>{strCategory}</h5>
                    <Link target='_blank' to={strYoutube}><i style={{color:'red'}} type="button" className="fa-sharp fa-solid fa-video"></i></Link>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Product;