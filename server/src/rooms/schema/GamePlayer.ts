import { Schema, ArraySchema, type } from "@colyseus/schema";

export class ActiveCard extends Schema {
  @type("string") uuid: string = Math.random().toString(36).substring(7);
  @type("string") cardId: string;
}

export class GamePlayer extends Schema {
  @type("string") name: string;

  @type({
    array: ActiveCard,
  })
  activeCards = new ArraySchema<ActiveCard>();
}
