function Amount({ bgColor, children, ring }) {
  return (
    <div
      className={` ${bgColor} border-y-4 border-slate-700   uppercase flex justify-between items-center my-4 m-auto w-96 py-2 px-4 }`}
    >
      {children}
    </div>
  );
}
export default Amount;
