import { useEffect, useState } from "react";
import axios from "axios";

function HomeList() {
    const [home, setHome] = useState([]);

    useEffect(() => {
                // Fetch list of Home from cinema DB
                axios
                .get(`https://localhost:8088/`)
                .then((response) => {
                    setHome(response.data); // Set the film data
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        });

    return (
        <div>
            <h1>Films Populaires</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {home.map((film) => (
                    <div key={film.id} style={{ margin: "20px" }}>
                        <h3>{film.titre}</h3>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeList;