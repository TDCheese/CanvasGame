var Canvas = {

    width: 600,
    height: 600,
    backgroundColor: 'background-color: black;',
    ID: "JavascriptGame",
    containerID: "game",

    init: function() {

        let can = document.createElement('canvas');
        can.id = Canvas.ID;
        can.width = Canvas.width;
        can.height = Canvas.height;
        can.style = Canvas.backgroundColor;

        document.getElementById(Canvas.containerID).appendChild(can);
    },

    draw: function() {
        var ctx = document.getElementById(Canvas.ID).getContext('2d');

        // First clear the canvas before we redraw everything at it's current position.
        ctx.clearRect(0, 0, Canvas.width, Canvas.height);

        // Draw player
        ctx.fillStyle = Player.color;
        ctx.fillRect(Player.x, Player.y, Player.width, Player.height);

    }
}