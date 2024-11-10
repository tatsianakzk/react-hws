import React, { Component } from 'react';
import './Main.css';
import Button from '../../reusable_components/Button/Button';
import CardList from '../../reusable_components/Card/Card';

class Main extends Component {
    render() {
        return (
            <main className="main-section">
                <h1 className='MenuTitle'>
                    Browse our menu
                </h1>
                <h3 className='MenuSubtitle'>
                    Use our menu to place an order online, or <span className='tooltip'>phone <span className="tooltip-text">+1 (234) 567-890</span></span> our store to place a pickup order. Fast and fresh food.
                </h3>
                <div className='ButtonSection'>
                    <Button text="Dessert" isActive />
                    <Button text="Dinner" />
                    <Button text="Breakfast" />
                </div>

                <div className='CardListSection'>
                    <CardList />
                </div>

                <Button text="See more" isActive customClass='more-button' />
            </main>
        );
    }
}

export default Main;