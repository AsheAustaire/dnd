function myCharacterHtml() {
return `<article class="pageWrapper my-character">
      <!-- PLAYER INFORMATION-->
      <section>
        <div>
          <h1>About You</h1>
          <h2>Player Information</h2>
          <form class="form-wrapper">
            <div class="form-group">
              <h3>Player First Name</h3>
              <input
                type="text"
                class="form-control"
                id="first-name-field"
                placeholder="Enter Player First Name"
              />
              <h3>Player Last Name</h3>
              <input
                type="text"
                class="form-control"
                id="last-name-field"
                placeholder="Enter Player Last Name"
              />
              <h3>Email Address</h3>
              <input
                type="email"
                class="form-control"
                id="email-field"
                placeholder="Enter Email Address"
              />
              <h3>Campaign Number</h3>
              <input
                type="text"
                class="form-control"
                id="campaign-number-field"
                placeholder="Campaign Number"
              />
            </div>
          </form>
        </div>
      </section>
      <!-- BUILD YOUR CHARACTER -->
      <section>
        <div>
          <h1>About Your Character</h1>
          <h2>Character Information</h2>
          <form class="wrapper">
            <div class="form-group">
              <h3>Character First Name</h3>
              <input
                type="text"
                class="form-control"
                id="character-first-name-field"
                placeholder="Enter Character First Name"
              />
              <h3>Character Last Name</h3>
              <input
                type="text"
                class="form-control"
                id="character-last-name-field"
                placeholder="Enter Character Last Name"
              />
              <h3>Character Age</h3>
              <input
                type="text"
                class="form-control"
                id="character-age-field"
                placeholder="Enter Character Age"
              />
              <h3>Character Race</h3>
              <input
                type="text"
                class="form-control"
                id="character-racee-field"
                placeholder="Enter Character Race"
              />
              <h3>Character Height</h3>
              <input
                type="text"
                class="form-control"
                id="character-heights-field"
                placeholder="Enter Character Height"
              />
              <h3>Character Weight</h3>
              <input
                type="text"
                class="form-control"
                id="character-weight-field"
                placeholder="Enter Character Weight"
              />
              <h3>Character Eye Color</h3>
              <input
                type="text"
                class="form-control"
                id="character-eye-color-field"
                placeholder="Enter Character Eye Color"
              />
              <h3>Character Skin Color</h3>
              <input
                type="text"
                class="form-control"
                id="skin-color-field"
                placeholder="Enter Character Skin Color"
              />
            </div>
          </form>
        </div>
      </section>
      <!-- BUILD YOUR SKILLS -->
      <section>
        <div>
          <h1>Build Your Skills</h1>
          </form>
          <h2 style="margin-top: 60px">Character Profession</h2>
          <form class="form-wrapper-wide">
            <select
              name="character-profession-dropdown"
              id="character-profession-dropdown"
              class="form-control dropdown"
              autocomplete="off"
            >
              <option selected>You Must Select One</option>
              <option>Weapon Crafter</option>
              <option>Merchant</option>
              <option>Animal Handler</option>
            </select>
            <div id="profession"></div>
          </form>
          <h2 style="margin-top: 60px">Character Type</h2>
          <form class="form-wrapper-wide">
            <div class="form-group"></div>
            <select
              name="character-type-dropdown"
              id="character-type-dropdown"
              class="form-control dropdown"
              autocomplete="off"
            >
              <option selected>You Must Select One</option>
              <option>Strong</option>
              <option>Intelligent</option>
              <option>Agile</option>
            </select>
            <div id="abilities"></div>
              
              
              <div id="spells"></div>
              
              <div id="cantrips"></div>
            </div>
          <br />
          <br />
          <br />
              <button id="character-submit" class="btn btn-primary">
                GENERATE CHARACTER SHEET
              </button>
        </div>
      </section>
    </article>`
}