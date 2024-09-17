class Entity {
  lvl;
  race;
  class_list;
  class_expertise_list;
  base_status;
  status;
  gear_list;
  base_skill;
  skill_list;

  constructor(lvl, race, class_list=[], class_expertise_list, base_status, gear_list=[], base_skill) {
    this.lvl = lvl;
    this.race = race;
    this.class_list = class_list;
    this.class_expertise_list = class_expertise_list;
    this.base_status = base_status;
    this.gear_list = gear_list;
    this.base_skill = base_skill;

    let class_bonus = new Status();
    let class_skill_list = [];
    for(var cl in class_list) {
      class_bonus.sum(cl);
      class_skill_list.add(cl.skill_list);
    }

    let gear_bonus = new Status();
    let gear_skill_list = [];
    for(var gear in gear_list) {
      gear_bonus.sum(gear);
      gear_skill_list.add(gear.skill_list);
    }

    let new_health = base_status.health + race.bonus_status.health + class_bonus.health + gear_bonus.health;
    let new_mana = base_status.mana + race.bonus_status.mana + class_bonus.mana + gear_bonus.mana;

    this.status = new Status({
      health: new_health,
      maxHealth: new_health,
      mana: new_mana,
      maxMana: new_mana,
      speed: base_status.speed + race.bonus_status.speed + class_bonus_speed + gear_bonus_speed,
      accuracy: base_status.accuracy + race.bonus_status.accuracy + class_bonus_accuracy + gear_bonus_accuracy,
      strength: new Damage({
        fisical: base_status.strength.fisical + race.bonus_status.strength.fisical
                 + class_bonus_strength.fisical + gear_bonus_strength.fisical,
        magic:   base_status.strength.magic + race.bonus_status.strength.magic
                 + class_bonus_strength.magic + gear_bonus_strength.magic,
      }),
      resistance: new Damage({
        fisical: base_status.resistance.fisical + race.bonus_status.resistance.fisical
                 + class_bonus_resistance.fisical + gear_bonus_resistance.fisical,
        magic:   base_status.resistance.magic + race.bonus_status.resistance.magic 
                 + class_bonus_resistance.magic + gear_bonus_resistance.magic,
      }),
    });
    this.skill_list = base_skill.concat(race.skill_list, class_skill_list, gear_skill_list);
  }
}
