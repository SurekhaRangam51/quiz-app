import { Route, Routes } from "react-router-dom";
import { Home, Login,Quiz, Result,SignUp } from "./pages/index";
import "./App.css"

const App=()=>{
  return (
    <div className="app">
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}
export default App;