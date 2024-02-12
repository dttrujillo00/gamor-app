export const getCategories = async () => {
    const url = `https://api.rawg.io/api/genres?key=97c234f7947d413cb3d8c772c3c5e754`;
    const resp = await fetch(url);
    const { results } = await resp.json();

    return results;
}