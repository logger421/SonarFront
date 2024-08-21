import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <div className="pages">
                    <Routes>
                        <Route element={<Home/>} path="/"/>
                        <Route element={<Cart/>} path="/cart"/>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App;
