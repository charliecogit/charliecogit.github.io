"use strict";

(function bouncingballs(global) {

    var x1 = 600;
    var x2 = 0;
    var y1 = 0;
    var y2 = 300;
    var dx1 = 1;
    var dx2 = 1;
    var dy1 = 1;
    var dy2 = 2;

    var x3 = 300;
    var y3 = 150;
    var dx3 = 1;
    var dy3 = 1.5;
    var rot = 0;

    var WIDTH = 600;
    var HEIGHT = 300;
    var draw;
    var rect, c1, c2;

    function init() {

        draw = global.SVG('drawing').size(600, 300).attr({ 'font-size': 10 }).fill('#f06');
        rect = draw.rect(100, 100).attr({ fill: 'yellow' });
        c1 = draw.circle(20).center(x1, y1).attr({ fill: 'green' });
        c2 = draw.circle(25).center(x2, y2).attr({ fill: 'blue' });
        draw.rect(100, 100).center(150, 150).draggable();


        rect.radius(30);
        rect.cx(x3);
        rect.cy(y3);

        setInterval(drawAll, 10);
    }

    function drawAll() {
        draw1();
        draw2();
        draw3();


    }

    function draw1() {

        if (x1 + dx1 > WIDTH || x1 + dx1 < 0)
            dx1 = -dx1;
        if (y1 + dy1 > HEIGHT || y1 + dy1 < 0)
            dy1 = -dy1;

        x1 += dx1;
        y1 += dy1;
        c1.move(x1, y1);
    }

    function draw2() {

        if (x2 + dx2 > WIDTH || x2 + dx2 < 0)
            dx2 = -dx2;
        if (y2 + dy2 > HEIGHT || y2 + dy2 < 0)
            dy2 = -dy2;

        x2 += dx2;
        y2 += dy2;
        c2.move(x2, y2)
    }

    function draw3() {


        rot += 1;


        if (x3 + dx3 > WIDTH || x3 + dx3 < 0)
            dx3 = -dx3;
        if (y3 + dy3 > HEIGHT || y3 + dy3 < 0)
            dy3 = -dy3;

        x3 += dx3;
        y3 += dy3;
        // rect.cx(x3);
        // rect.cy(y3);
        rect.transform({ rotation: rot });

    }

    init();

})(window);