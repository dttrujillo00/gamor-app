export const getGames = async (game) => {
    const url = `https://api.rawg.io/api/games?key=97c234f7947d413cb3d8c772c3c5e754&search=${game}`;
    const resp = await fetch(url);
    const { results } = await resp.json();

    const games = results.map( game => ({
        id: game.id,
        name: game.name,
        imageURL: game.background_image,
        platforms: game.parent_platforms.map( ({platform})  => platform.name),
    }) )

    // console.log(games[0].platforms[0].platform.name)
    // console.log(games[0])
    // console.log(games[0].platforms)
    return games;
}