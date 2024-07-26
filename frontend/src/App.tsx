import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
