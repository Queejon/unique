//import React from 'react';
import '../App.css';
import Inventory from './Inventory';
const PIXI = require('pixi.js');


class Player{
   /**
    * Initializes the player's core information, including positional data, graphical data, and speed.
    * @param {Number} xPos 
    * @param {Number} yPos 
    */
   constructor(xPos, yPos){
      this.x = xPos;
      this.y = yPos;
      this.speed = 5;
      this.body = new PIXI.Graphics();
      this.inMenu = true;
      this.menuTitle = "_title";
      this.inventory = new Inventory.Manage();
      this.init();
   }
   /**
    * Called directly after the constructor, and fills any variables left empty by the constructor call,
    * as well as setting up the graphical representation of the character.
    * @returns null
    */
   init(){
      if(this.x == null || this.x === undefined)
         this.x = 0;
      if(this.y == null || this.y === undefined)
         this.y = 0;

      this.body.beginFill(0x5cafe2);
      this.body.drawRect(0, 0, 16, 16);
      this.body.x = this.x;
      this.body.y = this.y;
      this.body.id = "player";
   }
   /**
    * Updates the information of the graphic based off the state of the player.
    * @returns null
    */
   update(){
      this.body.x = this.x;
      this.body.y = this.y;
   }

   /**
    * Activates/uses the player's 1st primary ability.
    * @returns Basic information about the ability.
    */
   ability1_P(){
      console.log("Primary ability 1 activated.");
   }
   /**
    * Activates/uses the player's 1st ability.
    * @returns Basic information about the ability.
    */
   ability1_S(){
      console.log("Secondary ability 1 activated.");
   }
   /**
    * Activates/uses the player's 2nd primary ability.
    * @returns Basic information about the ability.
    */
   ability2_P(){
      console.log("Primary ability 2 activated.");
   }
   /**
    * Activates/uses the player's 2nd ability.
    * @returns Basic information about the ability.
    */
   ability2_S(){
      console.log("Secondary ability 2 activated.")
   }
   /**
    * Activates/uses the player's 3rd ability.
    * @returns Basic information about the ability.
    */
   ability3_S(){
      console.log("Secondary ability 3 activated.")
   }
   /**
    * Checks if any interactable items are nearby, and if so, which one is closest.
    * @returns The item selected to interact with.
    */
   interact(){
      console.log("Interaction initiated.")
   }

   openConsole(){
      this.inMenu = true;
      this.menuTitle = "_console";
   }

   openMap(){
      this.inMenu = true;
      this.menuTitle = "_map";
   }

   openInventory(){
      this.inMenu = true;
      this.menuTitle = "_inventory";
   }

   openAbilities(){
      this.inMenu = true;
      this.menuTitle = "_abilities";
   }

   closeMenu(){
      this.inMenu = false;
      this.menuTitle = "none";
   }
}

export default Player;