import { Toaster } from "sonner";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

const DashboardPages = ({ children }: { children: React.ReactNode }) => {
  return <Layout>{children}</Layout>;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard"
            element={<DashboardPages>Dashboard Home</DashboardPages>}
          />
        </Routes>
        <Toaster position="top-center" />
      </BrowserRouter>
    </>
  );
}

export default App;
