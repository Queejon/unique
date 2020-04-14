import React from 'react';
import './App.css';
const PIXI = require('pixi.js');

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

  componentDidMount(props){
    this.state.game.componentDidMount(props);
  }
}

class Game extends React.Component{
  constructor(props){
    super(props);
    this.setState({
      id: "id123",
      settings: {
        implementation: "later"
      }
    });
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

  componentDidMount(props){
    const app = new PIXI.Application({
      width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
    });
    document.body.appendChild(app.view);
    
    const container = new PIXI.Container();
    
    app.stage.addChild(container);
    
    // Create a new texture
    const texture = PIXI.Texture.from('src/assets/bunny.png');
    
    // Create a 5x5 grid of bunnies
    for (let i = 0; i < 25; i++) {
        const bunny = new PIXI.Sprite(texture);
        bunny.anchor.set(0.5);
        bunny.x = (i % 5) * 40;
        bunny.y = Math.floor(i / 5) * 40;
        container.addChild(bunny);
    }
    
    // Move container to the center
    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;
    
    // Center bunny sprite in local container coordinates
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;
    
    // Listen for animate update
    app.ticker.add((delta) => {
        // rotate the container!
        // use delta to create frame-independent transform
        container.rotation -= 0.01 * delta;
    });
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