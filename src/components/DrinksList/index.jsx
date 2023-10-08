import { Card, Row } from 'react-bootstrap';
import { useDrinks } from "../../hooks/useDrinks";
import DrinkCard from '../DrinkCard';


export default function DrinksList() {
    const { drinks } = useDrinks()

    if (drinks.length === 0) {
        return (
            <Row className='mt-5 justify-content-center'>
                <Card.Title>No hay resultados</Card.Title>
            </Row>

        )
    }

    return (
        <Row className='mt-5'>
            {
                drinks.map((drink) => (
                    <DrinkCard key={drink.idDrink} drink={drink} />
                ))
            }
        </Row>
    )
}