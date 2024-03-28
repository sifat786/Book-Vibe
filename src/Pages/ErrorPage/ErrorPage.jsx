import { Link } from 'react-router-dom';
import error from '../../assets/images/error.jpg';


const ErrorPage = () => {
    return (
        <div>
            <div className='relative'>
                <img src={error} className='w-full h-screen'/>
            </div>
            <div className='text-center translate-y-14'>
                <Link to='/'>
                    <button className='py-4 px-8 rounded-lg  bg-red-600 text-white text-2xl font-semibold    absolute top-[-180px] left-[600px]'>Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;