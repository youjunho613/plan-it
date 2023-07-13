import styled, { css } from "styled-components";

const HEIGHT = {
  large: "3rem",
  medium: "2rem",
  small: "1rem"
};

const BORDER_RADIUS = {
  large: "1rem",
  medium: "0.9rem",
  small: "0.8rem"
};

const FONT_SIZE = {
  large: "1.25rem",
  medium: "1rem",
  small: "0.85rem"
};

export const Button = styled.button`
  ${props => css`
    height: ${HEIGHT[props.size]};

    margin: 5px;
    padding: 5px;

    background-color: ${props.theme.colors[props.bgcolor]};
    border-radius: ${BORDER_RADIUS[props.size]};
    box-shadow: 1px 4px 0 rgb(0, 0, 0, 0.5);

    font-size: ${FONT_SIZE[props.size]};
    font-weight: ${props.fontWeight};
    letter-spacing: 1.2px;

    &:active {
      box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
      position: relative;
      top: 2px;
    }
  `}
`;
