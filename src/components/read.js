import React, { useState,useEffect } from 'react';
import axios from 'axios';
// import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Read() {
    const [data, setData] = useState([{
        "user_id":"123",
        "name":"name1",
        "product":"pass1"
    }]);

    useEffect(() => {
        fetchData()
    }, [])

   const fetchData = async()=>{
    await axios.get(`/user`)
    .then((response) => {
        console.log(response)
        setData(response.data);
    })
    .catch((error)=>{
        console.log(error)
    })
   }

return (
    <div>
        <table>
            <thead>
            <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Product</th>
            </tr>
            </thead>
            {data.map((d,index)=>{
                return(
                    <tbody key={index}>
                    <tr>
                        <td>{d.user_id}</td>
                        <td>{d.name}</td>
                        <td>{d.product}</td>
                    </tr>
                    </tbody>
                )
            })}
        </table>
    </div>
)
}
