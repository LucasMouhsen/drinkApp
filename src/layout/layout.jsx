
import { Container } from "react-bootstrap"
import styles from "./MainLayout.module.css"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"

import PropTypes from "prop-types"

export default function MainLayout({ children }) {
    return (
        <div className={styles.main}>
            <Header />
            <Container className="mt-5">
                {children}
            </Container>
            <Footer />
        </div>

    )

}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}