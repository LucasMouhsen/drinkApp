import { Col, Card, Button } from "react-bootstrap";
import {useDrinks} from "../../hooks/useDrinks";
import  PropTypes  from "prop-types";

export default function DrinkCard({ drink }) {
    const { handleModalClick, handleDrinkClink,  } = useDrinks()
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.img
          variant="top"
          src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrink}`}
        />

        <Card.Body>
          <Card.Title>
            {drink.strDrink}
            <Button
              variant="warning"
              className="w-100 text-uppercase mt-2"
              onClick={() => {
                handleModalClick();
                handleDrinkClink(drink.idDrink);
              }}
            >
                Ver Receta
            </Button>
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}


DrinkCard.propTypes = {
    drink: PropTypes.shape({
        strDrinkThumb: PropTypes.string.isRequired,
        strDrink: PropTypes.string.isRequired,
        idDrink: PropTypes.string.isRequired
    }).isRequired
};