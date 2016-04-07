$(function($) {


    var monsters = [];

    var adult = 2;
    var juvenile = 3;
    var children = 4;
    var egg = 5;


    $("#adult-value").text(adult);
    $("#juvenile-value").text(juvenile);
    $("#children-value").text(children);
    $("#egg-value").text(egg)

    $("#adult-slider").slider({
        value: 10,
        min: 0,
        max: 50,
        step: 1,
        slide: function(event, ui) {
            adult = ui.value;
            $("#adult-value").text(adult);
        }
    });

    $("#juvenile-slider").slider({
        value: 5,
        min: 0,
        max: 50,
        step: 1,
        slide: function(event, ui) {
            juvenile = ui.value;
            $("#juvenile-value").text(juvenile);
        }
    });

    $("#children-slider").slider({
        value: 5,
        min: 0,
        max: 50,
        step: 1,
        slide: function(event, ui) {
            children = ui.value;
            $("#children-value").text(children);
        }
    });

    $("#egg-slider").slider({
        value: 5,
        min: 0,
        max: 50,
        step: 1,
        slide: function(event, ui) {
            egg = ui.value;
            $("#egg-value").text(egg);
        }
    });

    $("#repopulate").click(function() {
        repopulate(adult, juvenile, children, egg, board)
    });

    var board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-6, 10, 6, -2],
        axis: true,
        showCopyright: false
    });
    var w = $(document).width();
    
    var h = $(document).height();

    h=h-$("#toprow").height();


    var containerSize = Math.min(w, h);
    board.resizeContainer(containerSize * .95, containerSize * .95);

    repopulate(adult, juvenile, children, egg, board);

    function repopulate(adult, juvenile, children, egg, board) {
        var numMonstersOnBoard = monsters.length;
        for (i = 0; i < numMonstersOnBoard; i++) {
            board.removeObject(monsters[i])
        }


        var monsterArray = monsterAdultLinks();
        var monsterArraySize = monsterArray.length;
        monsters = [];
        var m, i;

        for (i = 0; i < adult; i++) {
            monsters.push((board.create('image', [monsterArray[Math.floor(Math.random() * monsterArraySize)],
                [Math.random() * 10 - 6, Math.random() * 10 - 2],
                [2, 2]
            ])));
        }
        var monsterArray = monsterJuvenileLinks();
        var monsterArraySize = monsterArray.length;

        for (i = 0; i < juvenile; i++) {
            monsters.push((board.create('image', [monsterArray[Math.floor(Math.random() * monsterArraySize)],
                [Math.random() * 10 - 6, Math.random() * 10 - 2],
                [2, 2]
            ])));
        }

        var monsterArray = monsterChildrenLinks();
        var monsterArraySize = monsterArray.length;

        for (i = 0; i < children; i++) {
            monsters.push((board.create('image', [monsterArray[Math.floor(Math.random() * monsterArraySize)],
                [Math.random() * 10 - 6, Math.random() * 10 - 2],
                [2, 2]
            ])));
        }

        var monsterArray = monsterEggLinks();
        var monsterArraySize = monsterArray.length;

        for (i = 0; i < egg; i++) {
            monsters.push((board.create('image', [monsterArray[Math.floor(Math.random() * monsterArraySize)],
                [Math.random() * 10 - 6, Math.random() * 10 - 2],
                [2, 2]
            ])));
        }
    }

    // for (m of monsters) {

    //     m.on('over', function() {
    //         this.moveTo([Math.random() * 6 - 4, Math.random() * 10 - 2], 1000);
    //     });
    // }
})(jQuery);