export class PlayerChar {
  constructor(race, classification, stats) {
    this.race = race;
    this.classification = classification;
    this.maxHealth = 500;
    this.level = 1;
    this.health = this.maxHealth;
    this.fatigue = 100;
    this.inventory = {};
    this.stats = stats;
  }

  action(){
    let result = true;
    let rand = Math.floor(Math.random() * 20) + 1;
    if (rand <= 10) {
      result = false;
    }else {
      result = true;
    }
    return result;
  };
}
