import React, { useEffect, useState } from 'react';
import './Card.css';
import Button from '../Button/Button';

interface Product {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
}

interface CardProps {
    product: Product;
}

function Card({ product }: CardProps) {
    return (
        <div className="Card">
            <img src={product.image} alt={product.title} className="card-image" />
            <div className="description-price-input">
                <span className="description-price">
                    <h3>{product.title}</h3>
                    <span>${product.price.toFixed(2)}</span>
                </span>
                <p>{product.description}</p>
                <span className="CardInputLine">
                    <input
                        type="number"
                        defaultValue="1"
                        min="1"
                        className="CardInput" />
                    <Button text="Add to cart" isActive />
                </span>
            </div>
        </div>
    );
}

interface CardListProps {
    category?: string;
}

function CardList({ category }: CardListProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals'
                );
                const data = await response.json();

                const formattedData: Product[] = data.map((item: any) => ({
                    id: item.id,
                    title: item.meal,
                    description: item.instructions.split(' ').slice(0, 10).join(' ') + '...',
                    image: item.img,
                    price: item.price,
                    category: item.category,
                }));

                setProducts(formattedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const filteredProducts = category
        ? products.filter((product) => product.category === category)
        : products;

    return (
        <div className="CardList">
            {filteredProducts.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
}

export default CardList;