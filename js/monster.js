export class Monster {
  constructor(race, stats) {
    this.race = race;
    this.stats = stats;
    this.maxHealth = 100;
    this.health = this.maxHealth;
    this.fatigue = 50;
    this.level = 1;
  }

  generateRand(){
    let rand = Math.floor(Math.random() * 20) + 1;
    return rand;
  }

  attack(player){
    let rand = 11; //change to random for real deal
    if (rand <= 10) {
      return;
    } else {
      player.health -= 20;
    }
  }
}
