
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

    };

    //Se modifica el prototype de la función de arriba para mover el objeto, esto sirve para separar las cosas
    self.Bar.prototype = {

        //Mover hacia abajo
        down: function(){


        },

        //Mover hacia arriba
        up: function(){


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

        draw: function(){

            for(var i = this.board.elements.length -1; i >= 0; i-- ){

                var el = this.board.elements[i];

                draw(this.ctx,el);

            }

        }

    };

    //Se dibujan elementos en pantalla (las barras)
    function draw(ctx, element){

        // Se verifica que el elemento a comprar tiene algún tipo primero
        if( element !== null && element.hasOwnProperty("kind")){

            //Depende el tipo que sea el objeto, se dibuja de cierta manera
            switch(element.kind){

                case "rectangle":{
                    ctx.fillRect(element.x, element.y, element.width, element.height);
                    break;
                }

            }

        }

    }

})();


//Se ejecuta el método main (de más abajo)
window.addEventListener("load", main);

//Función que va a ejecutar todos los elementos
function main(){

    var board = new Board(800,400);
    var bar_1 = new Bar(20, 100, 40, 100, board);
    var bar_2 = new Bar(735, 100, 40, 100, board);
    var canvas = document.getElementById('canvas');
    var board_view = new BoardView(canvas, board);


    board_view.draw();

}