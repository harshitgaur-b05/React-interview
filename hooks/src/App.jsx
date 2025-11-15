import './App.css'
import ShowData from './component/ShowData'
import SerchFilter from './component/SerchFilter'
import SerchFilterWithDebounce from './component/SerchFilterWithDebounce'
function App() {
  return (
    <>
    <SerchFilterWithDebounce/>
    <SerchFilter/>
    <ShowData/>
    </>
  )
}

export default App
