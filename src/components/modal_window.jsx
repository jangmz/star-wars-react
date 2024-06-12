import "../styles/ModalWindow.css";

export default function ModalWindow({ isOpen, onClose, character, onSave }) {
    if (!isOpen) {
        return null;
    }

    console.log(character);

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <h2>Edit character attributes</h2>
                <form>
                    <label></label>
                </form>
            </div>
        </div>
    )
}