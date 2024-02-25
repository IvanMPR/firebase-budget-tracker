import Logo from "./Logo";
import Avatar from "./Avatar";
import ContentWrapper from "./ContentWrapper";
import Login from "../pages/Login";

import { useAuthContext } from "../contexts/AuthContext";
import { useBudgetTrackerContext } from "../contexts/BudgetTrackerContext";

function Header() {
  const { user } = useAuthContext();
  const { isSmallScreen } = useBudgetTrackerContext();

  return (
    <header className=' flex flex-col py-2  bg-yellow-400 justify-center items-center w-full md:h-[4.5rem] md:flex-row md:justify-between xl:flex-row '>
      <ContentWrapper>
        {isSmallScreen && <Logo />}
        {user ? <Avatar /> : <Login />}
      </ContentWrapper>
    </header>
  );
}

export default Header;
