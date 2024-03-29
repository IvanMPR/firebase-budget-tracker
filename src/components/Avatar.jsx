import LogoutButton from "./LogoutButton";
import User from "./UserIcon";

import { useAuthContext } from "../contexts/AuthContext";

function Avatar() {
  const { user } = useAuthContext();
  const username = user.email.split("@")[0];
  return (
    <div className='flex items-center'>
      <div className='mx-5'>
        <LogoutButton />
      </div>
      <div className='flex items-center'>
        <span className=' mr-1  text-stone-700'>{`${username}`}</span>
        <span className=' ml-1 '>
          <User />
        </span>
      </div>
    </div>
  );
}
export default Avatar;
