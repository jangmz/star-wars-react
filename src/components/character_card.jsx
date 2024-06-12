import { useState } from "react"
import CharacterAttributes from "./character_attributes"
import ModalWindow from "./modal_window";

export default function CharacterCard({ character }) {
    const [characterObj, setCharacterObj] = useState(character);
    const [isModalOpen, setModalOpen] = useState(false);

    function openModal() {
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }

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