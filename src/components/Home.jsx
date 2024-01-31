import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentWrapper from "./ContentWrapper";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <section
        style={{
          backgroundImage: ` url('/bgd.png')`,
          height: "calc(100vh - 4.5rem)",
        }}
        className='w-full bg-cover  bg-top'
      >
        <ContentWrapper>
          <div
            style={{
              height: "calc(100vh - 4.5rem)",
            }}
            className=' flex flex-col p-4 items-left justify-center'
          >
            <p className=' text-stone-700 text-5xl w-2/3 leading-[4rem] mb-8'>
              Keep track of your finances with this awesome app!
            </p>
            <div>
              <Link to='/signup'>
                <button className='inline-block rounded-full w-40 bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs'>
                  <FontAwesomeIcon icon={faUserPlus} /> Sign Up Here
                </button>
              </Link>
            </div>
          </div>
        </ContentWrapper>
      </section>
    </>
  );
}
export default Home;
