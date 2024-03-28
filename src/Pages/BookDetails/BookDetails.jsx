import { useParams } from 'react-router-dom';
import useBooksData from '../../Hooks/useBooksData';
import { useEffect, useState } from 'react';
import { saveToLocalStorage, saveToLocalStorage2 } from '../../utils/localStorage';


const BookDetails = () => {

    const [singleData, setSingleData] = useState([]);
    const {bookId} = useParams();
    const {data} = useBooksData();

    useEffect(() => {
        if(data) {
            const resource = data.find((item) => item.bookId == bookId);
            setSingleData(resource);
        }
    }, [bookId, data])

    const handleRead = () => {
        saveToLocalStorage(singleData);
    }

    const handleWish = () => {
        saveToLocalStorage2(singleData);
    }

    const {  image, bookName, author, category, rating, review, totalPages, publisher, yearOfPublishing, tags } = singleData || {};
    
    return (
        <div className='mb-[50px] md:mb-[100px] mt-3'>
            <div className="md:flex  gap-12">

                <div className="md:w-1/2 bg-neutral-900 bg-opacity-5 rounded-2xl p-[74px] pt-[100px]">
                    <img className="w-full object-cover " src={image}/>
                </div>

                <div className='md:w-1/2 text-center md:text-left mt-5 md:mt-0'>
                    <h3 className='text-neutral-900 text-[40px] font-bold font-play'>{bookName}</h3>
                    <p className='text-neutral-900 text-opacity-80 text-xl font-medium pt-4 pb-5 border-b border-neutral-500 border-opacity-20'>By : {author}</p>

                    <p className='text-neutral-900 text-opacity-80 text-xl font-medium py-4 border-b border-neutral-500 border-opacity-20'>{category}</p>
                    <p className='py-6 md:w-[549px] text-neutral-900 text-base font-bold'>Review : <span className='text-neutral-600 text-opacity-70 font-inter text-base leading-relaxed'>{review}</span></p>

                    <div className='py-[28px] flex gap-3 items-center justify-center md:justify-start border-b border-neutral-500 border-opacity-20'>
                        <p className='text-neutral-900 text-base font-bold'>Tags: </p>
                        {
                            tags?.map((tag, idx) => {
                                return (
                                    <div key={idx} className='py-[7px] px-4 bg-[#23BE0A] bg-opacity-10 rounded-[30px]'>
                                        <span className='text-[#23BE0A] text-base font-medium'>{tag}</span>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='py-12 space-y-3 '>
                        {/* //? 1 */}
                        <div className='flex items-center gap-[50px] justify-center md:justify-start'>
                            <p className='w-[144px] text-neutral-900 text-opacity-70 text-base font-normal'>Number of Pages:</p>
                            <span className='text-neutral-900 text-base font-semibold'>{totalPages}</span>
                        </div>
                        {/* //? 2 */}
                        <div className='flex items-center gap-4 md:gap-[50px] justify-center md:justify-start'>
                            <p className='md:w-[144px] text-neutral-900 text-opacity-70 text-base font-normal'>Publisher:</p>
                            <span className='text-neutral-900 text-base font-semibold'>{publisher}</span>
                        </div>
                        {/* //? 3 */}
                        <div className='flex items-center gap-[50px] justify-center md:justify-start'>
                            <p className='w-[144px] text-neutral-900 text-opacity-70 text-base font-normal'>Year of Publishing:</p>
                            <span className='text-neutral-900 text-base font-semibold'>{yearOfPublishing}</span>
                        </div>
                        {/* //? 4 */}
                        <div className='flex items-center gap-[50px] justify-center md:justify-start'>
                            <p className='w-[144px] text-neutral-900 text-opacity-70 text-base font-normal'>Rating:</p>
                            <span className='text-neutral-900 text-base font-semibold'>{rating}</span>
                        </div>
                    </div>

                    {/* //! btn */}
                    <div className='gap-4 flex justify-center md:justify-start'>
                        <button onClick={handleRead} className='px-7 py-[18px] rounded-lg border border-neutral-900 border-opacity-30    text-neutral-900 text-lg font-semibold'>Read</button>
                        <button onClick={handleWish} className='px-7 py-[18px] rounded-lg bg-[#50B1C9]      text-white text-lg font-semibold'>Wishlist</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;