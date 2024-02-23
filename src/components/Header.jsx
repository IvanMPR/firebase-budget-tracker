import Logo from "./Logo";
import Avatar from "./Avatar";
import ContentWrapper from "./ContentWrapper";
import Login from "../pages/Login";

import { useAuthContext } from "../contexts/AuthContext";

function Header() {
  const { user } = useAuthContext();

  return (
    <header className=' flex flex-col  bg-yellow-400 justify-center items-center w-full md:h-[4.5rem] md:flex-row md:justify-between'>
      <ContentWrapper>
        <Logo />
        {user ? <Avatar /> : <Login />}
      </ContentWrapper>
    </header>
  );
}

export default Header;
