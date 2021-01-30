import {useState } from 'react'

export default function useAuthListener(){
    const[user,setUser] = useState(JSON.parse(sessionStorage["user"]))

    return { user };
}