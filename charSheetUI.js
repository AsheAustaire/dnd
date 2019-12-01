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

  return `
  <h1>PLAYER INFORMATION</h1
  <h1>${playerInfo.firstName} ${playerInfo.lastName}</h1>
  <h1>${playerInfo.email}</h1>

  <h1>CHARACTER INFORMATION</h1
  <h2>${charInfo.firstName} ${charInfo.lastName}</h2>
  <h2>${charInfo.age}, ${charInfo.race}, </h2>
  <h2>${charInfo.height}, ${charInfo.weight}</h2>
  <h2>${charInfo.eyeColor}, ${charInfo.skinColor}</h2>
  <h2>${compiledForm.skills.charType}</h2>

  <h2>ABILITIES AND SPELLS</h2>
  <h3>Abilities</h3>
  ${CHARACTERSHEET().getAbilityHTMLWithSpellLookup(chosenSpells.activeAbilities.spells, getCharTypeObjFromString(compiledForm.skills.charType.toLowerCase()),"active", "spells")}
  <h3>Cantrips</h3>
  ${CHARACTERSHEET().getAbilityHTMLWithSpellLookup(chosenSpells.activeAbilities.cantrips, getCharTypeObjFromString(compiledForm.skills.charType.toLowerCase()), "active", "cantrips")}
  `
};
