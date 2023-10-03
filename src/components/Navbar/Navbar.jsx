import "./Navbar.css"
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher.jsx";
import {useState} from "react";

const navigationItems = [
    {
        "label": "Home",
        "value": "Home",
        "url": "/",
        "classes": "is-active"
    },
    {
        "label": "Projects",
        "value": "Projects",
        "url": "/projects"
    },
    {
        "label": "Publications",
        "value": "Publications",
        "url": "/publications"
    },
    {
        "label": "Blogs",
        "value": "Blogs",
        "url": "/blogs"
    },
    {
        "label": "Open Source",
        "value": "Open Source",
        "url": "/open-source"
    },
    {
        "label": "Contact",
        "value": "Contact",
        "url": "/contact"
    },
];

export function Navbar() {
    const [navList, setNavList] = useState([...navigationItems]);

    function handleNavigationClick(event) {
        document.querySelector(".is-active").classList.remove("is-active");
        event.currentTarget.classList.add("is-active");
    }

    return <>
        <nav>
            <ul>
                {navList.map(navItem => {
                    return <li key={navItem.value} onClick={handleNavigationClick} className={navItem.classes}>
                        <a href={navItem.url}>{navItem.label}</a>
                    </li>
                })}
                <li>
                    <ThemeSwitcher />
                </li>
            </ul>
        </nav>
    </>
}