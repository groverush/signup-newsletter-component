import { useEffect, useState } from "react"

import imageHeaderMob from "../assets/images/illustration-sign-up-mobile.svg"
import imageHeaderDesk from "../assets/images/illustration-sign-up-desktop.svg"
const Header = () => {
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)")

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  return (
    <header className="bg-white">
      <img
        className="w-full  object-cover h-full md:rounded-2xl rounded-b-lg"
        src={isMobile ? imageHeaderMob : imageHeaderDesk}
        alt="image-header"
      />
    </header>
  )
}
export default Header
