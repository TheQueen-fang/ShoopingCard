import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    //why we need to give header in post what if we wont 
    const header = { "Access-Control-Allow-Origin": "*" };
    const history=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Clicked');
        axios.post(
            'https://65391b1ce3b530c8d9e7ec82.mockapi.io/learningCrud/crudREact',
            { name: name, email: email, header }
        )
            //directly lika tha kya prblm this , then lagane se kya hua ?
            .then(() => {
            history('/read');
        })
    }
  return (
      <>
          <div className='d-flex justify-content-between m-2'>
            <h2>Create</h2>
              <Link to='/read'>
              <button className='btn btn-primary'>Show Data</button>
              </Link>
          </div>
          <form>
    <div className="mb-3">
    <label  className="form-label">Name</label>
                  <input type="text" className="form-control"
                      onChange={(e) => {
                      setName(e.target.value)
                  }}/>
  </div>
  
  <div className="mb-3">
    <label  className="form-label">Email address</label>
                  <input type="email" onChange={(e) => {
                     
                      setEmail(e.target.value)
                  }} className="form-control" aria-describedby="emailHelp" />
    
  </div>
  
  <button type="submit" className="btn btn-primary"  onClick={handleSubmit}>Submit</button>
</form>  
   </>
  )
}

export default Create
