import Header from "../components/Header";
import SignupForm from "../components/SignupForm";
// import Home from "../components/Home";
import ContentWrapper from "../components/ContentWrapper";

function SignupPage() {
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
            <div>
              <SignupForm />
            </div>
          </div>
        </ContentWrapper>
      </section>
    </>
    // <div className='flex flex-col items-start justify-center'>
    //   <div className='bg-stone-100 w-full p-32 h-screen'>
    //     <div className='flex flex-col items-center justify-center bg-yellow-400 w-96 m-auto p-2 border-solid border-2 border-stone-700 rounded-2xl '>
    //       <h2 className=' uppercase text-stone-700 text-lg tracking-widest p-4 font-bold text-center'>
    //         Create Account
    //       </h2>
    //       <SignupForm />
    //     </div>
    //   </div>
    // </div>
  );
}

export default SignupPage;
