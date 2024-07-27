import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import { Main } from "./pages/Main";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
