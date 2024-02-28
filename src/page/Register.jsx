import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../url';
import { FaHome } from 'react-icons/fa';
import { ButtonName } from '../components/index';

const Register = () => {
    const [error, setError] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // function
    const handleRegister = async (e) => {
        e.preventDefault();
        // console.log('userName:', userName);
        // console.log('email:', email);
        // console.log('password:', password);
        try {
            const res = await axios.post(URL + '/api/auth/resigter', { userName, email, password });
            setUserName(res.data.userName);
            setEmail(res.data.email);
            setPassword(res.data.password);
            setError(false);
            console.log(userName, ' - ', email, ' - ', password);
            navigate('/login');
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
                <ButtonName buttonName={'Login'} />
            </div>

            {/* register */}
            <div className='w-full flex justify-center items-center h-[80vh] '>
                <form
                    onSubmit={handleRegister}
                    className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'
                >
                    <h1 className='text-2xl font-bold text-left'>Create an account</h1>

                    {/* userName */}
                    <input
                        onChange={(e) => setUserName(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-black outline-0'
                        type='text'
                        placeholder='Enter your username'
                    />

                    {/* email */}
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-black outline-0'
                        type='text'
                        placeholder='Enter your email'
                    />

                    {/* numberPhone */}
                    <input
                        onChange={(e) => setNumberPhone(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-black outline-0'
                        type='text'
                        placeholder='Enter your phone number'
                    />

                    {/* password */}
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-black outline-0'
                        type='password'
                        placeholder='Enter your password'
                    />

                    {/* button Register */}
                    <button
                        type='submit'
                        className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black '
                    >
                        Register
                    </button>
                    {error && <h3 className='text-red-500 text-sm '>Something went wrong</h3>}
                    <div className='flex justify-center items-center space-x-3'>
                        <p>Already have an account?</p>
                        <p className='text-gray-500 hover:text-black'>
                            <Link to='/login'>Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
