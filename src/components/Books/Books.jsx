import one from '../../assets/images/one.png';
import { FaRegStar } from "react-icons/fa6";


const Books = () => {
    return (
        <div>
            <div className="p-6 rounded-2xl border border-neutral-900 border-opacity-20">
                <div className="py-8 px-[96px] bg-zinc-100 rounded-2xl mb-6">
                    <img src={one} />
                </div>

                <div className='flex gap-3 mb-4'>
                    <div className='px-4 py-[7px] bg-green-600 bg-opacity-10 rounded-[30px]     text-center text-[#23BE0A] text-base font-medium'>
                    Young Adult
                    </div>
                    <div className='px-4 py-[7px] bg-green-600 bg-opacity-10 rounded-[30px]     text-center text-[#23BE0A] text-base font-medium'>
                    Identity
                    </div>
                </div>

                <div>
                    <h3 className='text-neutral-900 text-2xl font-bold font-play'>The Catcher in the Rye</h3>
                    <p className='text-neutral-900 text-opacity-80 text-base font-medium pt-4 pb-5 border-b border-dashed border-neutral-500 border-opacity-20'>By : Awlad Hossain</p>
                </div>

                <div className='pt-5 flex items-center justify-between'>
                    <p className='text-neutral-900 text-opacity-80 text-base font-medium'>Fiction</p>
                    <div className='flex items-center gap-2'>
                        <span className='text-neutral-900 text-opacity-80 text-base font-medium'>5.00</span>
                        <FaRegStar className='text-2xl text-neutral-900'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;