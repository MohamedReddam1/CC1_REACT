import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tp4Api.css';

export default function Tp4Api() {

    const [todos, setTodos] = useState([]);


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
          .then(response => setTodos(response.data))
          .catch(error => console.error(error));
      }, []);

  return (
    <div >
        <div className='container'>
          <div className='row'>
          <h1 className='my-5'>store</h1>
              <table className='table col-lg-10 col-md-10 col-sm-10 col-10'>
                  <tr className=''>
                      <th scope="col" className='px-5 my-3'><center>id</center></th>
                      <th scope="col" className='my-3'><center>image</center></th>
                      <th scope="col" className='my-3'><center>title</center></th>
                      <th scope="col" className='my-3'><center>price</center></th>
                  </tr>
                  {todos.map(todo => (
                  <tr key={todo.id}>
                      <th scope="row" className='px-5'><p>{todo.id}</p></th>
                      <td><center><img src={todo.image} alt="" className='w-25'/></center></td>
                      <td><p>{todo.title}</p></td>
                      <td><p>{todo.price}DH</p></td>
                    </tr>
                  ))}
              </table>
          </div>
        </div>
    </div>
  )
}
