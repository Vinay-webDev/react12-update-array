/* how to update state of an array in react */

import React,{useState} from 'react';

function MyComponent() {
    
    const [foods, setFoods] = useState(["noodles","pizza","kfc"]);
    /* let's create one handler function to add an element to this array
    and another one to remove an element */
    function handleAddFoods() {

    }
    function handleRemoveFoods() {

    }
    return(
        <div>
            <h1>List of foods</h1>
            <ul>
                {foods.map((food,index) => <li key={index}> {food} </li>)}
            </ul>
            <input type="text" id="food-input" placeholder="Enter food name"/>
            <button onClick={handleAddFoods} > Add food </button>
        </div>
    );
}
export default MyComponent










