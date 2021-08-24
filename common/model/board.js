
export default class Board
{
   //-------------------------------------------------------------------------
   constructor(width, height)
   {
      this.cell = [];
      for(let i=0; i<width; i++)
         this.cell.push(new Array(height).fill(null) );
   }
   
   //-------------------------------------------------------------------------
   get width() {
      return this.cell.length;
   }

   //-------------------------------------------------------------------------
   get height()
   {
      if(!this.cell[0])
         return 0;

      return this.cell[0].length;
   }

   //-------------------------------------------------------------------------
   clearCell (col, lin) 
   {
      this.cell[col][lin] = null;
   }

   //-------------------------------------------------------------------------
   setCell(col, lin, value)
   {
      this.cell[col][lin] = value;
   }

   //-------------------------------------------------------------------------
   getCell(col, lin) 
   {
      return this.cell[col][lin];
   }

   //-------------------------------------------------------------------------
   reset () 
   {
      this.cell.forEach(col => col.fill(null));
   }

   //-------------------------------------------------------------------------
   copyOf(other)
   {
      for(let col=0; col<this.cell.length; col++)
      {
         for(let lin=0; lin<this.cell[col].length; lin++)
            this.cell[col][lin] = other.cell[col][lin]; 
      }
   }

   //-------------------------------------------------------------------------
} 
 