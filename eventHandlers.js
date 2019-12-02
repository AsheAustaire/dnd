$("#character-type-dropdown").change(ev => {
  let val = ev.target.value;
  chosenSpells.activeAbilities.spells = []
  chosenSpells.activeAbilities.cantrips = []

  if (val === "Strong") {
    $("#spells").html(`
    <h2>Abilities</h2>
    <h3>Spells (CHOOSE UP TO THREE)</h3>
    ${CHARACTERSHEET().getAbilityHTML(
      CHARACTERSHEET().getCharTypeAbilities(STRONG, "active", "spells")
    )}
    `);
    $("#cantrips").html(`
    <h3>Cantrips (CHOOSE UP TO THREE)</h3>
    ${CHARACTERSHEET().getAbilityHTML(
      CHARACTERSHEET().getCharTypeAbilities(STRONG, "active", "cantrips")
    )}
    `);
    // $("#passive").html(`
    // ${CHARACTERSHEET().getAbilityHTML(
    //   CHARACTERSHEET().getCharTypeAbilities(STRONG, "active", "cantrips")
    // )}
    // `);
  } else if (val === "Intelligent") {
    $("#spells").html(`
      <h2>Abilities</h2>
      <h3>Spells (CHOOSE UP TO THREE)</h3>
      ${CHARACTERSHEET().getAbilityHTML(
        CHARACTERSHEET().getCharTypeAbilities(INTELLIGENT, "active", "spells")
      )} 
     `);
    $("#cantrips").html(`
    <h3>Cantrips (CHOOSE UP TO THREE)</h3>
      ${CHARACTERSHEET().getAbilityHTML(
        CHARACTERSHEET().getCharTypeAbilities(INTELLIGENT, "active", "cantrips")
      )} 
     `);
    // $("#passive").html(`
    // ${CHARACTERSHEET().getAbilityHTML(CHARACTERSHEET().getCharTypeAbilities(INTELLIGENT, "passive"))}
    // `)
  } else if (val === "Agile") {
    $("#spells").html(`
    <h2>Abilities</h2>
    <h3>Spells (CHOOSE UP TO THREE)</h3>
    ${CHARACTERSHEET().getAbilityHTML(
      CHARACTERSHEET().getCharTypeAbilities(AGILE, "active", "spells")
    )}
    `);
    $("#cantrips").html(`
    <h3>Cantrips (CHOOSE UP TO THREE)</h3>
    ${CHARACTERSHEET().getAbilityHTML(
      CHARACTERSHEET().getCharTypeAbilities(AGILE, "active", "cantrips")
    )}
    `);
    // $("#passive").html(`
    // ${CHARACTERSHEET().getAbilityHTML(
    //   CHARACTERSHEET().getCharTypeAbilities(AGILE, "passive")
    // )}
    // `);
  }
  // SPELL CARD lOGIC

  // Manage Player Chosen Abilities
  // Toggle Chosen
  $("div.spell-card").click(ev => {
    // VISUALS - INACTIVE
    if ($(ev.target).hasClass("spell-card-active")) {
      $(ev.target).removeClass("spell-card-active");
      //END VISUALS
      if (ev.target.parentElement.id === "spells") {
        chosenSpells.activeAbilities.spells.splice(
          chosenSpells.activeAbilities.spells.indexOf(
            ev.target.firstElementChild.innerText),1
        );
      }

      if (ev.target.parentElement.id === "cantrips") {
        chosenSpells.activeAbilities.cantrips.splice(
          chosenSpells.activeAbilities.cantrips.indexOf(
            ev.target.firstElementChild.innerText
          ),
          1
        );
      }

      return true;
    }


    if ($(ev.target).hasClass("spell-card")) {
      if (
        chosenSpells.activeAbilities[ev.target.parentElement.id].length === 3
      ) {
        return false;
      } 
      //VISUALS - ACTIVE
      $(ev.target).addClass("spell-card-active");
      //END VISUALS

      if (ev.target.parentElement.id === "spells") {
        chosenSpells.activeAbilities[ev.target.parentElement.id].push(
          ev.target.firstElementChild.innerText
        );
      }

      if (ev.target.parentElement.id === "cantrips") {
        chosenSpells.activeAbilities[ev.target.parentElement.id].push(
          ev.target.firstElementChild.innerText
        );
      }
    }
  });
  return {};
});

$("#character-profession-dropdown").change((ev) => {
  let val = ev.target.value;

  if(val === "Weapon Crafter") {
   $("#profession").html(`
    <h2>Description Of Profession</h2>
    ${WEAPON_CRAFTER.description}
   `)
  }
  
  if(val === "Merchant") {
    $("#profession").html(`
    <h2>Description Of Profession</h2>
    ${MERCHANT.description}
    `)
  }

  if(val === "Animal Handler") {
    $("#profession").html(`
    <h2>Description Of Profession</h2>
    ${ANIMAL_HANDLER.description}
    `)
  }

});

// Spell Cards
// 

$("#character-submit").click((ev) => {
  let playerInfo =  {
    "playerInformation": {
      "firstName": $('#first-name-field').val(),
      "lastName": $("#last-name-field").val(),
      "email": $("#email-field").val(),
      "campaignNumber": $("#campaign-number-field").val()
    },
    "characterInformation": {
      "firstName": $("#character-first-name-field").val(),
      "lastName": $("#character-last-name-field").val(),
      "age": $("#character-age-field").val(),
      "race": $("#character-race-field").val(),
      "height": $("#character-heights-field").val(),
      "weight": $("#character-weight-field").val(),
      "eyeColor": $("#character-eye-color-field").val(),
      "skinColor": $("#skin-color-field").val()
    },
    "skills": {
      "charType": $("#character-type-dropdown").val(),
      "profType": $("#character-profession-dropdown").val(),
      "active": {
        "spells": [...chosenSpells.activeAbilities.spells],
        "cantrips": [...chosenSpells.activeAbilities.cantrips]
      },
      "passive": [...chosenSpells.passiveAbilities]
    }
  }
  
  // $("#modal").addClass("full-page-active")
  $(".pageWrapper").html(MODAL(playerInfo))
})

$("#close").click((ev) => {
  // $("#modal").removeClass("full-page-active")
})