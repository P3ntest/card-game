import { GameScreen } from "./GameScreen";
import { connectToColyseus, useColyseusRoom } from "./util/colyseus";

export function App() {
  const isConnected = !!useColyseusRoom();

  if (!isConnected) {
    connectToColyseus("game_room");
    return null;
  }

  return <GameScreen />;
}
