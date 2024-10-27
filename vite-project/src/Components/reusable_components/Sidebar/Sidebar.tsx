import React from 'react';
import './Sidebar.css';

interface SidebarProps {
    title: string;
    items: { name: string; link: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ title, items }) => {
    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">{title}</h2>
            <nav className="sidebar-nav">
                {items.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="sidebar-item"
                    >
                        {item.name}
                    </a>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;