import { useSignupContext } from "./contexts/SignupContext";

function SignupForm() {
  const { email, setEmail, password, setPassword, onSubmit } =
    useSignupContext();
  return (
    <form>
      <div className=' flex flex-col justify-center mb-2'>
        <input
          type='email'
          label='Email address'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder='Enter your email address'
          className=' w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72'
        />
      </div>

      <div className=' flex flex-col justify-center text-left '>
        <input
          type='password'
          label='Create password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          placeholder='Type in your password'
          className=' w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72'
        />
      </div>
      <div className='mt-5 px-1'>
        <button
          type='submit'
          className=' inline-block w-full  rounded-full bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs'
          onClick={onSubmit}
        >
          Sign up
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
