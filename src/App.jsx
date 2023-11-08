import { Outlet } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <Navigation />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
