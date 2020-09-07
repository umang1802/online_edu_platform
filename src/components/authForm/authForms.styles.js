import styled from 'styled-components';

const CatalogueHeading = styled.div`
  display: block;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

const Card = styled.div` 
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  box-sizing: border-box;
  max-width: 410px;
  margin: 25vh auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const Button = styled.button`
  background: linear-gradient(to bottom, #1DA1F2, #1DA1F2);
  border-color: #3f4eae;
  border-radius: 3px;
  padding: 1rem;
  color: white;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const Error = styled.div`
  color: white;
  background-color: red;
`;

export { Form, Input, Button, Card, Error, CatalogueHeading };