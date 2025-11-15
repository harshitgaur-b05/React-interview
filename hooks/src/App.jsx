import './App.css'
import ShowData from './component/ShowData'
import SerchFilter from './component/SerchFilter'
import SerchFilterWithDebounce from './component/SerchFilterWithDebounce'
import DataShowcase from './component/DataShowcase'
function App() {
  return (
    <>
    <SerchFilterWithDebounce/>
    <SerchFilter/>
    <ShowData/>
    <DataShowcase/>
    </>
  )
}

export default App
