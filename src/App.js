import React from 'react';
import './App.css';
import Player from './scripts/Player';

const PIXI = require('pixi.js');

let keys = {};
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      version: "0.0.1",
      game: new Game(props)
    }
  }

  render(props){
    return(
      <div className="App">
        {new Login(props).render(props)}
        <div className="App-title-outer"><div className="App-title-inner"><h2 className="App-title">Unique</h2></div></div>
        <div className="App-subtitle-outer"><div className="App-subtitle-inner"><h3 className="App-subtitle">Version {this.state.version} </h3></div></div>
        <br></br>
        <br></br>
        {this.state.game.render(props)}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {new Footer(props).render(props)}
      </div>
    );
  }

  componentDidUpdate(props){
    if(this.state.first_render)
      this.setState({
        first_render: false
      });
    this.state.game.gameRender(props);
  }

  componentDidMount(props){
    this.state.game.componentDidMount(props);
  }
}

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: "id123",
      settings: {
        implementation: "later",
        first_render: true,
      },
      game: new PIXI.Application({width: 800, height: 600, transparent: true}),
      player: null,
      firstRun: true,
      enemies: [],
      floors: [{},{},{}],
    }
  }

  render(props){
    return(
      <div className="Game">
        <div className="Game-window" id="Game-window"></div>
        {new GameBar(props).render(props)}
        {new GameMenu(props).render(props)}
      </div>
    );
  }

  gameRender(props){
    this.state.game.render(props)
  }

  componentDidMount(props){
    this.state.player = new Player(this.state.game.stage.width/2, this.state.game.stage.height/2) ;
    window.addEventListener("keydown", this.keysDown);
    window.addEventListener("keyup", this.keysUp);
    this.state.game.stage.addChildAt(this.state.player.state.body, 0);
    this.state.game.view.id = "Game-driver";
    document.getElementById("Game-window").appendChild(this.state.game.view);
    this.state.game.ticker.add(delta => this.movementLoop());
  }

  keysDown(e){
    console.log(e.keyCode);
    keys[e.keyCode] = true;
  }

  keysUp(e){
    //console.log(e.keyCode);
    keys[e.keyCode] = false;
  }

  movementLoop(){
    if(keys["87"])
      this.state.player.state.y -= 5;
    if(keys["83"])
      this.state.player.state.y += 5;
    if(keys["65"])
      this.state.player.state.x -= 5;
    if(keys["68"])
      this.state.player.state.x += 5;
    this.state.player.update();
    this.state.game.stage.removeChildAt(0);
    this.state.game.stage.addChildAt(this.state.player.state.body, 0);
  }
}

class GameBar extends React.Component{
  constructor(props){
    super(props);
    this.setState({

    });
  }

  render(props){
    return(
      <div className="Game-bar">
        <div className="Stats-bar">
          <div className="Health-bar"    id="Health-bar">Health Bar</div>
          <div className="Stats-bottom">
            <div className="Energy-bar"    id="Energy-bar">Energy Bar</div>
            <div className="Currency-bar"  id="Currency-bar">Currency Bar</div>
          </div>
        </div>
        <div className="Abilities-bar">
          <div className="Core-bar"      id="Core1-bar">Core1 Bar</div>
          <div className="Core-bar"      id="Core2-bar">Core2 Bar</div>
          <div className="Core-bar-last"      id="Core3-bar">Core3 Bar</div>
        </div>
      </div>
    );
  }
}

class GameMenu extends React.Component{
  constructor(props){
    super(props);
    this.setState({

    });
  }

  render(props){
    return(
      <div className="Game-menu">
        <p className="Game-menu-test">
          This is the context menu.
          As you can see it functions correctly for its current implementation.
        </p>
      </div>
    );
  }
}

class Login extends React.Component{
  constructor(props){
    super(props);
    this.setState({

    });
  }

  render(props){
    return(
      <div className="Login-detail">
      <div className="Login-inner">
        <form>
          <label className="Login-label" for="Login_Username">Username:</label>
          <br></br>
          <input className="Login-input" type="text" name="Login_Username" id="Login_Username"></input>
          <br></br>
          <label className="Login-label" for="Login_ID">ID:</label>
          <br></br>
          <input className="Login-input" type="text" name="Login_ID" id="Login_ID"></input>
          <br></br>
          <input className="Login-button" type="submit" value="Log In"></input>   <input className="Signin-button" type="submit" value="Sign In"></input>
        </form>
      </div>
      </div>
    );
  }
}

class Footer extends React.Component{
  constructor(props){
    super(props);
    this.setState({

    });
  }

  render(props){
    return(
      <div className="Footer">
        <h4 className="Footer-title">About Us</h4>
        <p className="Footer-information">
          Later implementation of the README.md will go here.
        </p>
      </div>
    );
  }
}

export default App;