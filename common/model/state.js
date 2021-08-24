import Board from "./board.js";

export default function createState(boardWidth, boardHeight)
{
   return new State(boardWidth, boardHeight)
}

export class State 
{
   //-------------------------------------------------------------------------
   constructor(boardWidth, boardHeight)
   {
      this.board = new Board(boardWidth, boardHeight);
      this.players = [];
      this.currentPlayerId = 0;
   }

   //-------------------------------------------------------------------------
   getCurrentPlayerId() 
   {
      return this.currentPlayerId;
   }
 
   //-------------------------------------------------------------------------
   setCurrentPlayerId(id)
   {
      this.currentPlayerId = id
   }

   //-------------------------------------------------------------------------
   removePlayer(playerId)
   {
      const index = this.players.findIndex(player => player.id === playerId);
      this.players.splice(index, 1);
   }

   //-------------------------------------------------------------------------
   getPlayer(playerId)
   {
      const index = this.players.findIndex(player => player.id === playerId)
      return this.players[index];
   }

   //-------------------------------------------------------------------------
   copyBoardOf(board)
   {
      this.board.copyOf(board);
   }

   //-------------------------------------------------------------------------
   copyOf(newState)
   {
      this.board.copyOf(newState.board);
      this.players = newState.players;
      this.currentPlayerId = newState.currentPlayerId;
   }
   //-------------------------------------------------------------------------
} 