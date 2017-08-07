var Player = {

    x: Canvas.width / 2,
    y: Canvas.height * 0.75,

    xVelocity: 0,
    yVelocity: 0,

    maxSpeed: 3,
    friction: 0.85,

    height: 10,
    width: 10,
    color: 'white',

    move: function() {

        // First apply friction to both velocities.
        Player.xVelocity *= Player.friction;
        Player.yVelocity *= Player.friction;

        // Set velocity to 0 if velocity is at a neligible amount.
        if (Math.abs(Player.xVelocity) < 0.001) { Player.xVelocity = 0; }
        if (Math.abs(Player.yVelocity) < 0.001) { Player.yVelocity = 0; }

        // Add current velocity to player's x and y coordinates.
        Player.x += Player.xVelocity;
        Player.y += Player.yVelocity;

        // Add velocity for key presses.
        if (Engine.keyMap[Engine.key.leftArrow]) {
            Player.xVelocity--;
        }

        if (Engine.keyMap[Engine.key.rightArrow]) {
            Player.xVelocity++;
        }

        if (Engine.keyMap[Engine.key.upArrow]) {
            Player.yVelocity--;
        }

        if (Engine.keyMap[Engine.key.downArrow]) {
            Player.yVelocity++;
        }

        // Enforce canvas boundaries.
        if (Player.x > Canvas.width - Player.width) {
            Player.x = Canvas.width - Player.width;
        } else if (Player.x < 0) {
            Player.x = 0;
        }
        
        if (Player.y > Canvas.height - Player.height) {
            Player.y = Canvas.height - Player.height;
        } else if (Player.y < 0) {
            Player.y = 0;
        }
    }
}