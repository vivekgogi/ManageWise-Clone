import "./App.css";
import HomePage from "./pages/HomePage";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
