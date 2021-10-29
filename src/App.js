import "./App.css";
import Header from "./components/particles/Header";
import Navtabs from "./components/particles/Navtabs";

const App = () => {
  document.title = "(xx) Aircall Phone";
  return (
    <div className="app-container" id="app">
      {/* <Header /> */}
      <Navtabs />
    </div>
  );
}

export default App;
