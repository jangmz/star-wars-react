import { useState } from "react";
import "../styles/ModalWindow.css";

export default function ModalWindow({ isOpen, onClose, character, onSave }) {
    const [formData, setFormData] = useState(character);
    const attributes = Object.entries(formData);

    // if modal is not open
    if (!isOpen) {
        return null;
    }

    function handleInputChange(e, key) {
        setFormData({ ...formData, [key]: e.target.value });
    }

    function handleSave() {
        onSave(formData);
        onClose();
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <h2>Edit character attributes</h2>
                <form>
                    {
                       attributes.map(([key, value]) => (
                        <label key={key}>
                            {key}:&nbsp;
                            <input value={value} name={key} onChange={(e)=>handleInputChange(e, key)} />
                        </label>
                       )) 
                    }
                    <div className="modal-buttons">
                        <button onClick={handleSave}>Save</button>
                        <button onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}