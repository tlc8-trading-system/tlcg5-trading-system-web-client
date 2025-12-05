import { useEffect, useRef, useState } from "react";
import useWebSocket from "react-use-websocket";
import type { WebSocketLike } from "react-use-websocket/dist/lib/types";
import WSContext from "../contexts/web-socket-context";

interface WebSocketProviderProps {
  children: React.ReactNode;
}

const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<WebSocketLike | null>(null);
  const wsRef = useRef<WebSocketLike | null>(null);

  const { getWebSocket, lastJsonMessage } = useWebSocket<string>(
    import.meta.env.VITE_APP_WS_URL,
    {
      onOpen: () => {
        const ws = getWebSocket();
        wsRef.current = ws;
        console.log("WebSocket connection established.");
        setSocket(ws);
      },
      onClose: () => {
        console.log("WebSocket connection closed.");
      },
    }
  );

  // Lifecycle cleanup
  useEffect(() => {
    return () => {
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        wsRef.current.close();
      }
    };
  }, []);
  return (
    <WSContext.Provider value={{ socket, lastJsonMessage }}>
      {children}
    </WSContext.Provider>
  );
};

export default WebSocketProvider;
