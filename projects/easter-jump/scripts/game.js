const renderer = new Renderer();

renderer.setBackgroundGradient("#0ea5e9", "#e0f2fe");

const bunny = new Sprite("assets/lapinou.png", 100, 142);
const platformSprite = new Sprite("assets/platform.png", 200, 54);

const ySpeedChanges = 0.25;
const arrowsChanges = 20;
const jumpHeight = 10;
const platformYSpeed = 3;
const platformNb = 5;
const maxBetweenPlateforms = 250;

const windowWidth = renderer.canvas.width;
const windowHeight = renderer.canvas.height;

var bunnyX = windowWidth/2;
var bunnyY = windowHeight/2;
var ySpeed = 0;
var gameOver = false;
const ecartEntrePlateformes = windowHeight/platformNb;
const toursEntrePlateformes = Math.round(ecartEntrePlateformes/platformYSpeed);
var lastplatformNb = 0;
var tourLoop = 0;
var score = 0;

const plateforms = [];
for (i=0; i<platformNb; i++) {plateforms.push({x: 0, y: -(windowHeight/2)})}

plateforms[0] = {x: bunnyX, y: bunnyY-54}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

renderer.mainLoop(() => {
    renderer.clear();
    const events = renderer.pollEvents();
    if (!gameOver) {
        if (Utils.isKeyDown(events, 'ArrowRight')) {
            bunnyX += arrowsChanges;
            if (bunnyX > windowWidth) {bunnyX = 0;} //Si le lapin touche le bord droit, il arrive à gauche
        } else if (Utils.isKeyDown(events, 'ArrowLeft')) {
            bunnyX -= arrowsChanges;
            if (bunnyX < 0) {bunnyX = windowWidth} //Si le lapin touche le bord gauche, il arrive à droite
        }

        //Empêche les plateformes de tomber en dessous de l'écran
        tourLoop++;
        if (tourLoop % toursEntrePlateformes == 0) {
            oldX = plateforms[lastplatformNb].x;
            lastplatformNb++;
            if (lastplatformNb==platformNb) {lastplatformNb=0}
            newX = plateforms[lastplatformNb].x;
            newX = oldX + getRandomInt(maxBetweenPlateforms*2)-maxBetweenPlateforms;
            if (newX > windowWidth) {
                newX = windowWidth-getRandomInt(maxBetweenPlateforms);
            } else if (newX < 0) {
                newX = getRandomInt(maxBetweenPlateforms);
            }
            plateforms[lastplatformNb].x = newX;
            plateforms[lastplatformNb].y = (windowHeight/2);
        }

        var touchPlateform = false;

        for (plateform of plateforms) {
            // Descente/apparition des plateformes
            plateform.y -= platformYSpeed;
            renderer.drawSprite(platformSprite, plateform.x-100, plateform.y);

            //Vérifie si le lapin touche la plateforme
            if (Math.abs((bunnyY-54) - plateform.y) < 5 && Math.abs(bunnyX-plateform.x) < 140) {
                touchPlateform = true;
            }
        }

        if (touchPlateform && (bunnyY < (windowHeight/4) || tourLoop<platformNb*toursEntrePlateformes) && ySpeed < 0) {
            ySpeed = jumpHeight;
        } else {
            ySpeed -= ySpeedChanges;
            if (bunnyY==(windowHeight/4)) {
                ySpeed -= ySpeedChanges;
            }
        }
        bunnyY += ySpeed;

        if (bunnyY < -(windowHeight/2)-100) {
            gameOver = true;
            score = tourLoop;
        } else if (bunnyY > (windowHeight/4) && tourLoop>platformNb*toursEntrePlateformes) {
            bunnyY = (windowHeight/4);
        }

        renderer.drawSprite(bunny, bunnyX-50, bunnyY);

    } else {
        var coeff = windowWidth/1600
        renderer.drawText("GAME OVER", coeff*200, coeff*225, coeff*200);
        renderer.drawText("Score: " + score, coeff*125, coeff*75, coeff*450);
        renderer.drawText("Press R to restart", coeff*65, coeff*75, coeff*535);
        renderer.drawText("Number of platforms:" + platformNb, coeff*50, coeff*900, coeff*390);
        renderer.drawText("Platform speed: " + platformYSpeed, coeff*50, coeff*900, coeff*455);
        renderer.drawText("Platform max distance: " + maxBetweenPlateforms, coeff*50, coeff*900, coeff*520)
        renderer.drawText("Player fall velocity: " + ySpeedChanges, coeff*50, coeff*900, coeff*585);
        renderer.drawText("Player move speed: " + arrowsChanges, coeff*50, coeff*900, coeff*650);
        renderer.drawText("Player jump height: " + jumpHeight, coeff*50, coeff*900, coeff*715);
        if (Utils.isKeyDown(events, 'r')) {
            location.reload();
        }
    }
});