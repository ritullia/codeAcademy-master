import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 50px;
  height: auto;
  justify-content: space-between;
  border: 1px solid #e0dbcc;
  background-color: #e0dbcc;
  border-radius: 8px;
`;
export const CartImageContainer = styled.div`
  align-items: center;
  width: 300px;
  height: auto;
`;
export const CartImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  align-items: center;
`;
