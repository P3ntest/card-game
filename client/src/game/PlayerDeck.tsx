import { useColyseusState } from "../util/colyseus";
import { ActiveCardDisplay } from "./ActiveCard";

export function PlayerDeck({ playerId }: { playerId: string }) {
  const player = useColyseusState((state) => state.players.get(playerId));

  if (!player) {
    return <div>Player {playerId} not found</div>;
  }

  const activeCards = player.activeCards.map((card) => (
    <ActiveCardDisplay key={card.uuid} card={card} />
  ));

  return (
    <div className="flex flex-col items-stretch">
      <div className="bg-yellow-600">
        <div className="text-xl font-bold px-2 p-1">{player.name}</div>
      </div>
    </div>
  );
}
