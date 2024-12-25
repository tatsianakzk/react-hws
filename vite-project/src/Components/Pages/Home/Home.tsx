import React, { useEffect } from 'react';
import styled from 'styled-components';
import star from '../../../assets/icons/star.png';
import main_img from '../../../assets/pictures/main_img.png';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { fetchInitialData, placeOrder } from '../../../redux/slices/homeSlice';

const HomeContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10%;
  background-color: rgba(245, 251, 252, 1);
  font-family: Arial, sans-serif;
  color: black;
`;

const HomeContent = styled.div`
  max-width: 600px;
  margin-bottom: 2rem;
`;

const HomeHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 1rem;

  .highlight {
    color: rgba(53, 184, 190, 1);
  }
`;

const HomeDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  background-color: rgba(53, 184, 190, 1);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: rgba(45, 150, 155, 1);
    transform: scale(1.05);
  }

  &:active {
    background-color: rgba(40, 135, 140, 1);
    transform: scale(0.95);
  }

  &:disabled {
    background-color: rgba(200, 200, 200, 1);
    cursor: not-allowed;
  }
`;

const Trustpilot = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      width: 20px;
      height: 20px;
    }

    p {
      font-weight: bold;
      font-size: 0.9rem;
    }
  }

  .reviewText {
    font-size: 0.9rem;
    color: #777;

    .trustpilot-rating {
      color: rgba(53, 184, 190, 1);
      font-weight: bold;
    }
  }
`;

const HomeImage = styled.div`
  margin-left: 2rem;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);

  const handleOrderClick = () => {
    dispatch(placeOrder({ order: 'Burger', quantity: 1 }));
  };

  return (
    <HomeContainer>
      <div>
        <h1>
          Beautiful food & takeaway, <span style={{ color: 'rgba(53, 184, 190, 1)' }}>delivered</span> to your door.
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.
        </p>
        <Button onClick={handleOrderClick} disabled={isLoading}>
          {isLoading ? 'Placing Order...' : 'Place an Order'}
        </Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Trustpilot>
          <div>
            <img src={star} alt="Trustpilot" />
            <p>Trustpilot</p>
            <p>
              <span style={{ color: 'rgba(53, 184, 190, 1)', fontWeight: 'bold' }}>4.8 out of 5</span> based on 2000+
              reviews
            </p>
          </div>
        </Trustpilot>
      </div>
      <div>
        <img src={main_img} alt="Delicious food" />
      </div>
    </HomeContainer>
  );
};

export default Home;

