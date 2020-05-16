//import React from 'react';
import '../App.css';
const PIXI = require('pixi.js');

class Enemy{
   constructor(template, x, y, moveLoop, name, color, rarity, ability1, ability2){
      this.id = this.genID();
      this.x = x;
      this.y = y;
      this.body = new PIXI.Graphics();
      this.moveLoop = [];
      this.name = name;
      this.color = color;
      this.rarity = rarity;
      this.ability1 = ability1;
      this.ability2 = ability2;

      this.init(template);
   }

   init(template){
      if(template == null){
         if(this.x == null)
            this.x = Math.floor(Math.random()*780+1);
         if(this.y == null)
            this.y = Math.floor(Math.random()*580+1);
         if(this.name == null){
            let result = "";
            for(let i = 0; i < 6; i++)
               result += Math.floor(Math.random()*16777215).toString(16);
            this.name = result;
         }
         if(this.color == null)
            this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
         if(this.rarity == null){
            let result = Math.random();
            if(result <= .2)
               this.rarity = "_miniboss";
            else if(result <= .5)
               this.rarity = "_elite";
            else
               this.rarity = "_common";
         }
         if(this.ability1 == null){
            //Not yet implemented
         }
         if(this.ability2 == null){
            //Not yet implemented
         }

         this.body.beginFill(parseInt(this.color.substring(1), 16));
         this.body.drawRect(0, 0, 20, 20);
         this.body.x = this.x;
         this.body.y = this.y;
         this.body.id = this.id;
      }
      else{
         //Not yet implemented
      }
   }

   update(){
      this.body.x = this.x;
      this.body.y = this.y;
   }

   genID(){
      let result = "";
      for(let k = 0; k < 6; k++){
         result += Math.floor(Math.random()*10);
      }
      return result;
   }

   processMove(){
      let steps = [];
      for(let k = 0; k < this.moveLoop.length; k++){
         let num = this.moveLoop[k].substring(0, this.moveLoop[k].indexOf("-"));
         let dir = this.moveLoop[k].substring(this.moveLoop[k].indexOf("-")+1);
         steps[k] = {numSteps: num, direction: dir};
      }
      this.moveLoop = steps;
   }
}

export default Enemy;