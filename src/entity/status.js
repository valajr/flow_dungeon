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
  
	constructor({health=0, max_health=0, mana=0, max_mana=0, speed=0, accuracy=0, 
    strength=new Damage(), resistance=new Damage()} = {}) {
      this.health = health;
      this.max_health = max_health;
      this.mana = mana;
      this.max_mana = max_mana;
      this.speed = speed;
      this.accuracy = accuracy;
      this.total_points = max_health + max_health + speed + accuracy;
      this.strength = strength;
      this.resistance = resistance;
  }

  sum(sum_status) {
    this.health += sum_status.health;
    this.max_health += sum_status.max_health;
    this.mana += sum_status.mana;
    this.max_mana += sum_status.max_mana;
    this.speed += sum_status.speed;
    this.accuracy += sum_status.accuracy;
    this.total_points += sum_status.total_points;
    this.strength.fisical += sum_status.strength.fisical;
    this.strength.magic += sum_status.strength.magic;
    this.resistance.fisical += sum_status.resistance.fisical;
    this.resistance.magic += sum_status.resistance.magic;
  }
}
