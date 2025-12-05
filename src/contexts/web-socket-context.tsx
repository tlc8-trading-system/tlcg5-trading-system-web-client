import { createContext } from "react";
import type { WebSocketLike } from "react-use-websocket/dist/lib/types";

interface WSContextType {
  socket: WebSocketLike | null;
  lastJsonMessage: string; // string for now until we know the structure of what backend sends
}

const WSContext = createContext<WSContextType | undefined>(undefined);
export default WSContext;
