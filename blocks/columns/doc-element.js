 var body = DocumentApp.getActiveDocument().getBody();
      // Create a two-dimensional array containing the cell contents.
  var cells = [
    ['  COLUMNS '],
    ['Row 2, Cell 1', 'Row 2, Cell 2']
  ];

  // Build a table from the array.
  body.appendTable(cells);
