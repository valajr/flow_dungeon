class Race {
  name;
  description;
  rarity;
  lvl_range;
  bonus_status;
  skill_list;
  nature_affinity_list;

  constructor({name='Generic', description='No description.', rarity=0, lvl_range=[0,5], bonus_status=new Status(), skill_list=[], nature_affinity_list=[]} = {}) {
    this.name = name;
    this.description = description;
    this.rarity = rarity;
    this.lvl_range = lvl_range;
    this.bonus_status = bonus_status;
    this.skill_list = skill_list;
    this.nature_affinity_list = nature_affinity_list;   
  }
}
