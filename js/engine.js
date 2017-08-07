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

        var ctx = document.getElementById(Canvas.ID).getContext('2d');

        // Clear canvas
        ctx.clearRect(0, 0, Canvas.width, Canvas.height);

        // Move player
        Player.move();

        // Draw player
        ctx.fillStyle = Player.color;
        ctx.fillRect(Player.x, Player.y, Player.width, Player.height);
    }
}