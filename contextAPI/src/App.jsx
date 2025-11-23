import Display from "./component/Display"
import Login from "./component/Login"
import UserContextProvide from "./store/UserContextProvide"


function App() {
  return (
<UserContextProvide>
<Login/>
<Display/>
</UserContextProvide>
  )
}

export default App
