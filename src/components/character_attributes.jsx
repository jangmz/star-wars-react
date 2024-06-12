import Attribute from "./attribute"

export default function CharacterAttributes({ character }) {

    // only get the attributes up until "homeworld" key
    const sliceIndex = Object.entries(character).findIndex(([key]) => key === "homeworld");

    // transform the original object to array and slice it to get only the attributes needed
    const slicedCharacter = sliceIndex !== -1 ? Object.entries(character).slice(0, sliceIndex) : Object.entries(character);

    return (
        <div>
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