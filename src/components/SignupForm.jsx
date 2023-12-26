import { useSignupContext } from "./contexts/SignupContext";

function SignupForm() {
  const { email, setEmail, password, setPassword, onSubmit } =
    useSignupContext();
  return (
    <form>
      <div className=' flex flex-col justify-center mb-2'>
        <label htmlFor='email-address' className='  mx-1 my-0 text-left italic'>
          Email address
        </label>
        <input
          type='email'
          label='Email address'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder='Email'
          className=' m-1 p-1 border-solid border-2 border-indigo-600 rounded'
        />
      </div>

      <div className=' flex flex-col justify-center text-left '>
        <label htmlFor='password' className='mx-1 my-0 italic'>
          Password
        </label>
        <input
          type='password'
          label='Create password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          placeholder='Password'
          className=' m-1 p-1 border-solid border-2 border-indigo-600 rounded'
        />
      </div>
      <div className='mt-5 px-1'>
        <button
          type='submit'
          className=' text-center p-1  text-xl hover:text-white bg-blue hover:bg-blue-dark rounded size-full transition'
          onClick={onSubmit}
        >
          Sign up
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
