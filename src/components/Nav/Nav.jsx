import Text from "components/Common/Text/Text";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <Text as={"h1"} size={"xLarge"} color={"cabana"}>
              Plan-It
            </Text>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
