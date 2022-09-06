function Food() {
    this.x = floor(random(floor(width / scl))) * scl;
    this.y = floor(random(floor(height / scl))) * scl;

    this.show = function() {
        fill(0,200,255);
        rect(this.x,this.y,scl,scl);
    }  
    
    this.pickLocation = function(){
        this.x = floor(random(floor(width / scl))) * scl;
        this.y = floor(random(floor(height / scl))) * scl;
    }
}

