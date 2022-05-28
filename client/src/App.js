import "./App.css";
import {
  Router,
  Routers,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Welcome from "./component/Welcome";
import Createhouse from "./component/Createhouse";
import Logementsell from "./component/Logementsell";
import Listpers from "./component/Listpers";
import Listvisit from "./component/Listvisit";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/create" element={<Createhouse />} />
          <Route exact path="/annuler" element={<Welcome />} />
          <Route exact path="/logementsell" element={<Logementsell />} />
          <Route exact path="/listprsn" element={<Listpers />} />

          <Route exact path="/listvisit" element={<Listvisit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
