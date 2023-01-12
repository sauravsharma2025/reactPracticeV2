import styled from "styled-components";

export const Container = styled.div`
  background-color: #eeee;
  padding: 12px;
  margin: 12px;
`;

export const Text = styled.p`
  color: #000;
`;
export const Another = styled.p`
  font-size: 30px;
`;
export const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  margin: ${(props) => (props.p ? "30px" : "150px")};

  font-size: 1em;

  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
