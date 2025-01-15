import React, { useEffect, useState } from 'react';
import './Card.css';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addItemToOrder } from '../../../redux/slices/orderSlice';

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

interface CardListProps {
    category?: string;
    visibleCount: number;
}

function CardList({ category, visibleCount }: CardListProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useDispatch();

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

    const visibleProducts = filteredProducts.slice(0, visibleCount);

    console.log('Filtered products:', filteredProducts);
    console.log('Visible products:', visibleProducts);

    return (
        <div className="CardList">
            {visibleProducts.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
}

function Card({ product }: CardProps) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const quantity = parseInt(
            (document.getElementById(`quantity-${product.id}`) as HTMLInputElement).value,
            10
        );
        if (quantity > 0) {
            dispatch(
                addItemToOrder({
                    id: product.id,
                    name: product.title,
                    image: product.image,
                    price: product.price,
                    quantity,
                })
            );
        }
    };

    return (
        <div className="Card">
            <img src={product.image} alt={product.title} className="cardImage" />
            <div className="descriptionPriceInput">
                <span className="descriptionPrice">
                    <h3>{product.title}</h3>
                    <span>${product.price.toFixed(2)}</span>
                </span>
                <p>{product.description}</p>
                <span className="CardInputLine">
                    <input
                        id={`quantity-${product.id}`}
                        type="number"
                        defaultValue="1"
                        min="1"
                        className="CardInput"
                    />
                    <Button text="Add to cart" isActive onClick={handleAddToCart} customClass="AddToCartBtn" />
                </span>
            </div>
        </div>
    );
}

export default CardList;