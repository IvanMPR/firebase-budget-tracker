import ContentWrapper from "../components/ContentWrapper";

function Inputs({ children }) {
  return (
    <ContentWrapper>
      <div className=' flex justify-between items-center py-2 px-4 my-4 m-auto w-full border-solid border-4'>
        {children}
      </div>
    </ContentWrapper>
  );
}
export default Inputs;
