import { Toaster } from "sonner";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PlaceOrderPage } from "./components/pages/PlaceOrderPage";

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
          <Route
            path="/trading/place-order"
            element={
              <DashboardPages>
                <PlaceOrderPage />
              </DashboardPages>
            }
          />
        </Routes>
        <Toaster position="top-center" />
      </BrowserRouter>
    </>
  );
}

export default App;
