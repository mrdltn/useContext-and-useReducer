// import { State } from "./hooks/State";
import { Context } from "./hooks/Context";
import {Books} from "./components/Books";
import AppRed from "./AppReducer";


function App() {

  return <Context>
    <Books />
    <AppRed />
  </Context>

}


export default App;