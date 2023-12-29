function Amount({ bgColor, children }) {
  return (
    <div className='amount' style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
}
export default Amount;
