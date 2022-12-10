 var body = DocumentApp.getActiveDocument().getBody();
      // Create a two-dimensional array containing the cell contents.
  var cells = [
    ['  HERO '],
    ['https://raw.githubusercontent.com/neerajgrg/helixblocks/main/blocks/cards/card1.jpeg']
  ];

  // Build a table from the array.
  body.appendTable(cells);
