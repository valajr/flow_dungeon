class Damage {
  fisical;
  magic;

  constructor({fisical=0, magic=0} = {}) {
    this.fisical = fisical;
    this.magic = magic;
  }
};

/**
 * Class to create a status of an Entity.
 */
class Status {
  health;
  max_health;
  mana;
  max_mana;
  speed;
  accuracy;
  total_points;
  strength;
  resistance;
  
	constructor({health=0, max_health=health, mana=0, max_mana=mana, speed=0, accuracy=0, total_points,
    strength=new Damage(), resistance=new Damage()} = {}) {
      this.health = health;
      this.max_health = max_health;
      this.mana = mana;
      this.max_mana = max_mana;
      this.speed = speed;
      this.accuracy = accuracy;
      this.total_points = total_points?? max_health + max_mana + speed + accuracy;
      this.strength = strength;
      this.resistance = resistance;
  }

  sum(...sum_status) {
    for(let status of sum_status) {
      this.health += status.health;
      this.max_health += status.max_health;
      this.mana += status.mana;
      this.max_mana += status.max_mana;
      this.speed += status.speed;
      this.accuracy += status.accuracy;
      this.total_points += status.total_points;
      this.strength.fisical += status.strength.fisical;
      this.strength.magic += status.strength.magic;
      this.resistance.fisical += status.resistance.fisical;
      this.resistance.magic += status.resistance.magic;
    }
  }
}
