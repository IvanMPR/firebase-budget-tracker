import { Audio } from "react-loader-spinner";

function Spinner() {
  return (
    <div className=' flex items-center justify-center'>
      <Audio
        height='50'
        width='50'
        color='#facc15'
        ariaLabel='audio-loading'
        wrapperStyle={{}}
        wrapperClass='wrapper-class'
        visible={true}
      />
    </div>
  );
}
export default Spinner;
