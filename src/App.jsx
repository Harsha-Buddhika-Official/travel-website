import { Routes, Route } from "react-router-dom";
import "./styles/animations.css";
import { useToast } from "./hooks/useToast";
import Toast from "./components/common/Toast";
import HomePage from "./pages/HomePage";
import DestinationsPage from "./pages/DestinationsPage";
import DestinationDetailPage from "./pages/DestinationDetailPage";

export default function App() {
  const { toast, showToast, hideToast } = useToast();

  return (
    <div className="bg-stone-50 text-stone-900" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Routes>
        <Route path="/" element={<HomePage onNavigate={showToast} />} />
        <Route path="/destinations" element={<DestinationsPage onNavigate={showToast} />} />
        <Route path="/destinations/:id" element={<DestinationDetailPage onNavigate={showToast} />} />
      </Routes>
      <Toast message={toast.message} show={toast.show} onClose={hideToast} />
    </div>
  );
}