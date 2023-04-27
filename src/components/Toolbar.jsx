import { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';

const ToolbarStyled = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    max-width: 900px;
    padding: 10px 40px;
`;

const ShoppingCartContainerStyled = styled.div`
    position: relative;
`;

const ShoppingCartTotalStyled = styled.div`
    background-color: #e73830;
    border-radius: 50%;
    bottom: -10px;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    height: 1.2rem;
    left: -5px;
    position: absolute;
    width: 1.2rem;
`;

export const Toolbar = () => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/carts/user/1')
            .then(res => res.json())
            .then(data => {
                setCart(data);
            });
    }, []);

    return (
        <ToolbarStyled>
            <ShoppingCartContainerStyled>
                <FaShoppingCart size={25} />
                <ShoppingCartTotalStyled>{cart?.carts[0].totalProducts}</ShoppingCartTotalStyled>
            </ShoppingCartContainerStyled>
        </ToolbarStyled>
    )
}