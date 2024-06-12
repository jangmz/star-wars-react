import { useState } from "react"
import CharacterAttributes from "./character_attributes"

export default function CharacterCard({ character }) {
    const [characterObj, setCharacterObj] = useState(character);

    console.log(characterObj);

    return (
        <div>
            <img src="#" alt=""/>
            <CharacterAttributes character={characterObj} />
            <button>Edit</button>
        </div>
    )
}