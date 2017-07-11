
//Pizarrón - Board
(function(){

    self.Board = function(width, height){

        this.width = width;
        this.height = height;
        this.playing = false; //si se está jugando
        this.game_over = false; //Cunado alguien gana

        this.bars = [];
        this.ball = null;

    };

    //Modificar el prototipo de la clase para colocar los métodos de la misma
    self.Board.prototype = {

        //Para retornar todos los elementos que hay en el tablero
        get elements(){

            var elements = this.bars;
            elements.push(this.ball); // Se agrega la pelota al juego

            return elements;

        }

    };

})();

//dibujar  la pelota

(function(){
    self.Ball = function(x,y,radius,board) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed_y = 0;
        this.speed_x = 3;
        this.board = board;

        board.ball = this;
        this.kind = "circle";

    }
}) ();


//Se dibujan las barras y lo siguiente se auto ejecuta
(function(){

    self.Bar = function(x,y,width,height,board){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;

        this.board.bars.push(this); //Se agrega un nuevo elemento al board para uqe haya otra barra

        //Para dibujar la barra
        this.kind = "rectangle"; //Se indica que es un rectángulo
        this.speed = 30; // configurar la velocidad con que se mueven las barras

    };

    //Se modifica el prototype de la función de arriba para mover el objeto, esto sirve para separar las cosas
    self.Bar.prototype = {

        //Mover hacia abajo
        down: function(){

            this.y += this.speed;


        },

        //Mover hacia arriba
        up: function(){

            this.y -= this.speed;

        },

        toString: function () {

            return "x: "+this.x+" y: "+this.y;
        }

    };

})();

//Creamos una clase que se encarga de dibujar todo el tablero.
(function(){

    // Esto dibujará todos los elementos de la vista
    self.BoardView = function(canvas,board){

        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;

        //Se dibuja un contexto con el cual se dibuja en javascriot
        this.ctx = canvas.getContext("2d");

    };

    //Se añade un elemento al protorype del BoardView
    //Dibuja los elementos que hay en el board en un ciclo
    self.BoardView.prototype = {

        clean: function () {
            this.ctx.clearRect(0,0,this.board.width,this.board.height);
        },

        draw: function(){

            for(var i = this.board.elements.length -1; i >= 0; i-- ){

                var el = this.board.elements[i];

                draw(this.ctx,el);

            }

        },
        play : function() {
            this.clean();
            this.draw();
        }

    };

    //Se dibujan elementos en pantalla (las barras)
    function draw(ctx, element){

        // Se verifica que el elemento a comprar tiene algún tipo primero


            //Depende el tipo que sea el objeto, se dibuja de cierta manera
            switch(element.kind){

                case "rectangle":
                    ctx.fillRect(element.x, element.y, element.width, element.height);
                    break;
                case "circle":
                    ctx.beginPath();
                    ctx.arc(element.x,element.y,element.radius,0,7);
                    ctx.fill();
                    ctx.closePath();
                    break;
                }

            }


})();

var board = new Board(800,400);
var bar = new Bar(20, 100, 40, 100, board);
var bar_2 = new Bar(735, 100, 40, 100, board);
var canvas = document.getElementById('canvas');
var board_view = new BoardView(canvas, board);
var ball = new Ball(350,100,10,board);



document.addEventListener("keydown", function(ev){
    ev.preventDefault();
    if (ev.keyCode == 38) {

        bar.up();

    } else if (ev.keyCode == 40){

        bar.down();
    } else if (ev.keyCode === 87) {
        // W
        bar_2.up();
    } else if (ev.keyCode === 83) {
        
        //S
        bar_2.down();
    }

    //console.log(bar.toString());
    //console.log(""+bar);
    console.log(""+bar_2);


});

//Se ejecuta el método main (de más abajo)
//self.addEventListener("load", main);

window.requestAnimationFrame(controller);

//Función que va a ejecutar todos los elementos
function controller(){

    board_view.play();
    window.requestAnimationFrame(controller);

}