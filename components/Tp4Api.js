import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Tp4Api() {

    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?_page=${page}&_limit=10`)
          .then(response => setTodos(response.data))
          .catch(error => console.error(error));
      }, [page]);

      const handlePreviousPage = () => {
        if (page > 1) {
          setPage(page - 1);
        }
      };
    
      const handleNextPage = () => {
        setPage(page + 1);
      };

  return (
    <div>
      <h1>store</h1>
      <table className='table'>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>price</th>
              <th>description</th>
              <th>image</th>
            </tr>
            {todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.price}</td>
                <td>{todo.description}</td>
                <td><img src={todo.image} alt="" /></td>
              </tr>
            ))}
            <tr>
              <td><button onClick={handlePreviousPage} className='btn btn-dark bg-danger p-3 m-3'>previous</button></td>
              <td><button onClick={handleNextPage} className='btn btn-dark bg-success p-3 m-3'>next</button></td>
            </tr>
        </table>
    </div>
  )
}
