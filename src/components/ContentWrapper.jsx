function ContentWrapper({ children }) {
  return (
    <div className=' flex px-2 justify-between items-center w-full md:w-4/5 l:w-2/3 l:m-auto xl:w-2/3 xl:m-auto md:m-auto'>
      {children}
    </div>
  );
}
export default ContentWrapper;
