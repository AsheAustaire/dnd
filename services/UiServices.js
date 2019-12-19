function UiService() {

  function returnMaterialCard(title) {
    return `
      <div class="mdc-card">
        <div class="mdc-card__primary-action">
          <div class="mdc-card__media mdc-card__media--square">
            <div id="${title.toLowerCase().replace(" ", "-")}" class="mdc-card__media-content">${title}</div>
          </div>
        </div>
        <div class="mdc-card__actions">
          <div class="mdc-card__action-buttons">
            <button 
              id
              class="mdc-button mdc-card__action mdc-card__action--button"
            >
              <span class="mdc-button__label">Random</span>
            </button>
            <button
              class="mdc-button mdc-card__action mdc-card__action--button"
            >
              <span class="mdc-button__label">Saved</span>
            </button>
          </div>
          <div class="mdc-card__action-icons">
            <button
              class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
              title="Share"
            >
              share
            </button>
            <button
              class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
              title="More options"
            >
              more_vert
            </button>
          </div>
        </div>
      </div> 
    `
  }

  // RETURN OBJECT
  return {
    returnMaterialCard
  };
}
