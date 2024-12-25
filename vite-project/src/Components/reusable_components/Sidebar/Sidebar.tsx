import React, { useId } from "react";
import "./Sidebar.css";

interface SidebarItem {
    name: string;
    link: string;
}

interface SidebarProps {
    title: string;
    items: SidebarItem[];
}

function Sidebar({ title, items }: SidebarProps) {
    const id = useId();

    return (
        <div className="sidebar">
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
        </div>
    );
}

export default Sidebar;