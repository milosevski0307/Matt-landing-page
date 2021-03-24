import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Layout/Header.js";
import Landing from "./Pages/Landing.js";
import Footer from "./Layout/Footer.js";
function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
