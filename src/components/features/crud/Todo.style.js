const { styled } = require("styled-components");

export const Ol = styled.ol`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;

  width: 1200px;

  margin: 50px auto;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;

  position: relative;

  min-width: 100px;
  max-width: 550px;
  min-height: 150px;

  margin: 10px;
  padding: 20px;

  background-color: ${props => props.theme.colors[props.$bgcolor]};
  border-radius: 20px;

  cursor: pointer;
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

export const PatchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivBox = styled.div`
  width: 1000px;

  margin: 100px auto;
  padding: 40px;

  background-color: ${props => props.theme.colors.sand};
  border-radius: 40px;

  letter-spacing: 1.5px;
`;
