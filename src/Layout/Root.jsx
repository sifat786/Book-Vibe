
import { Outlet } from 'react-router-dom';
import Navbar from './../components/Navbar/Navbar';

const Root = () => {
    return (
        <div className='container'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;