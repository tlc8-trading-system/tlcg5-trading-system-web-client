import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Toaster } from "sonner";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { PlaceOrderPage } from "./components/pages/PlaceOrderPage";
import { useAuth } from "./hooks/useAuth";
import { OrdersPage } from "./components/pages/OrdersPage";

const DashboardPages = ({ children }: { children: React.ReactNode }) => {
  return <Layout>{children}</Layout>;
};

const ProtectedRoute = ({ element }: { element: React.ReactElement }) => {
  const { isAuthenticated } = useAuth(); 
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
            element={<DashboardPages>Dashboard Home</DashboardPages>}
          />
            }
          />

          <Route
            path="/trading/place-order"
          element={
            <ProtectedRoute
              element={
                <DashboardPages>
                  <PlaceOrderPage />
                </DashboardPages>
              }
            />
          }
          />
          <Route
            path="/trading/orders"
            element={
              <DashboardPages>
                <OrdersPage />
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
