
import React, { useEffect, useState } from "react";
import axios from "axios";

function FilmsList() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
                // Fetch list of films from cinema DB
                axios
                .get(`https://localhost:8088`)
                .then((response) => {
                    setFilms(response.data.results); // Set the film data
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        });

    return (
        <div>
            <h1>Films Populaires</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {films.map((film) => (
                    <div key={film.id} style={{ margin: "20px" }}>
                        <h3>{film.titre}</h3>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilmsList;