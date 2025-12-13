import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Toaster } from "sonner";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { PlaceOrderPage } from "./components/pages/PlaceOrderPage";
import { OrdersPage } from "./components/pages/OrdersPage";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { PortfolioPage } from "./components/pages/Portfolio/PortfolioPage";
import { TradeHistoryPage } from "./components/pages/TradingHistoryPage";
import { CreatePortfolioPage } from "./components/pages/Portfolio/CreatePortfolioPage";
import TradesPage from "./components/pages/admin/TradesPage";
import { PortfolioDetailsPage } from "./components/pages/Portfolio/PortfolioDetailsPage";
import { ExchangeConfig } from "./components/pages/admin/ExchangeConfig";

const DashboardPages = ({ children }: { children: React.ReactNode }) => {
  return <Layout>{children}</Layout>;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
          <Route element={<ProtectedRoute />}>
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
            <Route
              path="/trading/orders"
              element={
                <DashboardPages>
                  <OrdersPage />
                </DashboardPages>
              }
            />
            <Route
              path="/trading/history"
              element={
                <DashboardPages>
                  <TradeHistoryPage />
                </DashboardPages>
              }
            />
            <Route
              path="/portfolios"
              element={
                <DashboardPages>
                  <PortfolioPage />
                </DashboardPages>
              }
            />
            <Route
              path="/portfolios/create"
              element={
                <DashboardPages>
                  <CreatePortfolioPage />
                </DashboardPages>
              }
            />
            <Route
              path="/admin/trades"
              element={
                <DashboardPages>
                  <TradesPage />
                </DashboardPages>
              }
            />
            <Route path="/portfolio/details/:id"
                  element={
                  <DashboardPages>
                    <PortfolioDetailsPage/>
                  </DashboardPages>}/>

            <Route path="/admin/exchanges" element={<ExchangeConfig/>}/>

          </Route>
        </Routes>
        <Toaster position="top-center" />
      </BrowserRouter>
    </>
  );
}

export default App;
