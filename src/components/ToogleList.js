import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ToogleList() {
    const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
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
      <div className='card w-100 p-5 text-center'>
        <div className='card-title p-4'>
          <h1>TP4_REACT</h1>
        </div>
        <div className='card-body'>
          <table className='table'>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>price</th>
              <th>description</th>
              <th>image</th>
            </tr>
            {todos.map(todo => (
              <tr>
                <td key={todo.id}>{todo.title}</td>
              </tr>
            ))}
          </table>
          <button onClick={handlePreviousPage} className='btn btn-dark bg-danger p-3 m-3'>previous</button>
          <button onClick={handleNextPage} className='btn btn-dark bg-success p-3 m-3'>next</button>
        </div>
      </div>
    </div>
  )
}
