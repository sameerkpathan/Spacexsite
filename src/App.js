import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./Pages/Home";
import Capsules from "./Pages/Capsules";
import Rockets from "./Pages/Rockets";
import About from "./Pages/About";
import Errorpage from "./Pages/Errorpage";
import CapsuleDetails from "./Pages/Capsules/CapsuleDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route exact path="/capsule" element={<Capsules />} />
        <Route exact path="/rocket" element={<Rockets />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/CapsuleDetails" element={<CapsuleDetails/>}/>
        {/* <Route path="*" element={<Errorpage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
