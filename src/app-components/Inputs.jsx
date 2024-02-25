import ContentWrapper from "../components/ContentWrapper";
import FormInputs from "./FormInputs";
import RadioInputs from "./RadioInputs";
function Inputs() {
  return (
    <ContentWrapper>
      <div className='flex flex-col justify-between items-center py-2 px-4 my-4 m-auto w-full border-solid border-slate-700 border-2 xl:flex-row '>
        <RadioInputs />
        <FormInputs />
      </div>
    </ContentWrapper>
  );
}
export default Inputs;
