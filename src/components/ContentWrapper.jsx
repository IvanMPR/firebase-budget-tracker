function ContentWrapper({ children }) {
  return (
    <div className=' flex m-auto justify-between items-center w-2/3'>
      {children}
    </div>
  );
}
export default ContentWrapper;
