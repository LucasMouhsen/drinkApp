import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./CartModal.module.css"
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons"
import useModal from "../../hooks/useModal"
import useCart from "../../hooks/useCart"
import { ModalCard } from "./components/Card"


export default function CartModal() {
    const { isOpen, toogleModal } = useModal()
    const { cart, clearCart, totalPrice, sendOrder } = useCart();

    function handleClearCart() {
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
                                <ModalCard key={drink.idDrink} drink={drink}/>
                            ))
                        }

                    </div>
                </section>
                <aside className={styles.cardAside}>
                    <p>SubTotal: $ {totalPrice()}</p>
                    <p>Total: $ {totalPrice()}</p>
                    <div className={styles.btnContainer}>
                        <button className={styles.clearCart} onClick={() => handleClearCart()}>Vaciar carrito</button>
                        <button className={styles.confirmOrder} onClick={() => sendOrder()}>Confirmar compra</button>
                    </div>
                </aside>
            </div>
        </div>
    )
}