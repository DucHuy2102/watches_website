import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
    const user = true;
    return (
        <div className='h-16 w-full flex items-center relative shadow-md'>
            {/* logo */}
            <div className='h-[40px] border border-black px-5 rounded-lg flex items-center justify-center ml-36'>
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
            <div className='h-[40px] flex items-center text-xl mr-36'>
                {user ? (
                    <Link
                        to='/login'
                        className='px-5 py-1 border border-black rounded-lg hover:bg-gray-500 hover:text-white hover:border-none'
                    >
                        Login
                    </Link>
                ) : (
                    <Link
                        to='/register'
                        className='px-5 py-1 border border-black rounded-lg hover:bg-gray-500 hover:text-white hover:border-none'
                    >
                        Register
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
