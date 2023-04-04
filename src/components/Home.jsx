import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';





const Home = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Header/>
            <Outlet></Outlet>
        </>
    );
};

export default Home;