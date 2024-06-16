// component for displaying each characters attribute -> "Name: John Doe"
export default function Attribute({ attrib, value}) {
    return (
        <li key={attrib}>
            {attrib[0].toUpperCase() + attrib.substring(1)}: <strong>{value}</strong>
        </li>
    )
}