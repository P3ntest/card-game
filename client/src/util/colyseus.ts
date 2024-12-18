import type { GameRoomState } from "./../../../server/src/rooms/schema/GameRoomState";
import { colyseus } from "use-colyseus";

export const {
  client,
  connectToColyseus,
  disconnectFromColyseus,
  useColyseusRoom,
  useColyseusState,
} = colyseus<GameRoomState>("ws://localhost:2567");
