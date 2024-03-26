import { Link } from "react-router-dom";
import banner from '../../assets/images/banner.png';


const Banner = () => {
    return (
        <div className="mb-[100px]">
            <div className="py-[80px] px-[120px] bg-neutral-900 bg-opacity-5 rounded-3xl">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="w-[526px] text-neutral-900 text-[56px] font-bold font-play leading-[84px] pb-12">Books to freshen up your bookshelf</h1>
                        <Link to='/listed'>
                            <button className="px-7 py-[21px] bg-[#23BE0A] rounded-lg    text-center text-white text-xl font-bold">View The List</button>
                        </Link>
                    </div>

                    <div>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;