const oldHtml = () => 
`
<iframe style="width: 100%; height: 100%;">
<!DOCTYPE html>
<html>
  <!-- HEAD -->
  <head>
    <title>Ashe's DnD</title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <script src="./data/charTypes/strong.js"></script>
    <script src="./data/charTypes/intelligent.js"></script>
    <script src="./data/charTypes/agile.js"></script>

    <script src="./data/profTypes/animalHandler.js"></script>
    <script src="./data/profTypes/weaponCrafter.js"></script>
    <script src="./data/profTypes/merchant.js"></script>

    <script
      src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
      integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
      crossorigin="anonymous"
    ></script>
    <link
      href="https://fonts.googleapis.com/css?family=Alatsi|Domine&display=swap"
      rel="stylesheet"
    />
    <link href="style.css" rel="stylesheet" />
    <link href="characterSheetStyle.css" rel="stylesheet" />
  </head>

  <!-- BODY -->
  <body>
    <div id="modal" class="full-page">
      <article id="characterSheetModal" class="myModal myModal-active">
        <svg
          id="close"
          class="close"
          viewPort="0 0 12 12"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2" />
          <line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2" />
        </svg>
        <section id="character-content"></section>
      </article>
    </div>

    
    <!-- JAVASCRIPT -->
    <script src="./playerInfo.js"></script>
    <script src="./charSheetUI.js"></script>
    <script src="./characterSheet.js"></script>
    <script src="./eventHandlers.js"></script>
    <script></script>
  </body>
</html>
</iframe>
`