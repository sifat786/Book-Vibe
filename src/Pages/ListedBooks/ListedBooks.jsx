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
        if(filter === 'All') {
            setSort(localData);
            setSort2(localData2);
        } else if(filter === 'Fiction') {
            const filteredData = localData.filter(data => data?.category === 'Fiction');
            const filteredData2 = localData2.filter(data => data?.category === 'Fiction');
            setSort(filteredData);
            setSort2(filteredData2);
        } else if(filter === 'Fantasy') {
            const filteredData = localData.filter(data => data?.category === 'Fantasy');
            const filteredData2 = localData2.filter(data => data?.category === 'Fantasy');
            setSort(filteredData);
            setSort2(filteredData2);
        }else if(filter === 'Mystery') {
            const filteredData = localData.filter(data => data?.category === 'Mystery');
            const filteredData2 = localData2.filter(data => data?.category === 'Mystery');
            setSort(filteredData);
            setSort2(filteredData2);
        }else if(filter === 'Adult') {
            const filteredData = localData.filter(data => data?.category === 'Adult');
            const filteredData2 = localData2.filter(data => data?.category === 'Adult');
            setSort(filteredData);
            setSort2(filteredData2);
        }else if(filter === 'Thriller') {
            const filteredData = localData.filter(data => data?.category === 'Thriller');
            const filteredData2 = localData2.filter(data => data?.category === 'Thriller');
            setSort(filteredData);
            setSort2(filteredData2);
        }
    }

  return (
    <div>

        <div className='bg-neutral-900 bg-opacity-5 rounded-2xl py-9 mb-8'>
            <h5 className='text-center text-neutral-900 text-[28px] font-bold'>Books</h5>
        </div>

        {/* //! dropdown: */}
        <div className='text-right'>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1    bg-green-600 hover:bg-black duration-300 rounded-lg text-center text-white text-lg font-semibold">
                    <p>Sort By</p>
                    <FaChevronDown/>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-green-100 rounded-box w-[135px]">
                    <li onClick={() => handleFilter('All')} className='text-lg font-medium'><a>All</a></li>
                    <li onClick={() => handleFilter('Fiction')} className='text-lg font-medium'><a>Fiction</a></li>
                    <li onClick={() => handleFilter('Fantasy')} className='text-lg font-medium'><a>Fantasy</a></li>
                    <li onClick={() => handleFilter('Mystery')} className='text-lg font-medium'><a>Mystery</a></li>
                    <li onClick={() => handleFilter('Adult')} className='text-lg font-medium'><a>Adult</a></li>
                    <li onClick={() => handleFilter('Thriller')} className='text-lg font-medium'><a>Thriller</a></li>
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