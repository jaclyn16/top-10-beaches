import { Link } from "react-router-dom";


function Favorites({ beaches, favorites }) {
    const favoriteBeaches = beaches.filter((beach) =>
        favorites.includes(beach.id)
    );

    return (
        <div className="app">
            <Link to="/">
                <button className="home-btn">🏠 Home</button>
            </Link>

            <h1>⭐️ Favorite Beaches</h1>
            
            <div className="beach-container">
                {favoriteBeaches.map((beach) => (
                    <div key={beach.id} className="card">
                        <h2>{beach.name}</h2>
                        <p>{beach.location}</p>
                        <img src={beach.image_url} />
                        <p>{beach.description}</p>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Favorites;