import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        const { title, items } = this.props;

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
    }
}

export default Sidebar;