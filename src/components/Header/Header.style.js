import { styled } from "styled-components";

export const HeaderBox = styled.header`
  top: 0;
  left: 0;
  position: static;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100px;

  background-color: ${props => props.theme.main.endeavor};
  color: ${props => props.theme.main.textWhite};
`;
