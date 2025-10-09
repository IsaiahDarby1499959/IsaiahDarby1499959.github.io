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
    createPlatform(100,150,175,13);
    createPlatform(300,250,200,13)
    createPlatform(400,700,175,13)
    createPlatform(800,600,175,13)
    createPlatform(1000,475,150,13)
    createPlatform(600,385,270,13)
    createPlatform(500,150,10,200)
    createPlatform(500,350,100,13)
    createPlatform(600,215,100,13)
    createPlatform(900,375,100,13)
    createPlatform(1,550,150,13)
    createPlatform(150,435,10,128)
    // TODO 3 - Create Collectables
createCollectable("diamond",100,675)
createCollectable("diamond",1200,300)
createCollectable("diamond",650,150)
 createCollectable("diamond",400,200)
 createCollectable("diamond",600,500)   
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
