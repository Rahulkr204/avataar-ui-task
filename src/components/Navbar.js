import React, { useEffect, useState } from "react";
import "../styles/navbar.scss";

const MAX_VISIBLE_ITEMS = 7;
export default function Navbar({ menuItems }) {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [visibleItems, setVisibleItems] = useState([]);
    const [hiddenItems, setHiddenItems] = useState([]);


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth >= 960) {
            setVisibleItems(menuItems.slice(0, MAX_VISIBLE_ITEMS));
            setHiddenItems(menuItems.slice(MAX_VISIBLE_ITEMS));
        } else {
            setVisibleItems(menuItems);
            setHiddenItems([]);
        }
    }, [menuItems, windowWidth]);

    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
                MacroSoft
            </a>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                {/* icon from Heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={
                    isNavExpanded
                        ? "navigation-menu expanded"
                        : "navigation-menu"
                }
            >
                <ul className="menu">
                    {visibleItems.map((item) => (
                        <li key={item.id}>{item.text.toUpperCase()}</li>
                    ))}
                    {hiddenItems.length > 0 && (
                        <li className="more">
                            <button>MORE</button>
                            <ul className="more-menu">
                                {hiddenItems.map((item) => (
                                    <li key={item.id}>
                                        {item.text.toUpperCase()}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    )}
                </ul>
            </div>
            <div className="searchContainer">
                <input placeholder="Search something" />
            </div>
        </nav>
    );
}
