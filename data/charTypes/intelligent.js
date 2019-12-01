const INTELLIGENT = {
  id: "intelligent",
  abilities: {
    active: {
      spells: [
        {
          id: "suggest",
          description:
            "Make a brief suggestion. Must be reasonable and non self-harm inflicting. Enemy is charmed if they fail a wisdom saving throw. Use once per short rest."
        },
        {
          id: "comprehend languages",
          description:
            "Use your deep understanding of grammar to piece together any language you hear or read based of interpretation. Use once per short rest."
        },
        {
          id: "detect magic",
          description:
            "Detect if †here is any magical presence within 30 feet of you. Magic you see this way appears as an aura. Spell can penetrate light barriers. Takes around 3-5 minutes to sense. Use once per short rest."
        },
        {
          id: "friends",
          description:
            "For the duration, you have advantage on Charisma checks directed at one creature of your choice that isn't hostile toward you. "
        },
        {
          id: "Cure Wounds",
          description:
            "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st."
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
  },
  passive: [
    {
      id: "",
      description: ""
    }
  ]
};
