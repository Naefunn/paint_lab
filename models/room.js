const Room = function(area, painted = false){
    this.area = area;
    this.painted = painted;
};

Room.prototype.paint = function(){
    if (this.painted === false){
        this.painted = true;
    };
};

module.exports = Room;