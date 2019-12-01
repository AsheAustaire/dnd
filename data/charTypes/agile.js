const AGILE = {
  id: "agile",
  abilities: {
    active: {
      spells: [
        {
          id: "shadow walker",
          description:
            "While stealthing, you may move yourself into a shadow to avoid detection.(20 foot range) Roll a new D20 to re-stealth, with advantage. (Once per rest)"
        },
        {
          id: "feign death",
          description:
            "Convince any creature that you are dead if creature fails a wisdom saving throw against DC."
        },
        {
          id: "short rest",
          description: "Regenerate 1d10 health"
        },
        {
          id: "aid",
          description:
            "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration."
        },
        {
          id: "charismatic",
          description:
            "Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful."
        },
        {
          id: "calm emotions",
          description:
            "You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects. You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime. Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the GM rules otherwise."
        }
      ],
      cantrips: [
        {
          id: "virtue",
          description:
            "You touch a creature with at least 1 hit point. It gains temporary hit points equal to 1d4 + your spellcasting ability modifier for the duration."
        },
        {
          id: "bonfire",
          description:
            "You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire’s space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it moves into the bonfire’s space for the first time on a turn or ends its turn there. The bonfire ignites flammable objects in its area that aren’t being worn or carried. The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
        },
        {
          id: "control fire",
          description:
            "Choose a nonmagical flame that you see and fits in a 5-foot cube. You affect it in one of the following ways: * You expand the flame 5 feet in one direction if fuel is present in the new location. * You extinguish the flames within the cube.* You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour. * You cause simple shapes to appear within the flames and animate as you like. The shapes last for 1 hour. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss an effect as an action."
        },
        {
          id: "guidance",
          description:
            "Touch a willing creature. It can add a 1d4 to one ability check of its choice. The spell then ends. It can roll the die before or after making the check."
        },
        {
          id: "vicious mockery",
          description:
            "Choose a creature you can see. If it can hear you, it must pass a Wisdom save or take 1d4 psychic damage and have disadvantage on its next attack roll before the end of its next turn. The damage increases by 1d4 when you reach 5th, 11th, and 17th level."
        }
      ]
    },
    passive: [
      {
        id: "",
        description: ""
      }
    ]
  }
};
