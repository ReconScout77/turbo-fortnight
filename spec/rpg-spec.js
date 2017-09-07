import {PlayerChar} from './../js/rpg.js';

describe('PlayerChar and its methods', function () {

  it('should create a new PlayerChar object', function() {
    let newChar = new PlayerChar("dwarf", "rogue", [9, 17, 12, 15, 13, 18]);
    expect(newChar.race).toEqual("dwarf");
    expect(newChar.classification).toEqual("rogue");
    expect(newChar.stats).toEqual([9, 17, 12, 15, 13, 18]);
    expect(newChar.maxHealth).toEqual(500);
    expect(newChar.level).toEqual(1);
    expect(newChar.health).toEqual(500);
    expect(newChar.fatigue).toEqual(100);
    expect(newChar.inventory).toEqual({});
  });
});
