import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Users() {
    const [name,setName] = useState([])

    useEffect(()=>{
        // let data = [
        //     {id:1,login:"abc",avatar_url: "xyz"},
        //     {id:2,login:"abc",avatar_url: "xyz"},
        //     {id:3,login:"abc",avatar_url: "xyz"},

        // ]

        const url = "https://api.github.com/users"

        axios.get(url)
        .then((response)=>{
            console.log(response.data)
            setName(response.data)
            
        })
        .catch((e)=>{
            console.log(e);
            
        })
        // setName(data)
        // setName()
    },[])
  return (
<>
{/* <h1>{JSON.stringify(name)}</h1> */}
<table border={1}>
    <thead>
        <tr>
            <th>Id</th>
            <th>Login</th>
            <th>Avatar</th>
        </tr>
    </thead>
    <tbody>
        {name.map((u)=>{
            return (
            <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.login}</td>
                <td><img src={u.avatar_url} alt=""  width={100}/></td>

            </tr>
            )
        })}
    </tbody>
</table>
</>  
)
}
