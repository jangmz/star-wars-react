import CharacterCard from "./character_card";
import { useEffect, useState } from "react";

// custom hook for fetching character
/*function useCharacter(peopleID = null) {
    const [character, setCharacter] = useState({}); // for character attributes
    const [error, setError] = useState(null); // for any errors
    const [loading, setLoading] = useState(true); // loading state while fetching

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${peopleID}`, { mode: "cors"})
            .then((response) => {
                // if response is not ok, throw an error
                if (!response.ok) {
                    throw new Error ("Server error");
                }

                // otherwise return JSON data
                return response.json
            })
            .then((response) => setCharacter(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, []);

    return { character, error, loading };
}
*/
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
                        .then(data => charactersArray.push(data))
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
            Main Content
            {
                characters.map((character, index) => (
                    <CharacterCard key={index} character={character} />
                ))
            }
        </div>
    )
}