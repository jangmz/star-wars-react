import Attribute from "./attribute"
import { shrinkAttributes } from "../shrink_attributes";

// displays a list of character attributes
export default function CharacterAttributes({ character }) {

    const slicedCharacter = Object.entries(character);

    return (
        <div className="character-attributes">
            <ul>
                {
                    // go through the characters attributes and display it
                    slicedCharacter.map(([attribute, value], index) => (
                        <Attribute key={index} attrib={attribute} value={value} />
                    ))
                }
            </ul>
        </div>
    )
}