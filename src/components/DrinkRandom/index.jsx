import { Card, Row } from "react-bootstrap";
import DrinkCard from "../DrinkCard";
import { useDrinks } from "../../hooks/useDrinks";
import DrinkCardEmpty from "../DrinkCardEmpty";

export default function DrinkRandom() {
    const { random } = useDrinks()

    if (random.length === 0) {
        return (
            <Row className='mt-5 justify-content-center'>
                <Card.Title className='text-center text-white m-3'>Trago random</Card.Title>
                <DrinkCardEmpty />
            </Row>
        )
    }
    return (
        <>

            <Row className='mt-5 justify-content-center'>
                <Card.Title className='text-center text-white'>Trago random</Card.Title>
                {
                    random.map((drink) => (
                        <DrinkCard key={drink.idDrink} drink={drink} />
                    ))
                }
            </Row>
        </>
    )
}