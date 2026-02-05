import "./styles.css";
import { Navbar } from "./components/Navbar";
import { MainBody } from "./components/MainBody";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <MainBody />
    </div>
  );
}
