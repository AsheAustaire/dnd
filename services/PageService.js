function PageService(UiService) {
  const main = document.querySelector("main");
  
  function renderCharacterCreate() {
    main.innerHTML = oldHtml();
  }
  
  function renderHomepage() {
    main.innerHTML = homepageHtml();
    const cardWrapper = document.querySelector("#card-wrapper");
    cardWrapper.innerHTML = UiService.returnMaterialCard("Create Character");

    
    const characterCreateCard = document.querySelector("#create-character");

    characterCreateCard.addEventListener("click", () => {
      renderCharacterCreate();
    });
  }

  return {
    renderHomepage
  };
}
