$(document).ready(function () {

    var counter = 1;

    var x = ['ciao', 417, false];
    var myArr = [1, 2, 3, 4, 5, ...x];

    var moltiplicazione = (...multipli) => {
        let temp = multipli[0];
        for(let num = 1; num < multipli.length; num++){
            temp = temp * multipli[num]; 
        }
        return temp;
    }

    var somma = (...addendi) => {
        let temp = 0;
        for(let num of addendi){
            temp += num; 
        }
        return temp;
    }

    console.log(somma(5,4,5,2,4));
    console.log(moltiplicazione(5,4,5,2));


    var lista = (function () {
        
        // private members
        function eliminaValore(number) {
            /* alternativa brutale
             $(document).on('click', ' div', function() {
                $(this).closest('li').remove());
            });
             */
            $('.listElem' + number).remove();
        }

        function copiaValore() {

            let index = counter;
            let valore = $('#mioInput').val();
            console.log('adding: ' + index);
            $('#result').append(
                '<li class="listElem' + index + '">' +
                valore +
                '<button class="delete delete' + index + '"><i class="fa fa-minus elem' + index + '"></i></button></li>'
            );

            $('.delete' + index).bind('click', (e) => {
                console.log("deleting: " + index);
                eliminaValore(index);
                counter--;
                index--;
            });

            $('.listElem'+index).on('mouseover',function(){

                $('.delete'+index).css('display','inline-block');

            }).on('mouseout',function(){

                $('.delete'+index).css('display','none');

            }).on('click',myArr ,function(e){
                console.log(e);
            });

            counter++;

        }

        function helpers(){
            
        }

        // public members
        return {
            //Alias: Nome Funzione
            aggiungi: copiaValore,
            rimuovi: eliminaValore
        };
    })();

    $("#mioInput").keyup(function (event) {
        if (event.keyCode == 13) {
            $(".mioBottone").click();
        }
    });

    $('.mioBottone').on('click', function (e) {
        lista.aggiungi();
    });

})
