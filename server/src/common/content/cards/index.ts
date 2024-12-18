import { SciFiDrone } from "./scifi/drone.card";
import { Card } from "./types";

export const allCards: Card[] = [SciFiDrone];

export const cardMap = new Map(allCards.map((card) => [card.id, card]));
