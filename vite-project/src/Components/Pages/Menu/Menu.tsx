import React from 'react';
import './Menu.css';
import Button from '../../reusable_components/Button/Button';
import CardList from '../../reusable_components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { setCategory } from '../../../redux/slices/menuSlice';

function Menu() {
    const dispatch = useDispatch<AppDispatch>();
    const selectedCategory = useSelector((state: RootState) => state.menu.selectedCategory);

    const handleFilterClick = (category: string): void => {
        dispatch(setCategory(category));
    };

    return (
        <div className="MenuSection">
            <h1 className="MenuTitle">Browse our menu</h1>
            <h3 className="MenuSubtitle">
                Use our menu to place an order online, or{' '}
                <span className="tooltip">
                    phone{' '}
                    <span className="tooltip-text">+1 (234) 567-890</span>
                </span>{' '}
                our store to place a pickup order. Fast and fresh food.
            </h3>
            <div className="ButtonSection">
                <Button
                    text="Dessert"
                    onClick={() => handleFilterClick('Dessert')}
                    isActive={selectedCategory === 'Dessert'} />
                <Button
                    text="Dinner"
                    onClick={() => handleFilterClick('Dinner')}
                    isActive={selectedCategory === 'Dinner'} />
                <Button
                    text="Breakfast"
                    onClick={() => handleFilterClick('Breakfast')}
                    isActive={selectedCategory === 'Breakfast'} />
            </div>

            <div className="CardListSection">
                <CardList category={selectedCategory} />
            </div>

            <Button text="See more" isActive={false} customClass="more-button" />
        </div>
    );
}

export default Menu;


