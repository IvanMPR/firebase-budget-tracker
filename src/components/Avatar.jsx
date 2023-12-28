import LogoutButton from "./LogoutButton";
import { auth } from "../firebase";
function Avatar() {
  const username = auth.currentUser.email.split("@")[0];
  return (
    <div className='flex items-center'>
      <div className='mx-5'>
        <LogoutButton />
      </div>
      <div className='flex items-center'>
        <span className=' mr-1  text-stone-700'>{`Hello, ${username}`}</span>
        <span className=' ml-1 '></span>
      </div>
    </div>
  );
}
export default Avatar;
