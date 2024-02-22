function ContentWrapper({ children }) {
  return (
    <div className=' flex  px-2 justify-between items-center w-full md:w-2/3'>
      {children}
    </div>
  );
}
export default ContentWrapper;
