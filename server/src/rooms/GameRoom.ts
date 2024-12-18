import { Room, Client } from "@colyseus/core";
import { GameRoomState } from "./schema/GameRoomState";
import { ActiveCard, GamePlayer } from "./schema/GamePlayer";

export class GameRoom extends Room<GameRoomState> {
  maxClients = 2;

  onCreate(options: any) {
    this.setState(new GameRoomState());

    this.onMessage("type", (client, message) => {
      //`
      // handle "type" message
      //
    });
  }

  onJoin(client: Client, options: any) {
    console.log(client.sessionId, "joined!");
    const player = new GamePlayer();
    player.name = "Player " + (this.state.players.size + 1);
    const card = new ActiveCard();
    card.cardId = "scifi_drone_small";
    player.activeCards.push(card);
    this.state.players.set(client.sessionId, player);

    if (this.state.players.size === 2) {
      this.state.currentTurnPlayerId = Array.from(this.state.players.keys())[0];
    }
  }

  onLeave(client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
    this.state.players.delete(client.sessionId);
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }
}
