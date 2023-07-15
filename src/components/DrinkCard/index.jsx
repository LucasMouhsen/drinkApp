import { Col, Card, Button } from "react-bootstrap";
import { useDrinks } from "../../hooks/useDrinks";
import PropTypes from "prop-types";
import useCart from "../../hooks/useCart"

export default function DrinkCard({ drink }) {
  const { handleModalClick, handleDrinkIdClick, } = useDrinks()
  const {addToCart, removeOneFromCart, removeAllFromCart, clearCart} = useCart();
 

  function handleAddToCart(drink){
    console.log("Agregado al carrito")
    addToCart(drink)
  }
  function handleRemoveOneFromCart(drink){
    console.log("Eliminando una bebida")
    removeOneFromCart(drink)
  }
  function handleRemoveAllFromCart(drink){
    console.log("Eliminando todas las bebidas")
    removeAllFromCart(drink)
  }
  function handleClearCart(){
    console.log("Limpiando carrito")
    clearCart()
  }

  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrink}`}
        />

        <Card.Body>
          <Card.Title>{drink.strDrink}</Card.Title>
          <Card.Subtitle className="m-2">$ {drink.price}</Card.Subtitle>
            <div className="w-100 p-3 d-flex gap-2">
              <Button
                variant="warning"
                className="w-50 text-uppercase mt-2"
                onClick={() => {
                  handleModalClick();
                  handleDrinkIdClick(drink.idDrink);
                }}
              >
                Ver Receta
              </Button>
              <Button
                variant="primary"
                className="w-50 text-uppercase mt-2"
                onClick={() => handleAddToCart(drink)}
              >
                Agregar al carrito
              </Button>
              
            </div>
            {/* <div>
            <Button
                variant="primary"
                className="w-50 text-uppercase mt-2"
                onClick={() => handleRemoveOneFromCart(drink.idDrink)}
              >
                eliminar
              </Button>
              <Button
                variant="primary"
                className="w-50 text-uppercase mt-2"
                onClick={() => handleRemoveAllFromCart(drink.idDrink)}
              >
                eliminar todo
              </Button>
            </div>
            <Button
                variant="primary"
                className="w-50 text-uppercase mt-2"
                onClick={() => handleClearCart()}
              >
                Limpiar carrito
              </Button> */}

        </Card.Body>
      </Card>
    </Col>
  );
}


DrinkCard.propTypes = {
  drink: PropTypes.shape({
    strDrinkThumb: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    idDrink: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};