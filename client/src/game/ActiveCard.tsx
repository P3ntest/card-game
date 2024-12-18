import { ActiveCard } from "../../../server/src/rooms/schema/GamePlayer";
import { CardRenderer } from "./CardRenderer";

export function ActiveCardDisplay({ card }: { card: ActiveCard }) {
  return <CardRenderer id={card.cardId} />;
}
