import { Navbar, Footer } from '../components/index';
import { Slidebar } from '../page/index';

const HomePage = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar />

            {/* body */}
            <div className='h-96 grid grid-cols-4 bg-gray-500'>
                {/* slidebar */}
                <div className='col-span-1 bg-gray-200'>
                    <div>Slidebar</div>
                </div>

                {/* content */}
                <div className='col-span-3 bg-gray-400'>
                    <div>Content</div>
                </div>
            </div>

            {/* footer */}
            <Footer />
        </div>
    );
};

export default HomePage;
