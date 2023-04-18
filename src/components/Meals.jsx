/* import { useContext } from 'react';
import { AppContext } from '../context'; */
import { useGlobalContext } from '../context';

const Meals = () => {
    //const context = useContext(AppContext);
    const { meals } = useGlobalContext();
    console.log(meals);
    return (
    <section>
        {
            meals.map(singleMeal => <h4>{singleMeal.strMeal}</h4>)
        }
    </section>
    )
}

export default Meals;
