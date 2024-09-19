| Attribute        | Format                                                       | Description |
| ---------------- | ------------------------------------------------------------ | ----------- |
| Name             | String                                                       |             |
| Description      | String                                                       |             |
| Level            | Number                                                       |             |
| Type             | [[ItemType]]                                                 |             |
| Material         | [[Modifier]]                                                 |             |
| ModifierList     | [[Modifier]][]                                               |             |
| BonusStatus      | [[StatusGroup]] ([[ItemType]] + [[Modifier]] + ModifierList) |             |
| Status           | Function([[Status]] * Level)                                 |             |
| BaseStatus       | [[Status]]                                                   |             |
| SkillList        | [[Skill]][]                                                  |             |
| PassiveSkillList | [[Skill]][]                                                  |             |
