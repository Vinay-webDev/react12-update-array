/* how to update state of an array in react */

import React,{useState} from 'react';

function MyComponent() {
    
    const [foods, setFoods] = useState(["noodles","pizza","kfc"]);
    /* let's create one handler function to add an element to this array
    and another one to remove an element */
    function handleAddFoods() {
        /* inorder to access the food element inside the input 
        element we need to get the text written inside the input 
        element to do that we need to use DOM */
        /* here we need only the value not entire input element
        so use .value method */
        const newFood = document.getElementById("food-input").value;
        /* inorder to clear the input after adding the food element 
        we can do that by */
        document.getElementById("food-input").value = "";
        /* so now we need to use spread operator */
        /* it's always good practice to have updater fucntion */
        setFoods(f => [...f, newFood]);
    }
    function handleRemoveFoods(index) {
        //setFoods([]); // this will clear all elements in a array
        /* this is most complicated method and it takes an argument 
        and we need to use .filter() built-in array method*/
        setFoods(foods.filter((_, i) => i !== index));
    }
    return(
        <div>
            <h1>List of foods</h1>
            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFoods(index)} >
                 {food} </li>)}
            </ul>
            <input type="text" id="food-input" placeholder="Enter food name"/>
            <button onClick={handleAddFoods} > Add food </button>
        </div>
    );
}
export default MyComponent










