import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {

    async function fetchRepos() {
      const response = await fetch('https://api.github.com/users/BasitMaqsood/repos');
      const data = await response.json();
      setRepos(data);
    }

    fetchRepos();

  }, [])


  return (
    <div className="App">
      <h4>API CALLING</h4>
      <ul>
        {repos.map(repo => {
          return (
            <li style={{ listStyleType: 'none' }} key={repo.id}>{repo.name}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
