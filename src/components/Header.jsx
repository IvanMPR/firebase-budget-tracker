import Logo from "./Logo";
import Avatar from "./Avatar";
import ContentWrapper from "./ContentWrapper";
import { getAuth } from "firebase/auth";
import Login from "../pages/Login";

const auth = getAuth();

function Header() {
  const user = auth.currentUser;
  console.log(user);
  return (
    <header className=' flex p-4 bg-yellow-400 justify-center items-center'>
      <ContentWrapper>
        <Logo />
        {user ? <Avatar /> : <Login />}
      </ContentWrapper>
    </header>
  );
}

export default Header;
