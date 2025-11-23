import Counter from "./component/Counter"
import Display from "./component/Display"
import Login from "./component/Login"
import UserContextProvide from "./store/UserContextProvide"
import { Provider } from "react-redux"
import store from "./app/store"

function App() {
  return (
    <>
    {/* <UserContextProvide>
<Login/>
<Display/>
</UserContextProvide> */}
<Provider store={store}>
<Counter/>
</Provider>
</>

  )
}

export default App
