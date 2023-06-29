import { useState } from "react"
import { Header, Body, Form, Submited } from "../components"
const Newsletter = () => {
  const [submited, setSubmited] = useState(false)
  const [email, setEmail] = useState("")
  function handleChange(e) {
    setEmail(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    setSubmited(true)
  }
  function handleClick() {
    setSubmited(false)
    setEmail("")
  }
  return (
    <div
      className={`md:rounded-3xl bg-white max-w-[345px]  md:max-w-[768px] md:p-5 md:scale-75 md:mt-6`}
    >
      {!submited ? (
        <div className="flex flex-col md:flex-row-reverse w-full h-full">
          <Header />
          <Body
            children={
              <Form
                email={email}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            }
          />
        </div>
      ) : (
        <Submited email={email} onClick={handleClick} />
      )}
    </div>
  )
}
export default Newsletter
