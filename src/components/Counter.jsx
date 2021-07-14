import { useState } from 'react';

// All function from react the start with a "use" are hooks.
// The three most import concepts in react are: Components, Variables and State.
// React uses the imutability concept, which basically states that you can not change the content of a variable, you can only create a new variable. The setCounter does that.

export function Counter() {
    const [counter, setCounter] = useState(0); // The useState function return two elements inside an array. Here I am using an array to desctructure that return. By convention the second element that is returned in the array must have its name starting with "set" + the name given to the variable (in this case counter) in camelcase style.

    function increment() {
        setCounter(counter + 1); // Updating the state of the variable counter.
    }
    return (
       <div>
           <h2>{counter}</h2>
           <button type="button" onClick={increment}>
               Increment
            </button>
       </div> 
    );
}