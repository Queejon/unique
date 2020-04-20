import React from 'react';
import '../App.css';

class Title extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         display: true,
         settings: false
      };
   }

   render(props){
      if(!this.state.settings)
         return(
            <div className="Title-page">
               <div className="App-title-outer"><div className="App-title-inner"><h2 className="App-title">Unique</h2></div></div>
               <div className="App-subtitle-outer"><div className="App-subtitle-inner"><h3 className="App-subtitle">Main Menu</h3></div></div>
               <button className="Start-button" id="Start-button" onClick={(e) => this.start(props, e)}>Start</button>
               <button className="Share-button" id="Share-button">Share</button>
               <button className="Settings-button" id="Settings-button" onClick={(e) => this.settings(props, e)}>Settings</button>
            </div>
         );
      else
         return(
            <div className="Title-page">
               <div className="App-title-outer"><div className="App-title-inner"><h2 className="App-title">Unique</h2></div></div>
               <div className="App-subtitle-outer"><div className="App-subtitle-inner"><h3 className="App-subtitle">Settings</h3></div></div>
            </div>
         )
   }

   start(props){
      //console.log("Start game");
      //eslint-disable-next-line
      this.state.display = false;
   }

   settings(props){
      //eslint-disable-next-line
      this.state.settings = true;
      document.addEventListener("keydown", (e) => {
         if(e.keyCode === 27)
            this.closeSettings(props);
      });
   }

   closeSettings(props){
      //eslint-disable-next-line
      this.state.settings = false;
      document.removeEventListener("keydown", (e) => {
         if(e.keyCode === 27)
            this.closeSettings(props);
      });
   }
}

export default Title;