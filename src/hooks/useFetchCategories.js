import { useEffect } from "react";
import { useState } from "react"
import { getCategories } from "../helpers/getCategories";


export const useFetchCategories = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        const newCategories = await getCategories();
        setCategories(newCategories)
        setIsLoading(false)
    };

    useEffect(() => {
        
        getData();
    
    }, []);

    return {
        categories,
        isLoading,
    }
    
}