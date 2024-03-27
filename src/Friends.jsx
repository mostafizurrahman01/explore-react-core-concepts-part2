/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Friends(){
    const [friends, setFriend] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])

    return (
        <div>
            <h1>Friend : {friends.length}</h1>
            {
                friends.map(friend => <Friend friend = {friend}></Friend>)
            }
        </div>
    )
}