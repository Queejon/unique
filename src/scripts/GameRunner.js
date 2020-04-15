import React from 'react';
import '../App.css';
import Player from './Player';

const PIXI = require('pixi.js');

class GameRunner extends React.Component{
   constructor(props){
      super(props)
      this.state = {
         game: new PIXI.Application({width: 800, height: 600, transparent: true}),
         enemies: [],
         floors: [{},{},{}],
      }
   }
   
   render(props){
      this.state.game.stage.addChild(new Player().render());
      document.getElementById("Game-window").appendChild(this.state.game.view);
      return(
         <div className="Empty"></div>
      );
   }
}

export default GameRunner;