import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useLocalStorage from '../../Hooks/useLocalStorage';
import Read from '../../components/Read/Read';
// import { FaChevronDown } from "react-icons/fa6";


const ListedBooks = () => {

    const {localData} = useLocalStorage();

  return (
    <div>

        <div className='bg-neutral-900 bg-opacity-5 rounded-2xl py-9 mb-8'>
            <h5 className='text-center text-neutral-900 text-[28px] font-bold'>Books</h5>
        </div>

        {/* //! dropdown: */}
        <div className='text-right'>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1    bg-green-600 hover:bg-black duration-300 rounded-lg text-center text-white text-lg font-semibold">Sort By</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-green-100 rounded-box w-[110px]">
                    <li className='text-lg font-medium'><a>All</a></li>
                    <li className='text-lg font-medium'><a>Fiction</a></li>
                    <li className='text-lg font-medium'><a>Fantasy</a></li>
                    <li className='text-lg font-medium'><a>Mystery</a></li>
                    <li className='text-lg font-medium'><a>Adult</a></li>
                    <li className='text-lg font-medium'><a>Thriller</a></li>
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
                            localData.map((read, idx) => <Read
                                        key={idx}
                                        read={read}
                            ></Read>)
                        }
                   </div>

            </TabPanel>

            {/* //! wishlist: */}
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    </div>
  );
};


export default ListedBooks;