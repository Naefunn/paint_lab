const Decorator = function(name){
    this.name = name;
    this.paintStock = [];
};

Decorator.prototype.addPaintCan = function(paintCan){
    this.paintStock.push(paintCan);
};

Decorator.prototype.checkTotalPaintVolume = function(){
    let total = 0;
    for (i = 0; i < this.paintStock.length; i++){
        total += this.paintStock[i].volume;
    };
    return total;
};

Decorator.prototype.enoughPaint = function(room){
    const totalPaint = this.checkTotalPaintVolume()
    if(totalPaint >= room.area){
        return true;
    } else {
        return false;
    };
};

Decorator.prototype.paintRoom = function(room){
    const paintable = this.enoughPaint(room);
    if(paintable === true){
        room.paint();
    };
};

module.exports = Decorator;