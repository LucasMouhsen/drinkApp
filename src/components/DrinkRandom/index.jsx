import { Row } from 'react-bootstrap';
import { useDrinks } from "../../hooks/useDrinks";
import DrinkCard from '../DrinkCard';
import DrinkCardEmpty from '../DrinkCardEmpty';


export default function DrinkRandom() {
    const { random } = useDrinks()

    if (random.length === 0) {
        return (
            <>

                <Row className='mt-5 justify-content-center'>
                    <DrinkCardEmpty/>
                </Row>
            </>

        )
    }

    return (
            <Row className='mt-5 justify-content-center'>
                {
                    random.map((drink) => (
                        <DrinkCard key={drink.idDrink} drink={drink} />
                    ))
                }
            </Row>
            
    )
}