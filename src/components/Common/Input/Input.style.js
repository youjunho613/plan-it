import styled, { css } from "styled-components";

const SIZES = {
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
  },
  patch: {
    width: "100%",
    fontSize: "1.2rem",
    borderRadius: "20px"
  },
  post: {
    width: "800px",
    fontSize: "2rem",
    borderRadius: "20px"
  }
};
export const Input = styled.input`
  ${({ color, theme, size }) => css`
    width: ${SIZES[size]?.width};
    height: ${SIZES[size]?.height};

    margin: 5px;
    padding: 5px;

    border: none;
    outline: none;
    border-radius: ${SIZES[size]?.borderRadius};
    background-color: ${theme.colors[color]};

    font-size: ${SIZES[size]?.fontSize};

    &:focus {
      filter: invert(1);
    }
  `};
`;

export const Textarea = styled(Input)`
  height: 300px;
  resize: none;
`;
