/*import React from 'react';
import '../App.css';
*/
const PIXI = require('pixi.js');

class Player{
   constructor(){
      this.state = {

      }
   }

   render(){

      let body = new PIXI.Graphics();
      body.beginFill(0x5cafe2);
      body.drawRect(0, 0, 16, 16);
      body.x = 0;
      body.y = 0;

      return body;
   }
}

export default Player;