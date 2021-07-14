import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);

  const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`
  })

  useEffect( () => {
    api.get("/posts")
    .then(res =>setPosts(pState => [...pState, ...res.data]))
  }, [api] )

  return (
    <div className="App">
      {posts.map(post =>(
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
