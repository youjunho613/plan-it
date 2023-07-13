import { useCallback, useState } from "react";

const usePrintError = error => {
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    common: "",
    server: ""
  });

  const printError = useCallback(error => {
    switch (error) {
      case "auth/user-not-found" || "auth/wrong-password":
        return setErrorMessage("이메일 혹은 비밀번호가 일치하지 않습니다.");
      case "auth/email-already-in-use":
        return setErrorMessage("이미 사용하는 이메일입니다.");
      case "auth/weak-password":
        return setErrorMessage("비밀번호를 6자 이상 입력해주세요");
      case "auth/missing-password":
        return setErrorMessage("비밀번호가 틀립니다.");
      case "auth/invalid-email":
        return setErrorMessage("유효하지 않은 이메일 입니다.");
      case "auth/admin-restricted-operation":
        return setErrorMessage("필수입력 사항을 작성해주세요.");
      case "auth/internal-error":
        return setErrorMessage("잘못된 요청입니다.");
      case "auth/network-request-failed":
        return setErrorMessage("네트워크 연결에 실패 하였습니다.");
      case "비밀번호가 일치하지 않습니다.":
        return setErrorMessage("비밀번호가 일치하지 않습니다.");
      default:
        console.log("New Error code:", error.code);
    }
  }, []);

  return { errorMessage, printError, setErrorMessage };
};

export default usePrintError;
