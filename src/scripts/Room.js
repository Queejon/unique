import Enemy from './Enemy';

class Room{
   constructor(x, y, enm, trea, entr){
      this.state = {
         x: x,
         y: y,
         enemies: enm,
         treasure: trea,
         entrances: entr
      }
   }
   init(){
      console.log(this.state);
      if(this.state.x == null || this.state.x === undefined || this.state.x === -1)
         this.state.x = Math.floor(Math.random()*40+1);
      if(this.state.y == null || this.state.y === undefined || this.state.y === -1)
         this.state.y = Math.floor(Math.random()*30+1);
      if(this.state.enemies == null || this.state.enemies === undefined || this.state.enemies === -1)
         this.state.enemies = this.genEnemies(this.genNumEnemies());
      if(this.state.treasure == null || this.state.treasure === undefined)
         this.state.treasure = this.genTreasure(this.state.x,this.state.y);
      if(this.state.entrances == null || this.state.entrances === undefined || this.state.entrances === -1)
         this.state.entrances = this.genEntrances();
      console.log(this.state);
   }

   genNumEnemies(){
      let area = this.state.x*this.state.y;
      if(area < 225)
         return 0;
      if(area >= 225 && area < 900)
         return Math.floor(Math.random()*2+1);
      if(area >= 900 && area < 4225)
         return Math.floor(Math.random()*5+1);
      if(area >= 4225 && area < 11025)
         return Math.floor(Math.random()*18+1);
      if(area >= 11025 && area < 22500)
         return Math.floor(Math.random()*21+1);
      if(area >= 22500)
         return Math.floor(Math.random()*34+1);
   }

   genEnemies(num){
      let result = [];
      for(let k = 0; k < num; k++){
         result[k] = new Enemy(null, (Math.random()*(this.state.x-1)+1), (Math.random()*(this.state.y-1)+1), `bruh${k}`, '#000000', '_common', null, null);
         result[k].init();
      }
      this.state.enemies = result;
   }

   genTreasure(x,y){
      let area = x*y*25;
      if(Math.random()/5+(area/11025) >= 1)
         return true;
      else
         return false;
   }

   genEntrances(){
      let temp = Math.random();
      if(temp <= .25)
         return 1;
      if(temp > .25 && temp <= .5)
         return 2;
      if(temp > .5 && temp <= .75)
         return 3;
      if(temp > .75)
         return 4;
   }
}

export default Room;