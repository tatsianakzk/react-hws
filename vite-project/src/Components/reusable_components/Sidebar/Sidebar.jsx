import React from 'react';
import './Sidebar.css';

const Sidebar = ({ title, items }) => {
    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">{title}</h2>
            <nav className="sidebar-nav">
                {items.map((item) => (
                    <a
                        key={item.id}
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