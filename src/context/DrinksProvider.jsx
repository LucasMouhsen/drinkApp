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

            const drinksData = await filterDrinksService(data.strDrink, data.category);
            const drinksWithPrice = drinksData.map((drink)=>{
                return {
                    ...drink,
                    price: Math.floor(Math.random()*101), /* Se agrega precio random */
                }
            })
            /* Se filtra ya que la api no funciona correctamente */
            const arrayDrinks = [];

            drinksWithPrice.forEach(drink => {
                const nameDrink = drink.strDrink.toLowerCase();

                if (nameDrink.includes(data.strDrink.toLowerCase())) {
                    arrayDrinks.push(drink);
                }
            });
            setDrinks(arrayDrinks)
            /* setDrinks(drinksData) */
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
    },[drinkId])

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

export default DrinksContext;
export {DrinksProvider}