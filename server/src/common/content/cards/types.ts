import { z } from "zod";

const Currency = z.enum(["scrap", "gold"]);
const Cost = z.object({
  currency: Currency.or(z.literal("any")),
  amount: z.number(),
});

const BaseCard = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  cost: Cost.array(),
});

export const Card = z.discriminatedUnion("type", [
  BaseCard.extend({
    type: z.literal("soldier"),
    baseAttack: z.number(),
    baseHealth: z.number(),
    flying: z.boolean().optional(),
  }),
  BaseCard.extend({
    type: z.literal("factory"),
    produces: Cost.array(),
  }),
]);
export type Card = z.infer<typeof Card>;
