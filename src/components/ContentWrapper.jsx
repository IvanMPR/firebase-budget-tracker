function ContentWrapper({ children }) {
  return (
    <div className=' flex px-2 justify-between items-center w-full md:w-4/5 md:m-auto'>
      {children}
    </div>
  );
}
export default ContentWrapper;
