import { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState(false);
    return (
        <div>
            {/* <Navbar /> */}
            <div className='h-14 w-full flex justify-center items-center space-x-56'>
                {/* logo */}
                <div className='border border-black px-5 py-1 rounded-lg flex items-center justify-center'>
                    <Link to='/' className='flex items-center'>
                        <FaHome className='text-2xl' />
                        <span className='pl-2 font-bold'>Home</span>
                    </Link>
                </div>

                {/* search */}
                <div className='w-96 h-10'>
                    <label htmlFor=''></label>
                    <input
                        placeholder='Search here ... '
                        type='text'
                        className='h-full w-full border border-black rounded-lg px-4 text-lg'
                    />
                </div>

                {/* login & register */}
                <div className='text-xl'>
                    <Link
                        to='/register'
                        className='border border-black px-5 py-1 rounded-lg hover:bg-gray-500 hover:text-white hover:text-bold'
                    >
                        Register
                    </Link>
                </div>
            </div>

            {/* login */}
            <div className='w-full flex justify-center items-center h-[80vh] '>
                <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
                    <h1 className='text-2xl font-bold text-left'>Log in to your account</h1>
                    <input
                        className='w-full px-4 py-2 border-2 border-black outline-0'
                        type='text'
                        placeholder='Enter your email'
                    />
                    <input
                        className='w-full px-4 py-2 border-2 border-black outline-0'
                        type='password'
                        placeholder='Enter your password'
                    />
                    <button className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black '>
                        Log in
                    </button>
                    {error && <h3 className='text-red-500 text-sm '>Something went wrong</h3>}
                    <div className='flex justify-center items-center space-x-3'>
                        <p>New here?</p>
                        <p className='text-gray-500 hover:text-black'>
                            <Link to='/register'>Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
