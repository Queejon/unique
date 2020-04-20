import React from 'react';
import './App.css';
import Title from './scripts/Title';
import Player from './scripts/Player';
import Inventory from './scripts/Inventory';

const PIXI = require('pixi.js');

let keys = {};
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      version: "0.0.1",
      game: new Game(props),
      title: new Title(props)
    }
  }

  render(props){
    return(
      <div className="App">
        <div className="App-title-outer"><div className="App-title-inner"><h2 className="App-title">Unique</h2></div></div>
        <div className="App-subtitle-outer"><div className="App-subtitle-inner"><h3 className="App-subtitle">Version {this.state.version} </h3></div></div>
        {this.title(props)}
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

  title(props){
    if(this.state.title.state.display === true){
      return this.state.title.render(props);
    }
    else{
      if(this.state.game.state.player.menuTitle === "_title"){
        let player = this.state.game.state.player;
        player.inMenu = false;
        player.menuTitle = "none";
        this.state.game.setState({player: player});
      }
    }
  }

  componentDidMount(props){
    this.state.game.componentDidMount(props);
  }
}

class Game extends React.Component{
  constructor(props){
    super(props);
    this.timer = {};
    this.state = {
      id: "id123",
      settings: {
        implementation: "later",
        dev_mode: false
      },
      game: new PIXI.Application({width: 800, height: 600, transparent: true}),
      player: new Player(400,300),
      gameBar: new GameBar(props),
      gameMenu: new GameMenu(props),
      consoleLog: [],
      enemies: [],
      floors: [{},{},{}],
    }
  }

  render(props){
    return(
      <div className="Game">
        <div className="Game-window" id="Game-window"></div>
        {this.state.gameBar.render(props)}
        {this.state.gameMenu.render(props)}
      </div>
    );
  }

  componentDidMount(props){
    this.init1(props);
  }

  async init1(props){
    let game = this.state.game;
    game.view.id = "Game-driver";
    game.stage.addChildAt(this.state.player.body, 0);
    game.ticker.add(() => this.playerLoop(props));
    this.setState({game: game}, this.init2());
  }

  async init2(){
    //Disabling Mouse Features
    document.oncontextmenu = (e) => {return false};
    //Mouse and Keyboard Events
    window.addEventListener("keydown", this.keysDown);
    window.addEventListener("keyup", this.keysUp);
    window.addEventListener("mousedown", this.mouseDown);
    window.addEventListener("mouseup", this.mouseUp);

    //Adding Game to DOM
    document.getElementById("Game-window").appendChild(this.state.game.view);
  }

  keysDown(e){
    console.log(e.keyCode);
    keys[e.keyCode] = true;
  }

  keysUp(e){
    //console.log(e.keyCode);
    keys[e.keyCode] = false;
  }

  mouseDown(e){
    //console.log(e.button);
    keys[`M${e.button}`] = true;
  }

  mouseUp(e){
    //console.log(e.button);
    keys[`M${e.button}`] = false;
  }

  playerLoop(props){
      //console.log(keys);
      let player = this.state.player;
      if(!this.state.player.inMenu){
        //Movement
        if(keys["87"])
          if(player.y - player.speed >= 0)
            player.y -= player.speed;
          else
            player.y = 0;
        if(keys["83"])
          if(player.y + player.speed <= 584)
            player.y += player.speed;
          else
            player.y = 584;
        if(keys["65"])
          if(player.x - player.speed >= 0)
            player.x -= player.speed;
          else
            player.x = 0;
        if(keys["68"])
          if(player.x + player.speed <= 784)
            player.x += player.speed;
          else
            player.x = 784;
        //Sprint/Dodge
        if(keys["16"])
          player.speed = 8;
        if(!keys["16"])
          player.speed = 5;
        //Abilities
        if(keys["M0"])
          player.ability1_P();
        if(keys["49"])
          player.ability1_S();
        if(keys["M2"])
          player.ability2_P();
        if(keys["50"])
          player.ability2_S();
        if(keys["51"])
          player.ability3_S();
        //Interact
        if(keys["69"])
          player.interact();
        //Open Chat/Commands
        if(keys["84"])
          this.openConsole(props);
        //Open Map
        if(keys["77"])
          this.openMap(props);
        //Open Inventory
        if(keys["73"])
          this.openInventory(props);
        //Open Abilities
        if(keys["79"])
          this.openAbilities(props);
        this.setState({player: player});
        this.state.player.update();
      }
      if(player.menuTitle === "_console"){
        if(keys["27"])
          this.closeMenu(props);
        if(keys["13"]){
          this.timer.message = true;
          setTimeout(() => {this.timer.message = false}, 1000);
          if(this.timer.message)
            this.consoleMessage(props);
          keys["13"] = false;
        }
        this.updateConsoleDisplay(props);
      }
      if(player.menuTitle === "_map"){
        if(keys["27"])
          this.closeMenu(props);
      }
      if(player.menuTitle === "_inventory"){
        if(keys["27"]){
          this.closeMenu(props);
        }
      }
      if(player.menuTitle === "_abilities"){
        if(keys["27"])
          this.closeMenu(props);
      }
  }

  openConsole(props){
    this.state.player.openConsole();

    let cover = new PIXI.Graphics();
    cover.beginFill(0x556b2f, .40);
    cover.drawRect(0, 0, 800, 600);
    let game = this.state.game;
    game.stage.addChildAt(cover, 0);
    this.setState({game: game});

    let gameMenu = this.state.gameMenu;
    gameMenu.state.menu = this.consoleMenu(props);
    this.setState({gameMenu: gameMenu});
  }

  consoleMenu(props){
    return(
      <div className="Empty">
        <div className="Console-backdrop" id="Console-backdrop">
          <p className="Console-log" id="Console-log"></p>
        </div>
        <input className="Console-input" id="Console-input"type="text" ></input>
        <button className="Console-input-button" onClick={(e) => this.consoleMessage(props, e)}>send</button>
      </div>
    );
  }

  updateConsoleDisplay(props){
    //console.log("updating display");
    let consoleLog = this.state.consoleLog;
    let result = "";
    if(consoleLog.length === 0)
      result = "no commands logged yet<br>(press esc to exit the console)";
    else{
      result = consoleLog[0];
      for(let k = 1; k < consoleLog.length; k++)
        result += `<br>${consoleLog[k]}`;
    }
    if(document.getElementById("Console-log") != null)
      document.getElementById("Console-log").innerHTML = result;
  }

  consoleMessage(props){
    let msg = document.getElementById("Console-input").value;
    document.getElementById("Console-input").value = "";
    //console.log(`Message '${msg}' sent.`);
    let consoleLog = this.state.consoleLog;
    if(msg.indexOf("/") >= 0)
      consoleLog[consoleLog.length] = this.consoleCommandHandler(props, msg);
    else
      consoleLog[consoleLog.length] = msg;
    //console.log(consoleLog);
    this.setState({consoleLog: consoleLog});
  }

  consoleCommandHandler(props, msg){
    msg = msg.substring(1,msg.length);
    if(msg === "test")
      return `
      --  
      <br>I hear yah!
      <br>--`;
    else if(msg === "help")
      return `
      --
      <br> (press esc to exit the console)
      <br>Current Commands:
        <br>help
        <br>test
        <br>devmode
        <br>reset
      <br>--`;
    else if(msg === "devmode"){
      let settings = this.state.settings;
      settings.dev_mode = !settings.dev_mode;
      this.setState({settings: settings});
      if(settings.dev_mode)
        return `
        --
        <br>Dev Mode Turned On.
        <br>--
        `;
      else
        return `
        --
        <br>Dev Mode Turned Off.
        <br>--
        `
    }
    else
      return `
      --
      <br>Command Not Found!
      <br>--
      `
  }

  openMap(props){
    this.state.player.openMap();

    let cover = new PIXI.Graphics();
    cover.beginFill(0x556b2f, .40);
    cover.drawRect(0, 0, 800, 600);
    let game = this.state.game;
    game.stage.addChildAt(cover, 0);
    this.setState({game: game});

    let gameMenu = this.state.gameMenu;
    gameMenu.state.menu = this.mapMenu(props);
    this.setState({gameMenu: gameMenu});
  }

  mapMenu(props){
    return(
      <div className="Map-backdrop">
        Map Implementation coming soon.
      </div>
    )
  }

  openInventory(props){
    this.state.player.openInventory();

    let cover = new PIXI.Graphics();
    cover.beginFill(0x556b2f, .40);
    cover.drawRect(0, 0, 800, 600);
    let game = this.state.game;
    game.stage.addChildAt(cover, 0);
    this.setState({game: game});

    let gameMenu = this.state.gameMenu;
    gameMenu.state.menu = this.inventoryMenu(props);
    this.setState({gameMenu: gameMenu});
  }

  inventoryMenu(props){
    return(
      <div className="Inventory-backdrop">
        <div className="Inventory-header">Inventory  (not yet implemented)</div>
        <div className="Inventory-container">
          {this.inventoryItems(props)}
        </div>
      </div>
    )
  }

  inventoryItems(props){
    let result =  [
                    [],
                    [],
                    [],
                    []
                  ];
    for(let k = 0; k < result.length; k++){
      for(let i = 0; i < 10; i++){
        result[k][i] = new Inventory.Item(props, this.state.player, k, i).render(props);
      }
      result[k][11] = (<br className="Empty"></br>);
    }
    return result;
  }

  openAbilities(props){
    this.state.player.openAbilities();

    let cover = new PIXI.Graphics();
    cover.beginFill(0x556b2f, .40);
    cover.drawRect(0, 0, 800, 600);
    let game = this.state.game;
    game.stage.addChildAt(cover, 0);
    this.setState({game: game});

    let gameMenu = this.state.gameMenu;
    gameMenu.state.menu = this.abilitiesMenu(props);
    this.setState({gameMenu: gameMenu});
  }

  abilitiesMenu(props){
    return(
      <div className="Abilities-backdrop">
        <div className="Abilities-header">Abilities  (not yet implemented)</div>
        <div className="Abilities-container" id="Ability1">
          <div className="Abilities-header2">Ability 1</div>
        </div>
        <div className="Abilities-container" id="Ability2">
          <div className="Abilities-header2">Ability 2</div>
        </div>
        <div className="Abilities-container" id="Ability3">
        <div className="Abilities-header2">Ability 3</div>
        </div>
      </div>
    )
  }

  closeMenu(props){
    console.log("menu closed");
    this.state.player.closeMenu();
    this.state.game.stage.removeChildAt(0);
    let gameMenu = this.state.gameMenu;
    gameMenu.state.menu = this.emptyMenu(props);
    this.setState({gameMenu: gameMenu});
  }

  emptyMenu(props){
    return(
      <div className="Empty">
        <p className="Game-menu-text">
          No menu currently selected.
        </p>
      </div>
    )
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
    this.state = {
      menu: this.initialMenu(props)
    }
  }

  initialMenu(props){
    return(
      <div className="Empty">
        <p className="Game-menu-text">
          No menu currently selected.
        </p>
      </div>
    );
  }

  render(props){
    return(
      <div className="Game-menu">
        {this.state.menu}
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