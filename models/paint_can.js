const PaintCan = function(volume){
    this.volume = volume;
};

PaintCan.prototype.isEmpty = function(){
    return this.volume === 0
};

PaintCan.prototype.empty = function(){
    this.volume  = 0;
};

module.exports = PaintCan;