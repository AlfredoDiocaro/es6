$(document).ready(function () {

    var counter = 1,
    x = ['ciao', 417, false],
    myArr = [1, 2, 3, 4, 5, ...x];

    var moltiplicazione = (...multipli) => {
        let temp = multipli[0];
        for(let num = 1; num < multipli.length; num++){
            temp = temp * multipli[num]; 
        }
        return temp;
    }
    // Funzione anonima, interpretata al momento dell invocazione/esecuzione 'somma()', dichiarata come un OGGETTO.
    var somma = (...addendi) => {
        let temp = 0;
        for(let num of addendi){
            temp += num; 
        }
        return temp;
    }
    // Funzione dichiarata, interpretata prima dell'esecuzione di altro codice, il browser
    // automaticamente legge tutte le named al caricamento.
    function sum(...addendi){
        let temp = 0;
        for(let num of addendi){
            temp += num; 
        }
        return temp;
    }


    console.log("anonymous function somma: " + somma(5,4,5,2,4));
    console.log("named function somma: " + sum(5,4,5,2,4));
    console.log(moltiplicazione(5,4,5,2));


    /**
     * BUTTON EXAMPLE
     * Nell' esempio sottostante dichiariamo la callback dell' evento
     * keyup del bottone nel nostro html sia in declaration mode (funzione normale),
     * sia in operator mode(funzione anonima,un vero e proprio oggetto di tipo Function)
     */


    //dichiarata: interpretata e eseguita al loading della pagina
    $("#mioInput").keyup(function (event) {
        if (event.keyCode == 13) {
            $(".mioBottone").click();
        }
    });

    //anonima: interpretata all'invocazione di 'premi()'
    var premi = function(){
        $("#mioInput").keyup(function (event) {
            if (event.keyCode == 13) {
                $(".mioBottone").click();
            }
        });
    }

    /**
     * Con l'esempio sopracitato, se eseguiamo la versione dichiarata, al ("#mioInput") al caricamento della pagina
     * verrà associato l'evento keyupo con la relativa logica;
     * Se eseguiamo la versione anonima, il bottone non avrà bindato l'evento keyup al caricamento della pagina,
     * ma dovremo invocare il metodo premi al momento del bisogno.
     * 
     *  END BUTTON EXAMPLE
     *  */

    $('.mioBottone').on('click', function (e) {
        lista.aggiungi();
    });

        //normale
        function listGest(index){
            $('.listElem'+index).on('mouseover',function(){
    
                $('.delete'+index).css('display','inline-block');
    
            }).on('mouseout',function(){
    
                $('.delete'+index).css('display','none');
    
            }).on('click',myArr ,function(e){
                console.log(e);
            });
        }
        //anonima
        var gestList = function(index){
            $('.listElem'+index).on('mouseover',function(){
    
                $('.delete'+index).css('display','inline-block');
    
            }).on('mouseout',function(){
    
                $('.delete'+index).css('display','none');
    
            }).on('click',myArr ,function(e){
                console.log(e);
            });
        }


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

            gestList(index);

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
    
})
