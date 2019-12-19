const CHARACTERSHEET = (playerInfo, characterType, characterProfession) => {
  const getCharTypeId = characterType => {
    return characterType.id;
  };

  const getCharTypeDescription = characterType => {
    return characterType.description;
  };

  const getCharTypeAbilities = (
    characterType,
    abilityActivity,
    abilityType
  ) => {
    if (abilityActivity) {
      if (abilityType) {
        return characterType.abilities[abilityActivity][abilityType];
      }
      return characterType.abilities[abilityActivity];
    }
  };

  const getAbilityHTMLWithSpellLookup = (abilityArray=[], charTypeObj, abilityActivity, abilityType) => {
    let html = ""
    let possibleSpells = getCharTypeAbilities(charTypeObj, abilityActivity, abilityType)
    let chosenSpellsObjArray
    if(possibleSpells) {
      chosenSpellsObjArray = abilityArray.map((spellObj) => { return possibleSpells.filter((otherSpellObj) => otherSpellObj.id === spellObj )[0]
      })
    }
    return getAbilityHTML(chosenSpellsObjArray)
  }
    

  const getAbilityHTML = (abilityArray=[]) => {
    let html = "";
    abilityArray
      .map(ability => {
        return `
      <div class="spell-card">
        <h5>${ability.id}</h5>
        <p>${ability.description}</p>
      </div>
      `;
      })
      .forEach(abilityHTML => {
        html += abilityHTML;
      });
    return html;
  };

  // BUILD SECTIONS IN HTML
  const buildPlayerInfoSection = playerInfo => {
    return `
      <h1>${playerInfo.id}'s Character Sheet</h1>
      <h2>${playerInfo.campaign ? playerInfo.campaign : "No Campaign"}</h2>
      <br/>
    `;
  };

  const buildCharacterInfoSection = characterInfo => {
    return `
    <h3>${characterInfo.firstName} ${characterInfo.lastName}</h3>
    <h3>${characterInfo.age} years old.</h3>
    <h3>${characterInfo.race}</h3>
    <h3>${characterInfo.height}</h3>
    <h3>${characterInfo.weight}</h3>
    <h3>${characterInfo.eyeColor}</h3>
    <h3>${characterInfo.skinColor}</h3>
    `;
  };

  const buildCharacterSpellSection = (
    spellsHTML,
    cantripsHTML,
    passiveHTML
  ) => {
    return `
    <section>
      ${spellsHTML} 
    </section>
    <section>
      ${cantripsHTML}
    </section>
    <section>
      ${passiveHTML} 
    </section>
    `;
  };

  const buildCharacterSheet = () => {};
  return {
    getCharTypeDescription,
    getCharTypeAbilities,
    getAbilityHTML,
    getAbilityHTMLWithSpellLookup 
  };
};
