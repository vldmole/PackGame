
import createGame from '../common/game.js';
import createServerGame from './serverGameDecorator.js'
import levelReader from './levels/levelReader.js';
import createFruitsDecorator from './fruitsDecorator.js' 

function create(httpServer)
{
   const game = createGame();
   const serverGame  = createServerGame(game, httpServer);

   const board = levelReader.readFile('./server/levels/level_0.txt');
   game.state.copyBoardOf(board);

   const fruitsGenerator = createFruitsDecorator(game, 2000, 6);
   fruitsGenerator.start();

   return serverGame;
}

export default {
   create: create
}