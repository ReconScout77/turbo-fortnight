import {PlayerChar} from './../js/player.js';
import {Monster} from './../js/monster.js';
import {Weapon} from './../js/weapon.js';


let newChar;
let newMonster;
let newWeapon;


describe('Monster and its methods', function () {

  it('should create a new Monster object', function() {
    newMonster = new Monster("giant spider", [9, 17, 12, 15, 13, 18]);
    expect(newMonster.race).toEqual("giant spider");
    expect(newMonster.stats).toEqual([9, 17, 12, 15, 13, 18]);
    expect(newMonster.maxHealth).toEqual(100);
    expect(newMonster.level).toEqual(1);
    expect(newMonster.health).toEqual(100);
    expect(newMonster.fatigue).toEqual(50);
  });

  it('should decrease player health by 20', function() {
    let newbie = new PlayerChar("tiefling", "archer", [8, 8, 8, 8, 8, 8]);
    newMonster.attack(newbie);
    expect(newbie.health).toEqual(480);
  });

});

describe('Weapon and its methods', function () {

  it('should create a new Weapon object', function() {
    newWeapon = new Weapon("great axe");
    expect(newWeapon.kind).toEqual("great axe");
    expect(newWeapon.durability).toEqual(100);
  });


});

describe('PlayerChar and its methods', function () {

  it('should create a new PlayerChar object', function() {
    newChar = new PlayerChar("dwarf", "rogue", [9, 17, 12, 15, 13, 18]);
    expect(newChar.race).toEqual("dwarf");
    expect(newChar.classification).toEqual("rogue");
    expect(newChar.stats).toEqual([9, 17, 12, 15, 13, 18]);
    expect(newChar.maxHealth).toEqual(500);
    expect(newChar.level).toEqual(1);
    expect(newChar.health).toEqual(500);
    expect(newChar.fatigue).toEqual(100);
    expect(newChar.inventory.length).toEqual(2);
  });

  it('should decrease the monster health by 10', function () {
    console.log(newWeapon);
    console.log(newMonster);
    newChar.attack(newWeapon, newMonster);
    console.log("OUTPUT MONSTER: "+newMonster);
    expect(newMonster.health).toEqual(90);
  });

  it('should decrease the monster health by 5', function () {
    console.log(newWeapon);
    console.log(newMonster);
    newWeapon.kind = "bow and arrow";
    newChar.attack(newWeapon, newMonster);
    console.log("OUTPUT MONSTER: "+ newMonster);
    expect(newMonster.health).toEqual(85);
  });

  it('should decrease the monster health by 20', function () {
    console.log(newWeapon);
    console.log(newMonster);
    newWeapon.kind = "flail";
    newChar.attack(newWeapon, newMonster);
    console.log("OUTPUT MONSTER: "+ newMonster);
    expect(newMonster.health).toEqual(65);
  });
});
