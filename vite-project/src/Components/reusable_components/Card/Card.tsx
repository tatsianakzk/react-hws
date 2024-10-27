import React from 'react';
import './Card.css';
import Button from './../Button/Button'


const products = [
    {
        id: 1,
        image: 'src/assets/pictures/Burger_1.png',
        title: 'Burger Dreams',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '$9.20 USD',
    },
    {
        id: 2,
        image: 'src/assets/pictures/Burger_2.png',
        title: 'Burger Waldo',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '$10.00 USD',
    },
    {
        id: 3,
        image: 'src/assets/pictures/Burger_3.png',
        title: 'Burger Cali',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '$8.00 USD',
    },
    {
        id: 4,
        image: 'src/assets/pictures/Burger_4.png',
        title: 'Burger Bacon Buddy',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '$9.99 USD',
    },
    {
        id: 5,
        image: 'src/assets/pictures/Burger_5.png',
        title: 'Burger Spicy',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '$9.20 USD',
    },
    {
        id: 6,
        image: 'src/assets/pictures/Burger_6.png',
        title: 'Burger Classic',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '$8.00 USD',
    },
];

function Card({ product }) {
    return (
        <div className='Card'>

            <img src={product.image} alt={product.title} className='card-image' />
            <div className='description-price-input'>
                <span className='description-price'>
                    <h3>{product.title}</h3>
                    <span>{product.price}</span>
                </span>
                <p>{product.description}</p>

                <span className='CardInputLine'>
                    <input type="number" defaultValue="1" min="1" className="CardInput" />
                    <Button text="Add to cart" isActive />
                </span>

            </div>
        </div>
    );
}

function CardList() {
    return products.map((product) => (
        <Card key={product.id} product={product} />
    ));
}

export default CardList;