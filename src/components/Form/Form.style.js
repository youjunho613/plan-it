import { css, styled } from "styled-components";

export const FormColumnBox = styled.form`
  ${props => css`
    display: flex;
    flex-direction: column;

    gap: 25px;

    padding: ${props.padding};
    background-color: ${props.theme.colors[props.$bgcolor]};
    border-radius: 40px;
  `}
`;
