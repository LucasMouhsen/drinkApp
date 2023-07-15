import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./CartModal.module.css"
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons"
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import useModal from "../../hooks/useModal"

export default function CartModal() {
    const {isOpen, toogleModal} = useModal()

    console.log(isOpen);
    if (isOpen) return (
            <div className={styles.modalBg} onClick={toogleModal}>
                <div className={styles.modal}>
                    <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon} onClick={toogleModal}/>
                    <h2 className={styles.h2Modal}>Mi carrito</h2>
                    <section className={styles.modalBody}>
                        <div className={styles.modalDriksListContainer}>
                            <article className={styles.card}>
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_787978-MLA48861580078_012022-F.webp" alt="" />
                                <div className={styles.drinkiInfo}>
                                    <span>Johnnie Walker Blue Label X750cc</span>
                                    <span>$98.860</span>
                                </div>
                                <div className={styles.counter}>
                                    <FontAwesomeIcon icon={faMinus} className={styles.iconCounter} />
                                    <span className={styles.numberCounter}>1</span>
                                    <FontAwesomeIcon icon={faPlus} className={styles.iconCounter} />
                                </div>
                                <FontAwesomeIcon icon={faTrash} className={styles.trash} />
                            </article>
                        </div>
                    </section>
                    <aside className={styles.cardAside}>
                        <p>SubTotal: xxxx</p>
                        <p>Total: xxx</p>
                        <div className={styles.btnContainer}>
                            <button className={styles.clearCart}>Vaciar carrito</button>
                            <button className={styles.confirmOrder}>Confirmar compra</button>
                        </div>
                    </aside>
                </div>
            </div>
        )
}