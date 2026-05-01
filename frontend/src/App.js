import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import { Toaster } from "./components/ui/sonner";

const DEMO_MODE = process.env.REACT_APP_DEMO_MODE === "true";

function App() {
  return (
    <div className="App font-body bg-pod-bg text-pod-text min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {!DEMO_MODE && <Route path="/admin" element={<AdminPage />} />}
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
