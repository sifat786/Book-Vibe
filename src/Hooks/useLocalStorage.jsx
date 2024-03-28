import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../utils/localStorage";



const useLocalStorage = () => {

    const [localData, setLocalData] = useState([]);
    const [sort, setSort] = useState([]);

    useEffect(() => {
        setLocalData(getFromLocalStorage());
        setSort(getFromLocalStorage());
    },[])

    return {localData, sort}
};

export default useLocalStorage;