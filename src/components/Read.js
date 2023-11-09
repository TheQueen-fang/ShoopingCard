import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState('');

  const [inputText, setInputText] = useState("");
    function getData() {
        axios.get('https://65391b1ce3b530c8d9e7ec82.mockapi.io/learningCrud/crudREact')
            .then((res) => {
                console.log(setData(res.data));
                setData(res.data)
        })
  }

  const inputHandle = (e) => {
    setInputText(e.target.value.toLowerCase())
  }
  const setLocalStorage = (id,name,email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }
    useEffect(() => {
         getData();
    },[])
  function handleDelete(id) {
    axios.delete(`https://65391b1ce3b530c8d9e7ec82.mockapi.io/learningCrud/crudREact/${id}`)
      .then(() => {
        getData();
    })
  }
 
  return (
    <>
      <div class="form-check form-switch m-2" onClick={() => {
        if (tabledark === 'table-dark') {
          setTableDark('');
        } else {
          setTableDark('table-dark')
        }
      }}>
  <input class="form-check-input" type="checkbox" />
  
</div>
      

      <div className='d-flex justify-content-between m-2'>
        <h1>Read Operations</h1>
        <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label"></label>
          <input type="search"
            placeholder="type Here" className="form-control"
          onChange={inputHandle}/>
   
  </div>
         
        


        <Link to='/'>
          <button  className='btn btn-primary'>Create Data</button>
        </Link>
      </div>
      
     <table className={`table ${tabledark}`}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
              {
                  data.map((eachData) => {
                      return (
                          <>
                              <tbody>
                      
    <tr>
      <th scope="row">{eachData.id }</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      
                              <td>
          <Link to="/update"><button className='btn-success' onClick={()=>setLocalStorage(eachData.id ,eachData.name,eachData.email)}>Edit</button></Link>
        
        </td>
         <td>
          <button className='btn-danger' onClick={() => handleDelete(eachData.id)}>Delete</button>
        </td>
                      
    </tr>
    
    
  </tbody>
                          </>
                      )
                  })
                  
  }
</table>
    </>
  )
}

export default Read
