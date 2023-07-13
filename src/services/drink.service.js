import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const getRecipeService = async (drinkId) => {
    try {
        const url = `${apiUrl}lookup.php?i=${drinkId}`
        const { data } = await axios.get(url)
        return data.drinks[0];
    } catch (error) {
        console.error(error);
        throw new Error("Hubo un error al obtener las receta")
    }
}

const filterDrinksService = async (strDrink, category) => {
    try {
        const url = `${apiUrl}filter.php?s=${strDrink}&c=${category}`;
        const { data } = await axios.get(url);
        return data.drinks //quitar si queres filtrar
        
    } catch (error) {
        console.error(error);
        throw new Error("Hubo un error al obtener las bebidas");
    }
};




export { getRecipeService, filterDrinksService }