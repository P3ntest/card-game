import { PlayerDeck } from "./game/PlayerDeck";
import { useColyseusState } from "./util/colyseus";

export function GameScreen() {
  const state = useColyseusState();
  const players = state?.players;
  const playerNum = players?.size;

  if (playerNum < 2) {
    return <div>Waiting for another player...</div>;
  }

  return (
    <div className="flex flex-col justify-between h-screen w-screen bg-yellow-900 overflow-hidden">
      {Array.from(players?.keys()).map((id) => (
        <PlayerDeck playerId={id} />
      ))}
    </div>
  );
}
