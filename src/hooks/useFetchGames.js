import { useEffect } from "react";
import { useState } from "react"
import { getGames } from "../helpers/getGames";


export const useFetchGames = (game) => {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        const newGames = await getGames(game);
        setGames(newGames)
        setIsLoading(false)
    };

    useEffect(() => {
      
        getData();
    
    }, []);

    return {
        games,
        isLoading,
    }
    
}