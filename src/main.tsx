import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./api/query-client.ts";
import WebSocketProvider from "./providers/web-socket-provider.tsx";
import { AuthProvider } from "./providers/auth-providers.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WebSocketProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </WebSocketProvider>
  </StrictMode>
);
