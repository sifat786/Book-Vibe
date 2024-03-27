import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ListedBooks = () => {
  return (
    <div>

        <div className='bg-neutral-900 bg-opacity-5 rounded-2xl py-9 mb-8'>
            <h5 className='text-center text-neutral-900 text-[28px] font-bold'>Books</h5>
        </div>

        {/* //! dropdown: */}
        <div className='text-right'>
            <details className="dropdown">
                <summary className="m-1 px-5 py-3.5 bg-green-600 rounded-lg   text-center text-white text-lg font-semibold">Sort By</summary>
                <ul className="p-2 shadow-lg menu dropdown-content z-[-1]  rounded-box w-[132px]">
                    <li className='text-lg font-semibold'><a>All</a></li>
                    <li className='text-lg font-semibold'><a>Fiction</a></li>
                    <li className='text-lg font-semibold'><a>Fantasy</a></li>
                    <li className='text-lg font-semibold'><a>Mystery</a></li>
                    <li className='text-lg font-semibold'><a>Adult</a></li>
                    <li className='text-lg font-semibold'><a>Thriller</a></li>
                </ul>
            </details>
        </div>

        {/* //! react-tab: */}
        <Tabs>
            <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
            </TabList>

            {/* //! read books: */}
            <TabPanel>
                <h2>Any content 1</h2>
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