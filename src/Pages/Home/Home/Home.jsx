import React from 'react';
import LeftNav from '../../Shared/LeftNav';
import Banner from '../../Banner/Banner';

const Home = () => {
    return (
        <div className="grid grid-cols-5 gap-4">
            <div className=" bg-red-500" ><LeftNav></LeftNav></div>
            <div className=" col-span-4 "><Banner></Banner></div>
        </div>
    );
};

export default Home;