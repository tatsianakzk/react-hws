import React from 'react';
import './Main.css';
import Button from './../../reusable_components/Button/Button';
import CardList from '../../reusable_components/Card/Card';



function Main() {
    return (

        <main className="main-section">

            <h1 className='MenuTitle'>
                Browse our menu
            </h1>
            <h3 className='MenuSubtitle'>
                Use our menu to place an order online, or <span className='highlight'>phone </span>our store to place a pickup order. Fast and fresh food.
            </h3>
            <div className='ButtonSection'>
                <Button text="Desert" isActive />
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

export default Main;