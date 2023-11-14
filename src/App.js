import Footer from "./components/Footer";
import { NavBar } from "./components/Navbar";
import Welcome from "./components/Welcome";
import { Auctions } from "./components/Auctions";
import { Discover } from "./components/Discover";

function App() {
  const myStyles={
    backgroundColor: "#1F1D2B",
    color: "white"
  }
  return (
    <div style={myStyles} className="App">
      <NavBar></NavBar>
      <Welcome></Welcome>
      <Auctions></Auctions>
      <Discover></Discover>
      <Footer></Footer>
    </div>
  );
}

export default App;