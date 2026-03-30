import { Routes, Route, Link } from "react-router-dom";
import BeachDetails from "./BeachDetails.jsx";


import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [beaches, setBeaches] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/get-beaches")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBeaches(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  return (
    <Routes>
      {/* home page */}
      <Route path="/" element={
            
        <div className="app">
          <h1>🏝️Top 10 Beaches🏝️</h1>
          <div className="beach-container">
            {beaches.map((beach) => (
              <div key={beach.id} className="card">
                <Link to={`/beach/${beach.id}`}>
                  <h2>{beach.name}</h2>
                  <p>{beach.location}</p>
                  <img src={beach.image_url} />
                </Link>
                <p>{beach.description}</p>
                <button onClick={() => toggleFavorite(beach.id)}>
                  {favorites.includes(beach.id) ? "⭐️" : "★"}
                </button>
              </div>
      
            ))}
          </div>
        </div>
  
      } />

      {/* details page */}
      <Route
        path="/beach/:id"
        element={<BeachDetails beaches={beaches} />}
    />
    </Routes>
  );
}

  export default App
