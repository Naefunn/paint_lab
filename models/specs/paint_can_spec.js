const assert = require('assert');
const PaintCan = require('../paint_can');

describe('Paint_can', function(){
    let paintCan;

    beforeEach(function(){
        paintCan = new PaintCan(10);
    });

    it('Should have a volume', function(){
        const actual = paintCan.volume;
        assert.strictEqual(actual, 10);
    });

    it('Should be able to check if empty', function(){
        const actual = paintCan.isEmpty();
        assert.strictEqual(actual, false);
    });

    it('Should be able to empty itself', function(){
        paintCan.empty();
        const actual = paintCan.isEmpty();
        assert.strictEqual(actual, true);
    });


});