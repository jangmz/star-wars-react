import { useContext, useState } from "react"
import CharacterAttributes from "./character_attributes"
import ModalWindow from "./modal_window";
import { CharactersContext } from "./main_content";

// this is a card component for each of the characters
export default function CharacterCard({ position/*, character*/ }) {
    const {characters, setCharacters} = useContext(CharactersContext);
    //const [characterObj, setCharacterObj] = useState(character);
    const [isModalOpen, setModalOpen] = useState(false);

    console.log("Position: " + position);
    console.log("Character name: " + characters[position].name);

    // opens modal window form
    function openModal() {
        setModalOpen(true);
    }

    // closes modal window form
    function closeModal() {
        setModalOpen(false);
    }

    // updates the new character attribute values
    function handleSave(updatedCharacter) {
        //setCharacterObj(updatedCharacter);

        // new array with updated character data
        const updatedCharacters = [...characters];
        updatedCharacters[position] = updatedCharacter;

        // update the state with new data
        setCharacters(updatedCharacters);
    }

    return (
        <div>
            {/* background image */}
            <img src="#" alt=""/>

            {/* character attributes */}
            <CharacterAttributes character={characters[position]/*characterObj*/} />
            <button onClick={openModal}>Edit</button>

            {/* form window to alter the attributes */}
            <ModalWindow 
                isOpen={isModalOpen} 
                onClose={closeModal}
                character={characters[position]/*characterObj*/}
                onSave={handleSave}
            />
        </div>
    )
}