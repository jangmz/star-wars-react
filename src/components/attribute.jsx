// component for displaying each characters attribute
export default function Attribute({attrib, value}) {
    return (
        <li key={attrib}>
            {attrib[0].toUpperCase() + attrib.substring(1)}: <strong>{value}</strong>
        </li>
    )
}