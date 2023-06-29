import Newsletter from "./pages/Newsletter"
import { Footer } from "./components"
const App = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-between items-center  ">
      <Newsletter />
      <Footer />
    </div>
  )
}
export default App
