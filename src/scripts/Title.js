import React from 'react';
import '../App.css';

class Title extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         display: true,
         settings: false,
         share: false
      };
   }

   render(props){
      if(this.state.settings)
         return(
            <div className="Title-page">
               <div className="App-title-outer"><div className="App-title-inner"><h2 className="App-title">Unique</h2></div></div>
               <div className="App-subtitle-outer"><div className="App-subtitle-inner"><h3 className="App-subtitle">Settings</h3></div></div>
            </div>
         );
      else if(this.state.share)
         return(
            <div className="Title-page">
               <div className="App-title-outer"><div className="App-title-inner"><h2 className="App-title">Unique</h2></div></div>
               <div className="App-subtitle-outer"><div className="App-subtitle-inner"><h3 className="App-subtitle">Share</h3></div></div>
               <p className="Share-container">
                  <h2 className="Share-header">Github Repos:</h2>
                  <br></br>
                  <br></br>
                  <div className="Share-link-container"><a href="https://github.com/Queejon/unique/tree/release" className="Share-link">Release Build</a></div>
                  <br></br>
                  <div className="Share-link-container"><a href="https://github.com/Queejon/unique/tree/Nightly" className="Share-link">Nightly Build</a></div>
               </p>
            </div>
         );
      else
         return(
            <div className="Title-page">
               <div className="App-title-outer"><div className="App-title-inner"><h2 className="App-title">Unique</h2></div></div>
               <div className="App-subtitle-outer"><div className="App-subtitle-inner"><h3 className="App-subtitle">Main Menu</h3></div></div>
               <button className="Start-button" id="Start-button" onClick={(e) => this.start(props, e)}>Start</button>
               <button className="Share-button" id="Share-button" onClick={(e) => this.share(props, e)}>Share</button>
               <button className="Settings-button" id="Settings-button" onClick={(e) => this.settings(props, e)}>Settings</button>
            </div>
         );
   }

   start(props){
      //console.log("Start game");
      //eslint-disable-next-line
      this.state.display = false;
   }

   close(props, e){
      if(e.keyCode === 27 && this.state.settings)
         this.closeSettings(props);
      else if(e.keyCode === 27 && this.state.share)
         this.closeShare(props);
   }

   settings(props){
      //eslint-disable-next-line
      this.state.settings = true;
      document.addEventListener("keydown", (e) => this.close(props, e));
   }

   closeSettings(props){
      //eslint-disable-next-line
      this.state.settings = false;
      document.removeEventListener("keydown", (e) => this.close(props, e));
   }

   share(props){
      //eslint-disable-next-line
      this.state.share = true;
      document.addEventListener("keydown", (e) => this.close(props, e));
   }

   closeShare(props){
      //eslint-disable-next-line
      this.state.share = false;
      document.removeEventListener("keydown", (e) => this.close(props, e));
   }
}

export default Title;