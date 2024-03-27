import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    // const abc = useState(0);
    // console.log(abc);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return(
        <div>
            <h1>Counter : {count} </h1>
            <button onClick={handleAdd}>Add Counter</button>
            <button onClick={handleReduce}>Reduce Counter</button>
        </div>
    )
}