import styled, { css } from "styled-components";

const sizes = {
  small: {
    width: "200px",
    height: "30px",
    fontSize: "20px",
    borderRadius: "10px"
  },
  medium: {
    width: "300px",
    height: "45px",
    fontSize: "35px",
    borderRadius: "15px"
  },
  large: {
    width: "400px",
    height: "60px",
    fontSize: "50px",
    borderRadius: "20px"
  }
};
export const Input = styled.input`
  ${({ color, theme, size }) => css`
    width: ${sizes[size]?.width};
    height: ${sizes[size]?.height};

    padding: 5px;

    border: none;
    outline: none;
    border-radius: ${sizes[size]?.borderRadius};
    background-color: ${theme.colors[color] || theme.colors.white};

    font-size: ${sizes[size]?.fontSize};

    &:focus {
      filter: invert(1);
    }
  `};
`;
