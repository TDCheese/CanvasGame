var Engine = {

    intervalID: NaN,
    intervalSpeed: 20,

    keyMap: {},
    key: {
        leftArrow: 37,
        upArrow: 38,
        rightArrow: 39,
        downArrow: 40
    },

    init: function() {

        Canvas.init();

        document.onkeydown = document.onkeyup = function(e) {
            e = e || event; // IE Hack
            Engine.keyMap[e.keyCode] = e.type == 'keydown';
        };

        Engine.intervalID = setInterval(Engine.run, Engine.intervalSpeed);
    },

    run: function() {

        // Move player
        Player.move();

        // Re-draw canvas
        Canvas.draw();

    }
}