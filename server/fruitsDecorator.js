
export default function createFruitsDecorator(game, interval, imageIndexRange)
{
   function generate ()
   {
      let col = Math.round(Math.random()*1000) % game.state.board.width;
      let lin = Math.round(Math.random()*1000) % game.state.board.height;

      let cont=0;
      while(game.state.board.getCell(col, lin) != null && cont<10)
      {         
         col = Math.round(Math.random()*1000) % game.state.board.width;
         lin = Math.round(Math.random()*1000) % game.state.board.height;
      }
      if(cont >9)
         return;
      const imageIndex = Math.round(Math.random()*1000) % imageIndexRange; 
      const isEdible = imageIndex != 0;
      game.state.board.setCell(col, lin, {id: 0, imgIndex: imageIndex, points: 2, isEdible: isEdible});      
   }
      
   return { 
      start: () => setInterval(generate, interval)
   } 
}