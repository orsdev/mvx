import { Navbar } from "./components/Navbar";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <button className="fixed right-3 bottom-14" type="button">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/chat.png"}
          alt="Chat"
          className="w-14 xs:w-20 h-144 object-contain"
        />
      </button>
    </>
  );
}

export default App;
