const MODAL = (compiledForm) => {
  const playerInfo = compiledForm.playerInformation;
  const charInfo = compiledForm.characterInformation

  const getCharTypeObjFromString = (charTypeString) => {
    if(charTypeString === "strong") {
      return STRONG
    } else if(charTypeString === "intelligent") {
      return INTELLIGENT
    } else if (charTypeString === "agile") {
      return AGILE
    }
  }

  const getProfessionDescription = (profTypeString) => {
    console.log(profTypeString)
    if(profTypeString === "Weapon Crafter") {
      return WEAPON_CRAFTER.description
    } else if(profTypeString === "Merchant") {
      return MERCHANT.description
    } else if (profTypeString === "Animal Handler") {
      return ANIMAL_HANDLER.description
    }
  }

  return `
  <div class="character-sheet">
  <h1 class="page-title">CHARACTER SHEET:</h1>
  <hr>
  <h1>PLAYER INFORMATION</h1>
  <h2>Player Name:</h2>
  <h3>${playerInfo.firstName} ${playerInfo.lastName}</h3>
  <h2>Player Email Address:</h2>
  <h3>${playerInfo.email}</h3>
  <hr/>
  <h1>CHARACTER INFORMATION</h1>
  <h2>Character Name:</h2>
  <h3>${charInfo.firstName} ${charInfo.lastName}</h3>
  <h2>Character Appearance:</h2>
  <h3><b>AGE</b>: ${charInfo.age}</h3>
  <h3><b>SPECIES</b>: ${charInfo.race}</h3>
  <h3><b>HEIGHT</b>: ${charInfo.height}</h3>
  <h3><b>WEIGHTS</b>: ${charInfo.weight}</h3>
  <h3><b>EYE COLOR</b>: ${charInfo.eyeColor}</h3>
  <h3><b>SKIN COLOR</b>: ${charInfo.eyeColor}</h3>
  <hr/>
  <h1>ABILITIES AND SPELLS</h1>
  <h2 style="margin-bottom: 20px;">CHARACTER PROFESSION: ${compiledForm.skills.profType.toUpperCase()}</h2>
  <h3 class="spell-type">Description</h3>
  <p>${getProfessionDescription(compiledForm.skills.profType)}</p>
  
  <h2>CHARACTER TYPE: ${compiledForm.skills.charType.toUpperCase()}</h2>
  <h3 class="spell-type">Description</h3>
  <p>${getCharTypeObjFromString(compiledForm.skills.charType.toLowerCase()).description}</p>
  <h3 class="spell-type">Abilities</h3>
  ${CHARACTERSHEET().getAbilityHTMLWithSpellLookup(chosenSpells.activeAbilities.spells, getCharTypeObjFromString(compiledForm.skills.charType.toLowerCase()),"active", "spells")}
  <h3 class="spell-type">Cantrips</h3>
  ${CHARACTERSHEET().getAbilityHTMLWithSpellLookup(chosenSpells.activeAbilities.cantrips, getCharTypeObjFromString(compiledForm.skills.charType.toLowerCase()), "active", "cantrips")}
  </div>
  `
};
