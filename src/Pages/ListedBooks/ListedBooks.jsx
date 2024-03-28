import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Read from '../../components/Read/Read';
import { FaChevronDown } from "react-icons/fa6";
import { getFromLocalStorage, getFromLocalStorage2 } from '../../utils/localStorage';
import { useEffect, useState } from 'react';
import Wishlist from '../../components/Wishlist/Wishlist';


const ListedBooks = () => {

    const [localData, setLocalData] = useState([]);
    const [sort, setSort] = useState([]);

    const [localData2, setLocalData2] = useState([]);
    const [sort2, setSort2] = useState([]);

    useEffect(() => {
        setLocalData(getFromLocalStorage());
        setSort(getFromLocalStorage());
    },[])

    useEffect(() => {
        setLocalData2(getFromLocalStorage2());
        setSort2(getFromLocalStorage2());
    },[])

    const handleFilter = filter => {
        if(filter === 'Rating') {
            setSort(localData.sort((a, b) => b.rating - a.rating));
            setSort2(localData2.sort((a, b) => b.rating - a.rating));

        } else if(filter === 'Pages') {
            const filteredData = localData.filter(data => data?.totalPages);
            filteredData.sort((a, b) => b.totalPages - a.totalPages);
            setSort(filteredData);

            const filteredData2 = localData2.filter(data => data?.category);
            filteredData2.sort((a, b) => b.totalPages - a.totalPages);
            setSort2(filteredData2);
            
        } else if(filter === 'Year') {
            const filteredData = localData.filter(data => data?.yearOfPublishing);
            filteredData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setSort(filteredData);

            const filteredData2 = localData2.filter(data => data?.yearOfPublishing);
            filteredData2.sort((a, b) => b.totalPages - a.totalPages);
            setSort2(filteredData2);
        }
    }

  return (
    <div>

        <div className='bg-neutral-900 bg-opacity-5 rounded-2xl py-9 mb-8'>
            <h5 className='text-center text-neutral-900 text-[28px] font-bold'>Books</h5>
        </div>

        {/* //! dropdown: */}
        <div className='text-center my-6 md:my-0 md:text-right'>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1    bg-green-600 hover:bg-black duration-300 rounded-lg text-center text-white text-lg font-semibold">
                    <p>Sort By</p>
                    <FaChevronDown/>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-green-100 rounded-box w-[200px]">
                    <li onClick={() => handleFilter('Rating',)} className='text-lg font-medium'><a>Rating</a></li>
                    <li onClick={() => handleFilter('Pages')} className='text-lg font-medium'><a>Number of Pages</a></li>
                    <li onClick={() => handleFilter('Year')} className='text-lg font-medium'><a>Publisher Year</a></li>
                </ul>
            </div>
        </div>

        {/* //! react-tab: */}
        <Tabs>
            <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
            </TabList>

            {/* //! read books: */}
            <TabPanel>
                
                   <div className='my-12'>
                        {
                            sort?.map((read, idx) => <Read
                                        key={idx}
                                        read={read}
                            ></Read>)
                        }
                   </div>

            </TabPanel>

            {/* //! wishlist: */}
            <TabPanel>
                
                
                    <div className='my-12'>
                        {
                            sort2?.map((wish, idx) => <Wishlist
                                    key={idx}
                                    wish={wish}
                            ></Wishlist>)
                        }
                    </div>

            </TabPanel>
        </Tabs>
    </div>
  );
};


export default ListedBooks;