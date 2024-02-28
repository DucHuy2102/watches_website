import React from 'react';
import { Link } from 'react-router-dom';

const ButtonName = ({ buttonName }) => {
    return (
        <div>
            <div className='h-[40px] flex items-center text-xl mr-36'>
                <Link
                    to='/register'
                    className='px-5 py-1 border border-black rounded-lg hover:bg-gray-500 hover:text-white hover:border-none'
                >
                    {buttonName}
                </Link>
            </div>
        </div>
    );
};

export default ButtonName;
