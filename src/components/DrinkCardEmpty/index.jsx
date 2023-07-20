import { Col, Card, Button } from "react-bootstrap";
import { useDrinks } from "../../hooks/useDrinks";
import styles from "./index.module.css"
import 'animate.css/animate.min.css';

export default function DrinkCardEmpty() {
  const { getRandomDrink } = useDrinks()

  return (

    <Col md={6} lg={3}>
      <Card className={`${styles.card} animate_animated animate_bounce`}>
        <Card.Img variant="top" className={styles.cardImg} src="https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg" alt={`Imagen de trago`} />

        <Card.Body >
          <div className={styles.cardInfo}>
            <Card.Title>Buena suerte</Card.Title>
          </div>
          <div className="w-100 p-3 d-flex gap-2 justify-content-center">
            <Button
              variant="warning"
              className="w-50 text-uppercase mt-2 "
              onClick={() => {
                getRandomDrink()
              }}
            >
              Obtener trago random
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}