import { toast } from "react-toastify";

const saveToLocalStorage = data => {
    const savedData = JSON.parse(localStorage.getItem('read')) || [];
    const existedData = savedData.find(item => item.bookId == data.bookId);

    if(!existedData) {
        savedData.push(data);
        localStorage.setItem('read', JSON.stringify(savedData));
        toast.success('Book added to (read-books) successfully.');
    } else {
        toast.error('You have already stored this book!!!');
    }
}

export { saveToLocalStorage };