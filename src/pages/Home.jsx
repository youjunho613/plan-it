import TodoList from "components/features/crud/TodoList";
import { styled } from "styled-components";

const Home = () => {
  return (
    <FlexBox>
      <TodoList></TodoList>
    </FlexBox>
  );
};

const FlexBox = styled.div`
  display: flex;
`;

export default Home;
