/* import { useContext } from 'react';
import { AppContext } from '../context'; */
import { useGlobalContext } from '../context';

const Meals = () => {
    //const context = useContext(AppContext);
    const context = useGlobalContext();
    console.log(context);
    return (
        <h1>Meals component</h1>
    )
}

export default Meals;
