import { useEffect } from "react";
import { useState } from "react"
import { getGames } from "../helpers/getGames";


export const useFetchGames = (game) => {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getDataGames = async () => {
        const newGames = await getGames(game);
        setGames(newGames)
        setIsLoading(false)
    };

    useEffect(() => {
      
        setIsLoading(true)
        getDataGames();
    
    }, [game]);

    return {
        games,
        isLoading,
    }
    
}