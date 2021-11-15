import styled from '@emotion/styled';

export default styled.button`
  padding: 0.75rem;
  font-weight: bold;
  color: white;
  background-color: hotpink;
  cursor: pointer;
  border: none;
  transition: transform 30ms linear;
  :hover {
    background-color: #ff3298;
  }
  :active {
    transform: scale(0.8);
  }
`;
