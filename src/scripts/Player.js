/*import React from 'react';
import '../App.css';
*/
const PIXI = require('pixi.js');

class Player{
   constructor(x, y){
      this.state = {
         x: x,
         y: y,
         body: new PIXI.Graphics()
      }
      this.init();
      
   }

   init(){
      if(this.state.x == null || this.state.x === undefined)
         this.state.x = 0;
      if(this.state.y == null || this.state.y === undefined)
         this.state.y = 0;

      this.state.body.beginFill(0x5cafe2);
      this.state.body.drawRect(0, 0, 16, 16);
      this.state.body.x = this.state.x;
      this.state.body.y = this.state.y;
      this.state.body.id = "player";
   }

   update(){
      this.state.body.x = this.state.x;
      this.state.body.y = this.state.y;
   }
}

export default Player;