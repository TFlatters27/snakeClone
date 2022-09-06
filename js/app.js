//this project will be a snake clone with a functioning AI(maybe using generational evolution)
var scl = 20;

var snake;
var food;

function keyPressed() {
    if(keyCode === UP_ARROW) {
        snake.dir(0,-1);
    }else if(keyCode === DOWN_ARROW){
        snake.dir(0,1);
    }else if(keyCode === LEFT_ARROW){
        snake.dir(-1,0);
    }else if(keyCode === RIGHT_ARROW){
        snake.dir(1,0);
    }
}

function setup() {
    createCanvas(600,600);
    frameRate(10);

    snake = new Snake();
    food = new Food();
}

function draw() {
    background(50);
    snake.unalive();
    snake.update();
    snake.show();

    if(snake.eat(food)){
        food.pickLocation();
    }

    food.show();
}