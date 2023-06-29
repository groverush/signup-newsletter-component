import iconSuccess from "../assets/images/icon-success.svg"
const Submited = ({ email, onClick }) => {
  return (
    <div className="flex-1 py-24 px-8 flex flex-col items-center justify-between text-blue-950 h-full gap-y-12 max-w-[420px] md:px-6 md:py-8">
      <div className="flex-1">
        <img className="w-12 h-12" src={iconSuccess} alt="success-icon" />
        <h2 className="my-6 text-[32px] leading-8 font-semibold md:text-[42px] md:leading-10">
          Thanks for subscribing!
        </h2>
        <p className="font-light max-w-[280px] md:max-w-full">
          A confirmation email has been sent to{" "}
          <span className="font-semibold">{email}</span>. Please open it and
          click the button inside to confirm your subscription.
        </p>
      </div>
      <div className="w-full">
        <button
          className="bg-blue-950 py-3  w-full text-white rounded-md font-semibold tracking-wide shadow-md shadow-black active:shadow-none active:text-gray-200 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-red-500 hover:shadow-pink-400 hover:shadow-md"
          onClick={onClick}
        >
          Dismiss message
        </button>
      </div>
    </div>
  )
}
export default Submited
