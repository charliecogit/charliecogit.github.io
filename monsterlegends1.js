$(function($) {

    var board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-6, 10, 6, -2],
        axis: true,
        showCopyright: false
    });

    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    var containerSize = Math.min(w, h);
    var monsters=[];

    var txt = board.create('text',[-6,9.75, 'SpaceBar: New Monsters'], {fontSize:14});


    board.resizeContainer(containerSize, containerSize);
    repopulate(1,15, board);
    $(document).keypress(function(e){
        if(e.which==32) repopulate(1,15,board)
});



    function repopulate(type, number, board) {
        
        var numMonstersOnBoard = monsters.length;
        for (i=0;i<numMonstersOnBoard;i++) {
            board.removeObject(monsters[i])
        }
        
        
        var monsterArray = monsterJuvenileLinks();
        var monsterArraySize = monsterArray.length;
        monsters = [];
        var m, i;

        for (i = 0; i < number; i++) {
            monsters[i] = (board.create('image', [monsterArray[Math.floor(Math.random() * monsterArraySize)],
                [Math.random() * 6 - 4, Math.random() * 10 - 2],
                [2, 2]
            ]));
        }
    }

    // for (m of monsters) {

    //     m.on('over', function() {
    //         this.moveTo([Math.random() * 6 - 4, Math.random() * 10 - 2], 1000);
    //     });
    // }
})(jQuery);