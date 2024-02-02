import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[2520px] max-auto xl:px-10 md:px-5 sm:px-2 px-0'>
            {children}
        </div>
    );
};

export default Container;