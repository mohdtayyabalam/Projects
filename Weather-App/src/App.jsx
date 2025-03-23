import { useState } from "react"
import Forecast from "./Component/Forecast"
import Weather from "./Component/Weather"

function App() {

  const [mode, setMode] = useState(true)
  console.log(mode)

  return (
    <div className={`w-full h-auto sm:h-[100vh] pt-6 bg-yellow-500`}>
      <Weather mode={setMode}/>
    </div>
  )
}

export default App
  