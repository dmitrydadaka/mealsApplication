/* import { useContext } from 'react';
import { AppContext } from '../context'; */
import { useGlobalContext } from '../context';
import { BsHandThumbsUp } from 'react-icons/bs'


const Meals = () => {
    //const context = useContext(AppContext);
    const { meals, loading, selectMeal, addToFavorites } = useGlobalContext();

    if( loading ){
        return <section className='section'>
            <h4>Loading...</h4>
        </section>
    }

    if( meals.length < 1){
        return <section className='section'>
            <h4>No meals matched your search term. Please try again.</h4>
        </section>
    }

    return (
    <section className='section-center'>
        {
            meals.map(singleMeal => {
                const { idMeal, strMeal: title, strMealThumb: image} = singleMeal;
                return <article id={idMeal} className='single-meal'>
                    <img src={ image } className='img' onClick={() => selectMeal(idMeal)}  style={{ width: '200px'}}/>
                    <footer>
                        <h5> { title } </h5>
                        <button className='like-btn' onClick={() => addToFavorites(idMeal)}> <BsHandThumbsUp /> </button>
                    </footer>
                </article>               
            })
        }
    </section>
    )
}

export default Meals;
