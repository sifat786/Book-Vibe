import { Link } from "react-router-dom";
import banner from '../../assets/images/banner.png';


const Banner = () => {
    return (
        <div className="mb-10 md:mb-[100px]">
            <div className="py-10 md:py-[80px] md:px-[120px] bg-neutral-900 bg-opacity-5 rounded-3xl">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                    <div>
                        <h1 className="w-auto md:w-[526px] text-neutral-900 text-center md:text-left text-[30px] md:text-[56px] font-bold font-play md:leading-[84px] pb-6 md:pb-12 pt-5 md:pt-0">Books to freshen up your bookshelf</h1>
                        <div className="text-center md:text-left">
                        <Link to='/listed'>
                            <button className="px-4 md:px-7 py-3 md:py-[21px] bg-[#23BE0A] rounded-lg    text-center text-white text-base md:text-xl font-medium md:font-bold">View The List</button>
                        </Link>
                        </div>
                    </div>

                    <div>
                        <img className="w-[200px] md:w-auto" src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;