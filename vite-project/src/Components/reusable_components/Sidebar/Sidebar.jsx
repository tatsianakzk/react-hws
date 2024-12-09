import React, { useId } from "react";
import "./Sidebar.css";

const Sidebar = ({ title, items }) => {
    const id = useId();

    return (
        <aside className="sidebar">
            <h2 className="sidebarTitle">{title}</h2>
            <nav className="sidebarNav">
                {items.map((item, index) => (
                    <a
                        key={`${id}-${index}`}
                        href={item.link}
                        className="sidebarKey"
                    >
                        {item.name}
                    </a>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;