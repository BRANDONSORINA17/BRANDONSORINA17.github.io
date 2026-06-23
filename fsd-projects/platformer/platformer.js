$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(700, 650, 330, 28,"blue");
    createPlatform(300, 500, 330, 28,"black");
    createPlatform(950, 550, 400, 34,"red");
    createPlatform(300, 200, 30, 300,"white");
    createPlatform(500, 680, 150, 20,"green");
    createPlatform(700, 435, 150,20,"white");
    // TODO 3 - Create Collectables
    createCollectable("diamond", 950, 500, 1.5);
    createCollectable("steve",1300,50,1.5)
    createCollectable("diamond", 400, 400, 1.5);
    

    // TODO 4 - Create Cannons
createCannon("top", 400, 2300)
createCannon("left", 500, 2400)
createCannon("right", 600, 2300)
createCannon("right", 700, 2400)
createCannon("right", 700, 2400)
createCannon("top", 800, 2200)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
