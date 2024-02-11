// import SortOptions from "./SortOptions";

function ListHeader({ icon, h2Text }) {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <h2 className='uppercase font-semibold mb-2 text-stone-700'>
          {icon}
          {h2Text}
        </h2>
      </div>
      {/* <div><SortOptions listType={h2Text} /></div> */}
    </div>
  );
}
export default ListHeader;
