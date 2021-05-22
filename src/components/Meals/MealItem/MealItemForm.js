import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';



const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef(0);

    const sumbitHandler = event => {
        event.preventDefault();
        
        const enteredAmount = amountInputRef.current.value; //value se luon la string cho du input type la number
        const enteredAmountNumberType = +enteredAmount; //ep kieu

        if (enteredAmount.trim().length === 0 || enteredAmountNumberType < 1 || enteredAmountNumberType > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumberType);
    };

    return (
        <form className={classes.form} onSubmit={sumbitHandler}>
            <Input 
                ref={amountInputRef} //truy cap value cua input thong qua useRef va forwardRef
                label='Amount'
                input={{
                id: 'amount_' + props.id, // this changed!
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
                }} 
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    );
};

export default MealItemForm;