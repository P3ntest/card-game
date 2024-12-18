import { Card } from "../types";

export const SciFiDrone: Card = {
  id: "scifi_drone_small",
  name: "Small Sci-Fi Drone",
  description: "A small drone that can attack and defend.",
  type: "soldier",
  baseAttack: 2,
  baseHealth: 1,
  cost: [
    { currency: "scrap", amount: 1 },
    { currency: "any", amount: 1 },
  ],
  flying: true,
};
