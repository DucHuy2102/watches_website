import { Navbar, Footer } from '../components/index';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className='bg-gray-300 h-[390px]'>Content</div>
            <Footer />
        </div>
    );
};

export default HomePage;
