import Books from "../Books/Books";



const CategoryList = () => {
    return (
        <div className="mb-[130px]">
            <h2 className="text-neutral-900 text-center text-[40px] font-bold font-play pb-9">Books</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Books/>
            </div>
        </div>
    );
};

export default CategoryList;