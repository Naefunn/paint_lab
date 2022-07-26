const assert = require('assert');
const Decorator = require('../decorator');
const PaintCan = require('../paint_can');
const Room = require('../room');

describe('decorator', function(){
    let decorator;
    let paintCan;
    let room;
    beforeEach(function(){
        decorator = new Decorator('Bob');
        paintCan = new PaintCan(10);
        room = new Room(20)
    });

    it('Starts with empty paint stock', function(){
        const actual = decorator.paintStock;
        assert.deepEqual(actual, []);
    })

    it('should be able to add a can of paint to paint stock', function(){
        decorator.addPaintCan(paintCan);
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, [paintCan]);
    })

    it('should be able to calculate total litres of paint in stock', function(){
        decorator.addPaintCan(paintCan);
        decorator.addPaintCan(paintCan);
        const actual = decorator.checkTotalPaintVolume();
        assert.strictEqual(actual, 20);
    })

    it('should be able to check if there is not enough paint to paint a room', function(){
        decorator.addPaintCan(paintCan);
        const actual = decorator.enoughPaint(room);
        assert.strictEqual(actual, false);
    });

    it('should be able to check if there is enough paint to paint a room', function(){
        decorator.addPaintCan(paintCan);
        decorator.addPaintCan(paintCan);
        const actual = decorator.enoughPaint(room);
        assert.strictEqual(actual, true);
    })

    it('should be able to paint room if enough paint', function(){
        decorator.addPaintCan(paintCan);
        decorator.addPaintCan(paintCan);
        decorator.paintRoom(room);
        const actual = room.painted
        assert.strictEqual(actual, true);
    })
});