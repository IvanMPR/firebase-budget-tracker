import Header from "../components/Header";
import SignupForm from "../components/SignupForm";
import ContentWrapper from "../components/ContentWrapper";

function SignupPage() {
  return (
    <>
      <Header />
      <section
        style={{
          backgroundImage: ` url('bgd.jpg')`,
          height: "calc(100vh - 4.5rem)",
        }}
        className='w-full bg-cover bg-top'
      >
        <ContentWrapper>
          <div
            style={{
              height: "calc(100vh - 4.5rem)",
            }}
            className=' flex flex-col  p-4 items-left justify-center'
          >
            <div>
              <SignupForm />
            </div>
          </div>
        </ContentWrapper>
      </section>
    </>
  );
}

export default SignupPage;
