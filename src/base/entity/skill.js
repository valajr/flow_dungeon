class Trigger {
    turn;
    damage_deal;
    damage_taken;
    died;
    stage_end;

    constructor({turn=-1, damage_deal=-1, damage_taken=-1, died=-1, stage_end=-1} = {}) {
        this.turn = turn;
        this.damage_deal = damage_deal;
        this.damage_taken = damage_taken;
        this.died = died;
        this.stage_end = stage_end;
    }

    triggered() {}
}

class Skill {
    condition;
    lvl_range;
    exclusive_race_list;
    exclusive_class_list;
    bonus_status;
    stage_bonus_status;
    is_active;
    cooldown;
    repeat_times;
    repeat_trigger;

    constructor({condition, lvl_range=[0, Infinity], exclusive_race_list=[], exclusive_class_list=[], bonus_status=new Status(), 
        stage_bonus_status=new Status(), is_active=false, cooldown=0, repeat_times=0, repeat_trigger=new Trigger()} = {}) {
            this.condition = condition;
            this.lvl_range = lvl_range;
            this.exclusive_race_list = exclusive_race_list;
            this.exclusive_class_list = exclusive_class_list;
            this.bonus_status = bonus_status;
            this.stage_bonus_status = stage_bonus_status;
            this.is_active = is_active;
            this.cooldown = cooldown;
            this.repeat_times = repeat_times;
            this.repeat_trigger = repeat_trigger;
    }

    method() {}
}

class Punch extends Skill {
    constructor() {
        super();
    }

    method(target) {
        console.log(target);
    }
}

class Slash extends Skill {
    constructor() {
        super();
    }

    method(target) {
        console.log(target);
    }
}


// magic missile
// shield bash
// heal
// life steal
// revive
// invoke monster