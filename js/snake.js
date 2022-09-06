function Snake() {
    this.x = 0;
    this.y = 0;
    this.vx = 1;
    this.vy = 0;

    this.total = 0;
    this.tail = [];

    this.unalive = function() {
        for(var i = 0; i < this.tail.length; i++){
            var seg = this.tail[i];
            if(dist(this.x, this.y, seg.x, seg.y) < 1){
                this.total = 0;
                this.tail = [];
            }
        }
    }

    this.update = function() {
        
        if(this.total === this.tail.length){
            for(var i = 0; i < this.tail.length - 1; i++){
                this.tail[i] = this.tail[i+1];
            }
        }

        this.tail[this.total - 1] = createVector(this.x, this.y);

        this.x += this.vx * scl;
        this.y += this.vy * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }

    this.show = function() {
        fill(255,0,0);
        for(var i = 0; i < this.total; i++){
            rect(this.tail[i].x,this.tail[i].y,scl,scl);
        }
        rect(this.x,this.y,scl,scl);
    }

    this.dir = function(x,y){
        this.vx = x;
        this.vy = y;
    }

    this.eat = function(food){
        if(dist(this.x, this.y, food.x, food.y) < 1){
            this.total++;
            return true;
        }else{
            return false;
        }
    }
}