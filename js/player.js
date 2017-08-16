var Player = {

    x: Canvas.width / 2,
    y: Canvas.height - 70,

    xVelocity: 0,

    maxSpeed: 3,
    friction: 0.85,

    height: 10,
    width: 100,
    color: 'red',

    move: function() {

        // First apply friction to both velocities.
        Player.xVelocity *= Player.friction;

        // Set velocity to 0 if velocity is at a neligible amount.
        if (Math.abs(Player.xVelocity) < 0.001) { Player.xVelocity = 0; }

        // Add current velocity to player's x coordinates.
        Player.x += Player.xVelocity;

        // Add velocity for key presses.
        if (Engine.keyMap[Engine.key.leftArrow]) {
            Player.xVelocity--;
        }

        if (Engine.keyMap[Engine.key.rightArrow]) {
            Player.xVelocity++;
        }
        // Enforce canvas boundaries.
        if (Player.x > Canvas.width - Player.width) {
            Player.x = Canvas.width - Player.width;
        } else if (Player.x < 0) {
            Player.x = 0;
        }
    }
}