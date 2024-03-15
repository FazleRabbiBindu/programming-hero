import { useState } from "react";

export default function Counter()
{

    const [count, setCount] = useState(0);
    // console.log(abc);
    function handleAdd(){
        const newCount = count+1;
        setCount(newCount)
    }
    function handleSub(){
        const newCount = count-1;
        setCount(newCount)

    }
    return (
        <div style={{border: 'red solid 2px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd} style={{margin: '5px'}}>Add</button>
            <button onClick={handleSub} style={{margin: '5px'}}>Sub</button>
        </div>
    );
}