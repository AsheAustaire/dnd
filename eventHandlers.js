$("#character-type-dropdown").change(ev => {
  let val = ev.target.value;

  if (val === "Strong") {
      CHARACTERSHEET().getAbilityHTML(
        CHARACTERSHEET().getCharTypeAbilities(STRONG, "active", "spells")
    );
    $("#spells").html(`
    ${CHARACTERSHEET().getAbilityHTML(
      CHARACTERSHEET().getCharTypeAbilities(STRONG, "active", "spells")
    )}
    `);
    $("#cantrips").html(`
    ${CHARACTERSHEET().getAbilityHTML(
      CHARACTERSHEET().getCharTypeAbilities(STRONG, "active", "cantrips")
    )}
    `);
    $("#passive").html(`
    ${CHARACTERSHEET().getAbilityHTML(
      CHARACTERSHEET().getCharTypeAbilities(STRONG, "active", "cantrips")
    )}
    `);
  } else if (val === "Intelligent") {
    console.log(INTELLIGENT);
    $("#spells").html(`
      ${CHARACTERSHEET().getAbilityHTML(
        CHARACTERSHEET().getCharTypeAbilities(INTELLIGENT, "active", "spells")
      )} 
     `);
    $("#cantrips").html(`
      ${CHARACTERSHEET().getAbilityHTML(
        CHARACTERSHEET().getCharTypeAbilities(INTELLIGENT, "active", "cantrips")
      )} 
     `);
    // $("#passive").html(`
    // ${CHARACTERSHEET().getAbilityHTML(CHARACTERSHEET().getCharTypeAbilities(INTELLIGENT, "passive"))}
    // `)
  } else if (val === "Agile") {
    $("#spells").html(`
    ${CHARACTERSHEET().getAbilityHTML(
      CHARACTERSHEET().getCharTypeAbilities(AGILE, "active", "spells")
    )}
    `);
    $("#cantrips").html(`
    ${CHARACTERSHEET().getAbilityHTML(
      CHARACTERSHEET().getCharTypeAbilities(AGILE, "active", "cantrips")
    )}
    `);
    $("#passive").html(`
    ${CHARACTERSHEET().getAbilityHTML(
      CHARACTERSHEET().getCharTypeAbilities(AGILE, "passive")
    )}
    `);
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
        console.log("chose a spell");
        chosenSpells.activeAbilities.spells.splice(
          chosenSpells.activeAbilities.spells.indexOf(
            ev.target.firstElementChild.innerText),1
        );
        console.log(chosenSpells.activeAbilities.spells);
      }

      if (ev.target.parentElement.id === "cantrips") {
        console.log("chose a cantrip");
        chosenSpells.activeAbilities.cantrips.splice(
          chosenSpells.activeAbilities.cantrips.indexOf(
            ev.target.firstElementChild.innerText
          ),
          1
        );
        console.log(chosenSpells.activeAbilities.cantrips);
      }
      console.log(ev.target);

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
      console.log(ev.target, chosenSpells);

      if (ev.target.parentElement.id === "spells") {
        console.log("chose a spell");
        console.log(
          chosenSpells.activeAbilities[ev.target.parentElement.id].length
        );
        chosenSpells.activeAbilities[ev.target.parentElement.id].push(
          ev.target.firstElementChild.innerText
        );
        console.log(chosenSpells.activeAbilities.spells);
      }

      if (ev.target.parentElement.id === "cantrips") {
        console.log("chose a cantrip");
        chosenSpells.activeAbilities[ev.target.parentElement.id].push(
          ev.target.firstElementChild.innerText
        );
        console.log(chosenSpells.activeAbilities.cantrips);
      }
    }
  });
  return {};
});

$("#character-profession-dropdown").change();

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
      "active": {
        "spells": [...chosenSpells.activeAbilities.spells],
        "cantrips": [...chosenSpells.activeAbilities.cantrips]
      },
      "passive": [...chosenSpells.passiveAbilities]
    }
  }
  
  $("#modal").addClass("full-page-active")
  $("#character-content").html(MODAL(playerInfo))
})

$("#close").click((ev) => {
  $("#modal").removeClass("full-page-active")
})