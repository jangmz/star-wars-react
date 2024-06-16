import { useContext, useState } from "react"
import CharacterAttributes from "./character_attributes"
import ModalWindow from "./modal_window";
import { CharactersContext } from "./main_content";

// this is a card component for each of the characters
export default function CharacterCard({ position }) {
    const {characters, setCharacters} = useContext(CharactersContext);
    const [isModalOpen, setModalOpen] = useState(false);

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
        // new array with updated character data
        const updatedCharacters = [...characters];
        updatedCharacters[position] = updatedCharacter;

        // update the state with new data
        setCharacters(updatedCharacters);
    }

    return (
        <div className="character-card">
            <div className="character-card-sub">
                {/* set background image */}

                {/* character attributes */}
                <CharacterAttributes character={characters[position]} />
                <button onClick={openModal}>Edit</button>
            </div>

            {/* form window to alter the attributes */}
            <ModalWindow 
                isOpen={isModalOpen} 
                onClose={closeModal}
                character={characters[position]}
                onSave={handleSave}
            />
        </div>
    )
}