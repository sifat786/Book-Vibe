/* eslint-disable no-unused-vars */
import { useState } from "react";
import useBooksData from "../../Hooks/useBooksData";
import Books from "../Books/Books";


const CategoryList = () => {

    const {data, loading} = useBooksData();
    const [dataLength, setDataLength] = useState(3);

    return (
        <div className="mb-[130px]">
            <h2 className="text-neutral-900 text-center text-[40px] font-bold font-play pb-9">Books</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    data.slice(0, dataLength).map((book, idx) => <Books 
                            key={idx}
                            book={book}
                    ></Books>)
                }
            </div>

            <div className={`text-center mt-[50px] ${dataLength === data.length ? 'hidden' : ''}`}>
                <button onClick={() =>  setDataLength(data.length)} className="px-7 py-4 bg-[#23BE0A] rounded-lg       text-white text-xl font-bold">View All</button>
            </div>
            
        </div>
    );
};

export default CategoryList;