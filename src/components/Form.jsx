import { useState } from "react"
const Form = ({ email, onChange, onSubmit }) => {
  const [innvalidMessage, setInvalidMessage] = useState("")
  return (
    <form
      className="flex flex-col mt-8 gap-y-4 justify-center  w-full pr-4"
      onSubmit={onSubmit}
    >
      <div className="flex justify-between items-center">
        <label className="font-semibold text-sm inline-block" htmlFor="email">
          Email address
        </label>
        {innvalidMessage && (
          <span className="text-red-600 font-semibold text-xs">
            {innvalidMessage}
          </span>
        )}
      </div>

      <input
        className={`border-gray-300 border-2 rounded-md px-4 py-3 focus:outline-none ${
          innvalidMessage ? "bg-red-200 text-red-600" : ""
        }`}
        id="email"
        type="email"
        value={email}
        onChange={onChange}
        placeholder="email@company.com"
        onInvalid={() => {
          setInvalidMessage("Valid email required")
        }}
        required
      />
      <button
        className="bg-blue-950 py-3 text-white box-border rounded-md font-medium text-sm shadow-md shadow-black active:shadow-none active:text-gray-200 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-red-500 hover:shadow-pink-400 hover:shadow-md"
        type="submit"
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  )
}
export default Form
