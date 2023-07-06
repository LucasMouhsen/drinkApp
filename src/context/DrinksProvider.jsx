import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { filterDrinksService, getRecipeService} from "../services/drink.service"


const DrinksContext = createContext();

const DrinksProvider = ({children}) =>{
    const [drinks, setDrinks] = useState([]);
    const [modal, setModal] = useState(false);
    const [drinkId, setDrinkId] = useState(null);
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(false);

    const handleModalClick = () =>{
        setModal(!modal)
    }

    const handleDrinkIdClick = (id) =>{
        setDrinkId(id)
    }
    
    const getDrink = async (data) =>{
        try {
            setLoading(true)

            const drinksData = await filterDrinksService(data.name, data.category);
            setDrinks(drinksData)
        } catch (error) {
            console.error(error);
        }
    }

    const getRecipe = async () =>{
        if (!drinkId) return;
        try {
            setLoading(true)
            const recipeData = await getRecipeService(drinkId)
            setRecipe(recipeData)
        } catch (error) {
            console.error(error)
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getRecipe()
    },[])

    const contextValues = {
        drinks,
        modal,
        recipe,
        loading,
        handleDrinkIdClick,
        handleModalClick,
        getDrink,
    }

    return (
        <DrinksContext.Provider value={contextValues}>
            {children}
        </DrinksContext.Provider>
    )
}

DrinksProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export {DrinksContext, DrinksProvider}