import two from '../../assets/images/two.png';


const BookDetails = () => {
    return (
        <div className='mb-[164px] mt-3'>
            <div className="flex  gap-12">

                <div className="w-1/2 bg-neutral-900 bg-opacity-5 rounded-2xl p-[74px]">
                    <img className="w-[425px] object-cover " src={two}/>
                </div>

                <div className='w-1/2'>
                    <h3 className='text-neutral-900 text-[40px] font-bold font-play'>The Catcher in the Rye</h3>
                    <p className='text-neutral-900 text-opacity-80 text-xl font-medium pt-4 pb-5 border-b border-neutral-500 border-opacity-20'>By : Awlad Hossain</p>

                    <p className='text-neutral-900 text-opacity-80 text-xl font-medium py-4 border-b border-neutral-500 border-opacity-20'>Fiction</p>
                    <p className='py-6 w-[549px] text-neutral-900 text-base font-bold'>Review : <span className='text-neutral-600 text-opacity-70 font-inter text-base leading-relaxed'>Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus.</span></p>

                    <div className='py-[28px] flex gap-3 items-center border-b border-neutral-500 border-opacity-20'>
                        <p className='text-neutral-900 text-base font-bold'>Tag : </p>
                        {/* /// ||V  map down here*/}
                        <div className='py-[7px] px-4 bg-[#23BE0A] bg-opacity-10 rounded-[30px]'>
                            <p className='text-[#23BE0A] text-base font-medium'>#Young Adult</p>
                        </div>
                        <div className='py-[7px] px-4 bg-[#23BE0A] bg-opacity-10 rounded-[30px]'>
                            <p className='text-[#23BE0A] text-base font-medium'>#Identity</p>
                        </div>
                    </div>

                    <div className='py-11 space-y-3'>
                        {/* //? 1 */}
                        <div className='flex items-center gap-[50px]'>
                            <p className='w-[144px] text-neutral-900 text-opacity-70 text-base font-normal'>Number of Pages:</p>
                            <span className='text-neutral-900 text-base font-semibold'>281</span>
                        </div>
                        {/* //? 2 */}
                        <div className='flex items-center gap-[50px]'>
                            <p className='w-[144px] text-neutral-900 text-opacity-70 text-base font-normal'>Publisher:</p>
                            <span className='text-neutral-900 text-base font-semibold'>J.B Lippincott & Co.</span>
                        </div>
                        {/* //? 3 */}
                        <div className='flex items-center gap-[50px]'>
                            <p className='w-[144px] text-neutral-900 text-opacity-70 text-base font-normal'>Year of Publishing:</p>
                            <span className='text-neutral-900 text-base font-semibold'>1960</span>
                        </div>
                        {/* //? 4 */}
                        <div className='flex items-center gap-[50px]'>
                            <p className='w-[144px] text-neutral-900 text-opacity-70 text-base font-normal'>Rating:</p>
                            <span className='text-neutral-900 text-base font-semibold'>4.8</span>
                        </div>
                    </div>

                    {/* //! btn */}
                    <div className='gap-4 flex '>
                        <button className='px-7 py-[18px] rounded-lg border border-neutral-900 border-opacity-30    text-neutral-900 text-lg font-semibold'>Read</button>
                        <button className='px-7 py-[18px] rounded-lg bg-[#50B1C9]      text-white text-lg font-semibold'>Wishlist</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;