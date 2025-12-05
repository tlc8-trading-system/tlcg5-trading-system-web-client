import { useContext } from "react";
import WSContext from "../contexts/web-socket-context";

export const useServerWebSocket = () => {
  const context = useContext(WSContext);
  if (!context) {
    throw new Error("useServerWebSocket must be used in a WebSocketProvider");
  }
  return context;
};
