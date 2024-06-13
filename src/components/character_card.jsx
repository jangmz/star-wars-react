import { useState } from "react"
import CharacterAttributes from "./character_attributes"
import ModalWindow from "./modal_window";

// this is a card component for each of the characters
export default function CharacterCard({ position, character }) {
    const [characterObj, setCharacterObj] = useState(character);
    const [isModalOpen, setModalOpen] = useState(false);

    console.log("Position: " + position);

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
        setCharacterObj(updatedCharacter);
    }

    return (
        <div>
            {/* background image */}
            <img src="#" alt=""/>

            {/* character attributes */}
            <CharacterAttributes character={characterObj} />
            <button onClick={openModal}>Edit</button>

            {/* form window to alter the attributes */}
            <ModalWindow 
                isOpen={isModalOpen} 
                onClose={closeModal}
                character={characterObj}
                onSave={handleSave}
            />
        </div>
    )
}