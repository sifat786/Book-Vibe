const FAQ = () => {
  return (
    <div>

        <div className='bg-neutral-900 bg-opacity-5 rounded-2xl py-6 md:py-9 mb-8'>
            <h5 className='text-center text-neutral-900 text-[28px] font-bold'>FAQ</h5>
            <div className="mt-5 md:mt-10">
                    <div className="collapse collapse-plus bg-green-100 mb-4">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium bg-sky-100">
                        1. How can I find book recommendations?
                        </div>
                        <div className="collapse-content">
                        <p>There are several ways to discover new books, including browsing bookstore shelves, asking friends or family for recommendations, joining book clubs, or exploring online book communities and platforms like Goodreads.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-green-100 mb-4">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium bg-sky-100">
                        2. What are some classic books everyone should read?
                        </div>
                        <div className="collapse-content">
                        <p>Classic books vary depending on personal preferences, but some widely acclaimed classics include <b>To Kill a Mockingbird </b>by Harper Lee, <b>1984</b> by George Orwell, <b>Pride and Prejudice</b> by Jane Austen, <b>The Great Gatsby</b> by F. Scott Fitzgerald, and <b>Moby-Dick</b> by Herman Melville, among others.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-green-100 mb-4">
                        <input type="radio" name="my-accordion-3"  />
                        <div className="collapse-title text-xl font-medium bg-sky-100">
                        3. How can I improve my reading habits?
                        </div>
                        <div className="collapse-content">
                        <p>To improve your reading habits, try setting aside dedicated time for reading each day, creating a comfortable reading environment, setting reading goals, exploring various genres, and eliminating distractions.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-green-100 mb-4">
                        <input type="radio" name="my-accordion-3"  />
                        <div className="collapse-title text-xl font-medium bg-sky-100">
                        4. Where can I buy books?
                        </div>
                        <div className="collapse-content">
                        <p>Books can be purchased from various sources, including local bookstores, online retailers like Amazon, Barnes & Noble, or independent bookshops. You can also borrow books from libraries or purchase second-hand books from thrift stores or online marketplaces.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-green-100 mb-4">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium bg-sky-100">
                        5. How do I start a book club?
                        </div>
                        <div className="collapse-content">
                        <p>Starting a book club is relatively easy. Simply gather a group of friends, family, or colleagues who share your interest in reading, choose a regular meeting schedule, select books to read together, and engage in discussions about the chosen books.</p>
                        </div>
                    </div>
            </div>
        </div>


    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
