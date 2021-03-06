window.addEventListener('load', function () {
    console.log('Page is loded');
})


//get elements out of JSON
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let funArray = data.funstuff;
        let randomNumer = Math.floor(Math.random() * funArray.length);
        let dateElement = document.getElementById('Date-name');
        let funElement = document.getElementById('should');
        let imageElement = document.getElementById('f-img');
        let alink = data.Links;
        let aElement = document.getElementById('f-link')


        imageElement.src = funArray[randomNumer].Image;
        dateElement.innerHTML = funArray[randomNumer].Date;
        funElement.innerHTML = funArray[randomNumer].Things;
        aElement.href = funArray[randomNumer].Links;
        console.log(data.funstuff[0].Links)

    })



//Button Interaction//

//Select for all the buttons
let navButtons = document.getElementsByClassName('nav-button');
console.log(navButtons);

//Hide all of the content first
let allContent = document.getElementsByClassName('video-content');
for (let j = 0; j < allContent.length; j++) {
    allContent[j].style.display = "none";
}
//Attach an event listener to all of the buttons
for (let i = 0; i < navButtons.length; i++) {


    navButtons[i].addEventListener('click', function (evt) {

        console.log("a button was clicked!");
        console.log(evt.target.id);

        //Hide all of the content 
        let allContent = document.getElementsByClassName('vd-content');
        for (let h = 0; h < allContent.length; h++) {
            allContent[h].style.display = "none";
        }

        //Create the specific content ID
        let contentID = "content-" + evt.target.id;

        //show the specific content
        let contentToShow = document.getElementById(contentID);
        contentToShow.style.display = "block";

    })

}

//---------P5 CODE----------//
let GRAVITY = 0.2;
let paperball;
let slush;
let soundfx;
let toilet;
let speech;
let inp;
let myFont;

function preload() {

    //create an animation from a sequence of numbered images
    //pass the first and the last file name and it will try to find the ones in between
    slush = loadImage('Assets/IMG/pball.png');
    toilet = loadImage('Assets/IMG/toilet.png');
    paper = loadImage('Assets/IMG/paper2.png');
    soundfx = loadSound('Assets/AUDIO/slush.mp3');
    myFont = loadFont('Assets/FONT/ArchitectsDaughter-Regular.ttf');

}

function setup() {
    let cnv = createCanvas(800, 306);
    cnv.parent('canvas-container');
    bgw = loadImage('Assets/IMG/wall.png');

    //create inputbox
    let inp = createInput('WriteDown Unhappiness');
    inp.parent('p5-input');
    inp.position(-670, -50);
    inp.size(140, 140);

}

function draw() {

    background(bgw);
    fill(0);
    textFont(myFont);
    textAlign(CENTER);
    textSize(20);
    strokeWeight(50);
    text('Slush Unhappiness Here!', width / 2 + 18, height / 2);



    //Sprites

    for (let i = 0; i < allSprites.length; i++) {
        let mySprite = allSprites[i];

        //adding a speed at 90 degrees (down)
        mySprite.addSpeed(GRAVITY, 90);

        //even if they are out of the canvas, sprites keep getting updated
        //consuming precious memory
        //use Sprite.remove() to remove a sprite from the sketch
        if (mySprite.position.y > height + 100)
            mySprite.remove();
    }

    if (frameCount % 10 == 0)
        print('Sprite in the scene: ' + allSprites.length);

    //draw the sprites
    drawSprites();

    image(toilet, 480, 30, 320, 320);
    image(paper, 30, 10, 280, 280)
}

//every mouse press
function mousePressed() {

    if (mouseX > 300 && mouseY < 160 && mouseX < 480 && mouseY > 130) {
        console.log("Here!!");
        //I create a sprite at mouse position
        let newSprite = createSprite(620, 1);
        soundfx.play();
        console.log(mouseX, mouseY);

        //assign an animation
        newSprite.addImage("slush", slush);

        //and set it to a random frame
        newSprite.animation.stop();
        let f = round(random(0, newSprite.animation.getLastFrame()));
        newSprite.animation.changeFrame(f);
    }

}


