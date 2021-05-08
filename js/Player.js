class Player {
  constructor(){
    this.index = null;
    this.xPos=0;
    this.distance = 0;
    this.name = null;
    this.place=0
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      xPos:this.xPos,
      place:this.place
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
      console.log(allPlayers)
    })
  }
  getFinishedPlayers(){
    var finishedPlayersRef=database.ref('finishedPlayers')
    finishedPlayersRef.on("value",function(data){
      finishedPlayers=data.val()
    })
  }

  static updateFinishedPlayers(){
    database.ref('/').update({
      finishedPlayers:finishedPlayers+1
    })
    this.place+=1
  }
}