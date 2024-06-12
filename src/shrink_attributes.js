export function shrinkAttributes(character) {
    // only get the attributes up until "homeworld" key
    const sliceIndex = Object.entries(character).findIndex(([key]) => key === "homeworld");

    // transform the original object to array and slice it to get only the attributes needed
    const slicedCharacter = sliceIndex !== -1 ? Object.entries(character).slice(0, sliceIndex) : Object.entries(character);

    return slicedCharacter;
}