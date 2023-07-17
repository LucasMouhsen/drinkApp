import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./CartModal.module.css"
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons"
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import useModal from "../../hooks/useModal"
import useCart from "../../hooks/useCart"

export default function CartModal() {
    const { isOpen, toogleModal } = useModal()
    const { cart, addToCart, removeOneFromCart, removeAllFromCart, clearCart, totalPrice } = useCart();

    function handleAddToCart(drink) {
        addToCart(drink)
    }
    function handleRemoveOneFromCart(idDrink) {
        removeOneFromCart(idDrink)
    }
    function handleRemoveAllFromCart(idDrink) {
        removeAllFromCart(idDrink)
    }
    function handleClearCart() {
        console.log("Limpiando carrito")
        clearCart()
    }

    if (isOpen) return (
        <div className={styles.modalBg} >
            <div className={styles.modal}>
                <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon} onClick={toogleModal} />
                <h2 className={styles.h2Modal}>Mi carrito</h2>
                <section className={styles.modalBody}>
                    <div className={styles.modalDriksListContainer}>
                        {
                            cart.cartItems.map((drink) => (
                                <article key={drink.idDrink} className={styles.card}>
                                    <img src={drink.strDrinkThumb} alt="" />
                                    <div className={styles.drinkiInfo}>
                                        <span>{drink.strDrink}</span>
                                        <span>$ {drink.price}.000</span>
                                    </div>
                                    <div className={styles.counter}>
                                        <FontAwesomeIcon icon={faMinus} className={styles.iconCounter}  onClick={() => handleRemoveOneFromCart(drink.idDrink)}/>
                                        <span className={styles.numberCounter}>{drink.quantity}</span>
                                        <FontAwesomeIcon icon={faPlus} className={styles.iconCounter}  onClick={()=> handleAddToCart(drink)}/>
                                    </div>
                                    <FontAwesomeIcon icon={faTrash} className={styles.trash} onClick={() => handleRemoveAllFromCart(drink.idDrink)}/>
                                </article>
                            ))
                        }

                    </div>
                </section>
                <aside className={styles.cardAside}>
                    <p>SubTotal: $ {totalPrice()}.000</p>
                    <p>Total: $ {totalPrice()}.000</p>
                    <div className={styles.btnContainer}>
                        <button className={styles.clearCart} onClick={() => handleClearCart()}>Vaciar carrito</button>
                        <button className={styles.confirmOrder}>Confirmar compra</button>
                    </div>
                </aside>
            </div>
        </div>
    )
}