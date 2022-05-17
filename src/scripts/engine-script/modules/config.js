/* All engine config are here */

let
CANVAS       = document.getElementById('canvas'),
CTX          = canvas.getContext('2d'),
canvasWidth  = CANVAS.width = 1000,
canvasHeight = CANVAS.height = 550,
startX       = 0,
startY       = 0,
FPS          = 90,
ZOOM         = 0.1,
mouseClick   = false,
mouseWheel   = 0,
mouseObj,
Intro;