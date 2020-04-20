import React from "react";
import '../App.css';

class Manage{

}

class Item extends React.Component{
   constructor(props, player, x, y){
      super(props);
      this.setState({
         player: player,
         x: x,
         y: y
      });
   }

   render(props){
      return(
         <div className="Inventory-item">
            
         </div>
      );
   }
}

export default {Manage: Manage, Item: Item};