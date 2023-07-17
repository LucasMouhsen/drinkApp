import { PropTypes } from "prop-types"
import styles from "./Cart.module.css"
import useCart from "../../../../hooks/useCart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"

export function ModalCard({drink}) {
    const { addToCart, removeOneFromCart, removeAllFromCart } = useCart();
    
    function handleAddToCart(drink) {
        addToCart(drink)
    }
    function handleRemoveOneFromCart(idDrink) {
        removeOneFromCart(idDrink)
    }
    function handleRemoveAllFromCart(idDrink) {
        removeAllFromCart(idDrink)
    }

    return (
        <article className={styles.card}>
            <img src={drink.strDrinkThumb} alt="" />
            <div className={styles.drinkiInfo}>
                <span>{drink.strDrink}</span>
                <span>$ {drink.price}</span>
            </div>
            <div className={styles.counter}>
                <FontAwesomeIcon icon={faMinus} className={styles.iconCounter} onClick={() => handleRemoveOneFromCart(drink.idDrink)} />
                <span className={styles.numberCounter}>{drink.quantity}</span>
                <FontAwesomeIcon icon={faPlus} className={styles.iconCounter} onClick={() => handleAddToCart(drink)} />
            </div>
            <FontAwesomeIcon icon={faTrash} className={styles.trash} onClick={() => handleRemoveAllFromCart(drink.idDrink)} />
        </article>
    )
}

ModalCard.propTypes = {
    drink: PropTypes.object.isRequired
}