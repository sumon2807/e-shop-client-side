import React from 'react';
import LeftNav from '../../../../src/Component/LeftNavbar/LeftNav';
import Banner from '../../../../src/Component/Banner/Banner';
import Container from '../../Shared/Container/Container';

const Home = () => {
    return (
        <Container>
            <div className="grid grid-cols-5 gap-4">
                <div className=" bg-red-500" ><LeftNav></LeftNav></div>
                <div className=" col-span-4 "><Banner></Banner></div>
            </div>
        </Container>
    );
};

export default Home;