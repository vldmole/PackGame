import fs from 'fs'
import Board from '../../common/model/board.js';

function readFile(fileName)
{
   const txt = fs.readFileSync(fileName,'utf8');
   const token = txt.split('\r\n');

   const width = token[0].split(' ')[1];
   const height = token[1].split(' ')[1];

   const board = [];
  
   for(let lin=0; lin < height; lin++)
   {
      const line = token[lin + 3].split(' ');
      for(let col=0; col < width; col++)
      {
         if(board.length <= col)
            board.push([]);

         board[col].push(line[col]);
      }
   }

   return createBoard ({
      width: width,
      height: height,
      board: board
   })
}

function createBoard(boardData)
{
   const board = new Board(boardData.width, boardData.height);

   for(let col=0; col < boardData.width; col++)
   {
      for( let lin=0; lin < boardData.height; lin++)
      {
         const value = boardData.board[col][lin];
         if(value == 1)
            board.setCell(col, lin, {imgIndex: 0, isEdible: false})
      }
   }

   return board;
}

export default {
   readFile: readFile
}