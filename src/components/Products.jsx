import React, { useEffect, useState } from 'react';
import Product from './Product';
import Pagination from './Pagination';

const Products = () => {
    const [input,setIpnut]=useState('fish')
    const [meals,setMeals] = useState([])
    const [currentPage,setCurrentpage] = useState(1)
    const [postPerPage,setPostPerPage]= useState(8)

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[input])

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    let currnetData =  meals.slice(firstPostIndex,lastPostIndex)
    return (
        <div className='container'>
            <div>
                <input onChange={e => setIpnut(e.target.value)} type="text" className='form-control w-50 mx-auto p-3 mt-3 mb-3' placeholder='Search Your Product' />
            </div>
            <div className='row row-cols-1 row-cols-md-4 row-cols-sm-2  g-4'>
                {
                    currnetData?.map((meal,index) => <Product meal={meal} key={index}></Product>)
                }
            </div>
            <Pagination postPerPage={postPerPage} totalPost={meals.length} setCurrentpage={setCurrentpage}/>
        </div>
    );
};

export default Products;