import { Card, Row } from 'react-bootstrap';
import { useDrinks } from "../../hooks/useDrinks";
import DrinkCard from '../DrinkCard';
import DrinkCardEmpty from '../DrinkCardEmpty';


export default function DrinksList() {
    const { drinks, random } = useDrinks()

    if (drinks.length === 0 && random.length === 0) {
        return (
            <>

                <Row className='mt-5 justify-content-center'>
                    <Card.Title className='text-center text-white m-3'>Trago random</Card.Title>
                    <DrinkCardEmpty />
                    <Card.Title>No hay resultados</Card.Title>
                </Row>
            </>

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
            <Row className='mt-5'>
                {
                    drinks.map((drink) => (
                        <DrinkCard key={drink.idDrink} drink={drink} />
                    ))
                }
            </Row>
        </>
    )
}