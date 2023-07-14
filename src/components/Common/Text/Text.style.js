const { styled, css } = require("styled-components");

const FONT_SIZE = {
  xLarge: "3rem",
  large: "2rem",
  medium: "1.2rem",
  small: "0.8rem"
};

export const Text = styled.p`
  ${props => css`
    margin: 2px 0;

    font-size: ${FONT_SIZE[props.size]};
    font-weight: ${props.fontWeight};
    letter-spacing: ${props.letterSpacing};
    line-height: 1.2;
    white-space: pre-wrap;
    text-align: ${props.$textalign};
    color: ${props.theme.colors[props.color]};
  `}
`;
