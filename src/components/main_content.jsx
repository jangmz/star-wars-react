import { shrinkAttributes } from "../shrink_attributes";
import CharacterCard from "./character_card";
import { useEffect, useState } from "react";

export default function MainContent() {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const loadCharacters = async () => {
            const charactersArray = []; // will be later added to state
            const charactersPromises = []; // for detecting when all promises are finished

            for (let i = 0; i < 3; i++) {
                const characterID = Math.floor(Math.random() * 83);
                charactersPromises.push(
                    fetch(`https://swapi.dev/api/people/${characterID}`, { mode: "cors" })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error("Server error");
                            }

                            return response.json();
                        })
                        .then(data => {
                            // this calls a function to transform object to array
                            // function eliminates the attributes that are not needed
                            // then returns an array of attributes and transforms that array back into object
                            charactersArray.push(Object.fromEntries(shrinkAttributes(data))); 
                        })
                        .catch(error => setError(error))
                );
            }

            await Promise.all(charactersPromises);
            setCharacters(charactersArray); // push all characters to state
            setLoading(false);
        }

        loadCharacters();
    }, [])

    if (loading) {
        return <p>Loading ...</p>;
    }

    if (error) {
        alert(error);
    }

    return (
        <div>
            {/* load all characters and create cards */}
            {
                characters.map((character, index) => (
                    <CharacterCard key={index} character={character} />
                ))
            }
        </div>
    )
}