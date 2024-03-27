import { useEffect, useState } from "react"

export default function Users(){
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    return (
        <div>
            <h1>Users: {user.length}</h1>
            {/* <h3>User Name: {user}</h3> */}
        </div>
    )
}

/* 
    1. state to hold data
    2. use effect with call back func and dependency array
    3. use fetch to fetch data
    4. set loaded data into setUser state
    5. display data on the component
*/ 