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
        <span className="Health-bar"    id="Health-bar">Health Bar</span>
        <span className="Energy-bar"    id="Energy-bar">Energy Bar</span>
        <span className="Currency-bar"  id="Currency-bar">Currency Bar</span>
        <span className="Core-bar"      id="Core1-bar">Core1 Bar</span>
        <span className="Core-bar"      id="Core2-bar">Core2 Bar</span>
        <span className="Core-bar"      id="Core3-bar">Core3 Bar</span>
        <span className="Menu-bar"      id="Menu-bar">Menu Bar</span>
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

class Footer extends React.Component{
  constructor(props){
    super(props);
    this.setState({

    });
  }

  render(props){
    return(
      <div className="Footer">
        <h4 className="Footer-title">Footer title will go here</h4>
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