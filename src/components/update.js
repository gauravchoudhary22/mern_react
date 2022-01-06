import React, { useState } from 'react';
import axios from 'axios';
// import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Update() {
    const [name, setName] = useState('');
    const [userid, setUserId] = useState('');
    const [product, setProduct] = useState('');
    const postData = (e) => {
        console.log(name);
        // console.log(email);
        // console.log(password);
        const user = {
            "user_id":userid,
            "name":name,
            "product":product
        }
        axios.post(`/`,user)
        .then(function (response) {
            console.log(response);
          })
        .catch(function (error) {
            console.log(error);
          }); 
          e.preventDefault();
}

return (
    <form>
        
            <label>User Id</label>
            <input placeholder='USER ID' onChange={(e)=>setUserId(e.target.value)} /><br/>
            
            <label>Name</label>
            <input placeholder='Name' onChange={(e)=>setName(e.target.value)} /> <br/>
        
            <label>Password</label>
            <input placeholder='Product' type="text" onChange={(e)=>setProduct(e.target.value)} /><br/>
        
            <button type='submit' onClick={postData}>Submit</button>
    </form>
)
}
