import Nav from "./components/Nav";
import Bio from "./components/Bio";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  return (
    <>
        <Nav />
      <div className="App-body">
        <Bio />
        <Gallery />
      </div>
    </>
  );
}

export default App;
