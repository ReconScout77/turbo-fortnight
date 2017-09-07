
import {Monster} from './../js/monster.js';
import {Weapon} from './../js/weapon.js';


export class PlayerChar {
  constructor(race, classification, stats) {
    this.race = race;
    this.classification = classification;
    this.maxHealth = 500;
    this.level = 1;
    this.health = this.maxHealth;
    this.fatigue = 100;
    this.stats = stats;
    this.inventory = [{gold: '500'}, {shield: false}];
  }


  generateRand(){
    let rand = Math.floor(Math.random() * 20) + 1;
    return rand;
  }


  attack(weapon, monster){
    let rand = 11; //change to random for real deal
    if (rand <= 10) {
      return;
    } else {
      switch (weapon.kind) {
        case 'great axe':
          monster.health -= 10;
          break;
        case 'bow and arrow':
          monster.health -= 5;
          break;
        case 'flail':
          monster.health -= 20;
          break;
        default:
          break;
      }
    }
  }



}
