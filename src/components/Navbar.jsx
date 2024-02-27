import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
    const user = true;
    return (
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
            <div className=' text-xl'>
                {user ? (
                    <Link
                        to='/login'
                        className='border border-black px-5 py-1 rounded-lg hover:bg-gray-500 hover:text-white hover:border-none hover:text-bold'
                    >
                        Login
                    </Link>
                ) : (
                    <Link
                        to='/register'
                        className='border border-black px-5 py-1 rounded-lg hover:bg-gray-500 hover:text-white hover:border-none hover:text-bold'
                    >
                        Register
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
