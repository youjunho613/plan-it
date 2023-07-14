import styled, { css } from "styled-components";

const SIZES = {
  small: {
    height: "1rem",
    fontSize: "0.85rem",
    borderRadius: "0.8rem"
  },
  medium: {
    height: "2rem",
    fontSize: "1rem",
    borderRadius: "0.9rem"
  },
  large: {
    height: "3rem",
    fontSize: "1.25rem",
    borderRadius: "1rem"
  }
};

export const Button = styled.button`
  ${props => css`
    height: ${SIZES[props.size]?.height};

    margin: 5px;
    padding: 5px;

    background-color: ${props.theme.colors[props.$bgcolor]};
    border-radius: ${SIZES[props.size]?.borderRadius};
    box-shadow: 1px 4px 0 rgb(0, 0, 0, 0.5);

    color: ${props.theme.colors[props.color]};
    font-size: ${SIZES[props.size]?.fontSize};
    font-weight: ${props.fontWeight};
    letter-spacing: 1.2px;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
      position: relative;
      top: 2px;
    }
  `}
`;
