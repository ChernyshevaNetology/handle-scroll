import Scroll from "./components/Scroll";
import Paragraph from "./components/Paragraph";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Scroll />
      {[...new Array(100).keys()].map((p) => (
        <Paragraph key={Math.random()} />
      ))}
    </div>
  );
}

export default App;
