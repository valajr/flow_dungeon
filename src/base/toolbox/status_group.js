class StatusGroup {

	constructor(...statusList) {
		let newStatus = new Status();
		for(let status of statusList) {
      newStatus.health += status.health;
      newStatus.max_health += status.max_health;
      newStatus.mana += status.mana;
      newStatus.max_mana += status.max_mana;
      newStatus.speed += status.speed;
      newStatus.accuracy += status.accuracy;
      newStatus.total_points += status.total_points;
      newStatus.strength.fisical += status.strength.fisical;
      newStatus.strength.magic += status.strength.magic;
      newStatus.resistance.fisical += status.resistance.fisical;
      newStatus.resistance.magic += status.resistance.magic;
    }
		return newStatus;
	}
}