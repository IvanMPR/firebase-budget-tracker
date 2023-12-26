import LogoutButton from "./LogoutButton";

function Avatar() {
  return (
    <div className='flex items-center'>
      <div className='mx-5'>
        <LogoutButton />
      </div>
      <div className='flex items-center'>
        <span className=' mr-1  text-stone-700'>Anonymous</span>
        <span className=' ml-1 '></span>
      </div>
    </div>
  );
}
export default Avatar;
