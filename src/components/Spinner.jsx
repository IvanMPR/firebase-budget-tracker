import { RotatingLines } from "react-loader-spinner";

function Spinner() {
  return (
    <div className=' flex items-center justify-center'>
      <RotatingLines
        visible={true}
        height='48'
        width='48'
        color='#333'
        strokeWidth='3'
        animationDuration='0.75'
        ariaLabel='rotating-lines-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  );
}
export default Spinner;
