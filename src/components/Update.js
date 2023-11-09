import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setEmail(localStorage.getItem("email"));
    setName(localStorage.getItem("name"));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(
      `https://65391b1ce3b530c8d9e7ec82.mockapi.io/learningCrud/crudREact/${id}`, {
      name: name,
      email: email,
    }
    ).then(() => {
      navigate("/read");
      //navigate("/read");
    });


  };
  return (
    <>
     <h2>Update</h2>
          <form>
    <div className="mb-3">
    <label  className="form-label">Name</label>
                  <input type="text" value={name} className="form-control"
                      onChange={(e) => {
                      setName(e.target.value)
                  }}/>
  </div>
  
  <div className="mb-3">
    <label  className="form-label">Email address</label>
          <input type="email" value={email} onChange={(e) => {
                     
                      setEmail(e.target.value)
                  }} className="form-control" aria-describedby="emailHelp" />
    
  </div>
  
        <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
        
        <Link to='/read'>
        <button className="btn btn-primary m-3">Back</button></Link>
</form>  
    </>
  )
}

export default Update
