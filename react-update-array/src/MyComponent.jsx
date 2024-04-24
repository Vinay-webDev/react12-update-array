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
        
    }
    function handleRemoveFoods() {

    }
    return(
        <div>
            <h1>List of foods</h1>
            <ol>
                {foods.map((food,index) => <li key={index}> {food} </li>)}
            </ol>
            <input type="text" id="food-input" placeholder="Enter food name"/>
            <button onClick={handleAddFoods} > Add food </button>
        </div>
    );
}
export default MyComponent










