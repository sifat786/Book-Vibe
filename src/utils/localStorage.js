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
const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('read')) || [];
    return data;
}



const saveToLocalStorage2 = data => {
    const savedData = JSON.parse(localStorage.getItem('wish')) || [];
    const existedData = savedData.find(item => item.bookId == data.bookId);

    if(!existedData) {
        savedData.push(data);
        localStorage.setItem('wish', JSON.stringify(savedData));
        toast.success('Wishlist added to (wishlist-books) successfully.');
    } else {
        toast.error('You have already stored this book on wishlist!!!');
    }
}
const getFromLocalStorage2 = () => {
    const data = JSON.parse(localStorage.getItem('wish')) || [];
    return data;
}


export { saveToLocalStorage, getFromLocalStorage , saveToLocalStorage2, getFromLocalStorage2 };