import Header from "../components/Header";
import SignupForm from "../components/SignupForm";

import Login from "./Login";
function SignupPage() {
  return (
    <div>
      <Header />

      <div className=' p-2 border-solid border-2 border-blue flex flex-col text-center w-96 m-auto mt-5 rounded-md'>
        <h2 className=' text-2xl p-4 '> Create Account </h2>
        <SignupForm />
      </div>
    </div>
  );
}

export default SignupPage;
