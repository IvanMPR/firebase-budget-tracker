import { ThreeDots } from "react-loader-spinner";

function SmallSpinner() {
  return (
    <div className=' flex items-center justify-center'>
      <ThreeDots
        visible={true}
        height='20'
        width='20'
        color='#facc15'
        radius='9'
        ariaLabel='three-dots-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  );
}
export default SmallSpinner;
