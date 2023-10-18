import Canvas from "./components/canvas/Canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <div className="h-10"></div>
      <Customizer />
    </main>
  );
}

export default App;
