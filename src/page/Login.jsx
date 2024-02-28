import axios from 'axios';
import { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { URL } from '../url';
import { ButtonName } from '../components/index';

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // function
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/auth/login', JSON.stringify({ email, password }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            });
            console.log('Successfully:', res.data);
            console.log(res.data.message);

            // setEmail(res.data.email);
            // setPassword(res.data.password);
            // setError(false);

            navigate('/');
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };

    return (
        <div>
            {/* <Navbar /> */}
            <div className='h-16 w-full flex items-center relative shadow-md'>
                {/* logo */}
                <div className='h-[40px] ml-36 border border-black px-5 py-1 rounded-lg flex items-center justify-center'>
                    <Link to='/' className='flex items-center'>
                        <FaHome className='text-2xl' />
                        <span className='pl-2 font-bold'>Home</span>
                    </Link>
                </div>

                {/* search */}
                <div className='w-full h-[40px] grow ml-32 mr-32'>
                    <input
                        placeholder='Search here ... '
                        type='text'
                        className='h-full w-full border border-black rounded-lg px-4 text-lg'
                    />
                </div>

                {/* login & register */}
                <ButtonName buttonName={'Register'} />
            </div>

            {/* login */}
            <div className='w-full flex justify-center items-center h-[80vh] '>
                <form
                    onSubmit={handleLogin}
                    className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'
                >
                    <h1 className='text-2xl font-bold text-left'>Log in to your account</h1>

                    {/* email */}
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-black outline-0'
                        type='text'
                        placeholder='Enter your email'
                    />

                    {/* password */}
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-black outline-0'
                        type='password'
                        placeholder='Enter your password'
                    />

                    {/* button login */}
                    <button
                        type='submit'
                        className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black '
                    >
                        Log in
                    </button>
                    {error && <h3 className='text-red-500 text-sm '>Something went wrong</h3>}
                    <div className='flex justify-center items-center space-x-3'>
                        <p>New here?</p>
                        <p className='text-gray-500 hover:text-black'>
                            <Link to='/register'>Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
