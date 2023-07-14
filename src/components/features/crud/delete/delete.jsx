import { deletePost } from "api/posts";
import { useMutation, useQueryClient } from "react-query";
import { ButtonBox } from "../Todo.style";
import Button from "components/Common/Button/Button";
import { useNavigate } from "react-router-dom";

const Delete = ({ changeBoolean, id }) => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deletePost, {
    onSuccess: () => queryClient.invalidateQueries("posts")
  });

  const deleteHandler = () => {
    navigate("/");
    deleteMutation.mutate(id);
  };

  return (
    <ButtonBox>
      <Button size={"large"} $bgcolor={"red"} color={"white"} onClick={deleteHandler}>
        삭제
      </Button>
      <Button size={"large"} $bgcolor={"tropics"} onClick={() => changeBoolean("delete", false)}>
        닫기
      </Button>
    </ButtonBox>
  );
};

export default Delete;
