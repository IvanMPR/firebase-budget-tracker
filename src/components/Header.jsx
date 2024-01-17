import Logo from "./Logo";
import Avatar from "./Avatar";
import ContentWrapper from "./ContentWrapper";
import Login from "../pages/Login";

import { auth } from "../firebase";

function Header() {
  const user = auth.currentUser;
  // console.log(user);
  return (
    <header className=' flex p-4 bg-yellow-400 justify-center items-center w-full h-[4.5rem]'>
      <ContentWrapper>
        <Logo />
        {user ? <Avatar /> : <Login />}
      </ContentWrapper>
    </header>
  );
}

export default Header;
