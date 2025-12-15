import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios' 

function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data);
    }
   )
   .catch(() => {
      console.log(error);
    }
   )
  });

  return (
    <>
      <h1>frontend</h1>
      <p>No. of jokes : {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
