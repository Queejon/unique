import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.setState({
      id: "Queejon"
    });
  }

  render(props){
    return(
      <div className="App">
        {new Login(props).render(props)}
        <div className="App-title-outer"><div className="App-title-inner"><h2 className="App-title">Unique</h2></div></div>
        <div className="App-subtitle-outer"><div className="App-subtitle-inner"><h3 className="App-subtitle">This is the game. </h3></div></div>
        <br></br>
        <br></br>
        {new Game(props).render(props)}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {new Footer(props).render(props)}
      </div>
    );
  }
}

class Game extends React.Component{
  constructor(props){
    super(props);
    this.setState({

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
      <div className="Login-outer">
        <form>
          <label className="Login-label" for="Login_Username">Username:</label>
          <input className="Login-input" type="text" name="Login_Username" id="Login_Username"></input>
          <br></br>
          <label className="Login-label" for="Login_ID">ID:</label>
          <input className="Login-input" type="text" name="Login_ID" id="Login_ID"></input>
        </form>
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
          Footer information will go here.
        </p>
        <p className="Footer-temp">
        Later implementation of our README.md will be put here.
        </p>
      </div>
    );
  }
}

export default App;