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
    }
}