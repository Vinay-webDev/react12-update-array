/* how to update state of an array in react */

import React,{useState} from 'react';

function MyComponent() {
    
    const [foods, setFoods] = useState(["noodles","pizza","kfc"]);
    /* let's create one handler function to add an element to this array
    and another one to remove an element */
    return(
        <div>
            <h1>List of foods</h1>
            <ul>
                <li> {foods.map()} </li>
            </ul>
        </div>
    );
}
export default MyComponent










