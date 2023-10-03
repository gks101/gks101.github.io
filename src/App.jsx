import './App.css'
import {Home} from "./pages/Home.jsx";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Background} from "./components/Background/Background.jsx";

function App() {
  return (
    <>
        <Background />
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <Home />
        </div>
    </>
  )
}

export default App
