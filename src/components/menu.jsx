import "../styles/NavigationMenu.css";
import SWLogo from "../images/starwars.png";

export default function Menu() {
    return (
        <div className="navigation-menu">
            <ul>
                <li>Upcoming</li>
                <li>Legacy</li>
                <li><img src={SWLogo} alt="star wars title"/></li>
                <li>Merch</li>
                <li>About</li>
            </ul>
        </div>
    )
}