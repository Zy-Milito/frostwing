import '../App.css';
import {useState} from 'react';

function ItemCount({stock, initial, onAdd}) {
    const [counter, setCounter] = useState(initial);
    const [newStock, setNewStock] = useState(stock);

    const increaseCounter = () => {
        if(counter < stock) {
            setCounter(counter + 1);
            setNewStock(newStock - 1);
        }
    }

    const decreaseCounter = () => {
        if (counter > initial){
            setCounter(counter -1);
            setNewStock(newStock + 1);
        }
    }

    const success = () => {
        if (newStock > 0 && counter >= 1) {
            alert("Product added!");
        } else if (newStock > 0 && counter < 1) {
            return null;
        } else {
            throw Error("Some error.");
        }
    }

    return (
        <section className="counter">
            <div className="q-selection">
                <button onClick={decreaseCounter} className="decrease-counter">&#8722;</button>
                <p>{counter}</p>
                <button onClick={increaseCounter} className="increase-counter">&#43;</button>
            </div>
            <div className="q-confirmation">
                <button onClick={success}>CONFIRM</button>
            </div>
        </section>
    )
}

export default ItemCount;