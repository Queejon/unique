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
        <h1 className="App-title">Unique</h1>
        <h3 className="App-subtitle">This is the game. </h3>
        <br></br>
        <br></br>
        {new Game(props).render(props)}
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
        <div className="Game-window"></div>
        <div className="Game-bar">
          <p className="Game-bar-test">
            This is the status bar.
            As you can see it functions correctly for its current implementation.
          </p>
        </div>
        <div className="Game-menu">
          <p className="Game-menu-test">
            This is the context menu.
            As you can see it functions correctly for its current implementation.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
