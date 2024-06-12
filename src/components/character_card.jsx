import { useState } from "react"
import CharacterAttributes from "./character_attributes"

export default function CharacterCard({ character }) {
    const [characterObj, setCharacterObj] = useState(character);
    const [isModalOpen, setModalOpen] = useState(false);

    function openModal() {
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }

    return (
        <div>
            <img src="#" alt=""/>
            <CharacterAttributes character={characterObj} />
            <button onClick={openModal}>Edit</button>
            <ModalWindow isOpen={isModalOpen} onClose={closeModal}>
                <h2>Edit attributes</h2>
                <p>Attributes</p>
                <button>Save</button>
                <button>Close</button>
            </ModalWindow>
        </div>
    )
}