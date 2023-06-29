import successIcon from "../assets/images/icon-success.svg"
const Body = (props) => {
  const successIconStyles = "h-5 mr-2 mt-[3px]"
  return (
    <main id="body" className="bg-white py-8 px-6 text-blue-950 md:pl-8">
      <h1 className="text-[32px] font-bold tracking-wide">Stay updated!</h1>

      <p className="my-3 leading-5">
        Join 60.000+ product managers receiving monthly updates on:
      </p>

      <ul className="benefits flex flex-col gap-y-4 md:mt-6">
        <li className="flex leading-6">
          <img
            className={successIconStyles}
            src={successIcon}
            alt="success-icon"
          />
          Product discovery and building what matters
        </li>

        <li className="flex leading-6">
          <img
            className={successIconStyles}
            src={successIcon}
            alt="success-icon"
          />
          Measuring to ensure updates are a success
        </li>

        <li className="flex leading-6">
          <img
            className={successIconStyles}
            src={successIcon}
            alt="succes-icon"
          />
          And much more!
        </li>
      </ul>
      {props.children}
    </main>
  )
}
export default Body
