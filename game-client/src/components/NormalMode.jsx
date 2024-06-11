import { useState, useEffect } from 'react';
import Navbar from './navbar';
import fruits from '../data/fruits';
import Question from './Question';

const NormalMode = () => {
    const [current, setCurrent] = useState(1);
    const [fruit, setFruit] = useState(fruits.find(fruit => fruit.id === current));
    const allquest = fruits ? fruits.length : 0;

    useEffect(() => {
        if (fruits.find(fruit => fruit.id === current)) {
            setFruit(fruits.find(fruit => fruit.id === current));  
            console.log(fruits.find(fruit => fruit.id === current)); 
        } else {
            setCurrent(1);
            setFruit(fruits.find(fruit => fruit.id === 1));
            console.log(`Fruit with id ${current} not found.`);
        }
    }, [current]);

    const handleNext = () => {
        if (current < fruits.length) {
            setCurrent(current + 1);   
        }
    };

    const handlePrev = () => {
        if (current > 1) {
            setCurrent(current - 1);
        }
    };

    return ( 
        <>
            <Navbar handleNext={handleNext} handlePrev={handlePrev} current={current} allques={allquest}/>
            <Question fruit={fruit} handleNext={handleNext} handlePrev={handlePrev} totalFruit={fruits.length}/>
        </>
     );
}
 
export default NormalMode;