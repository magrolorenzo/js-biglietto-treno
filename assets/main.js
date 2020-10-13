// Il programma deve chiedere all'utente il numero di km da percorrere
// e la sua età.
// Il prezzo del biglietto dipende dalla distanza da percorrere
// e costa € 0.21 / km

// è previsto uno sconto del 20% per il minorenni
// gli over 65 hanno diritto ad uno sconto del 40%

var sconto_under_18 = 0.8;
var sconto_over_65 = 0.6;

var km = prompt('Quanti KM devi percorrere?');

if (isNaN(km) == true) {
    // Se i Km non sono un numero, da errore
    alert('Km inseriti non Validi - Ricaricare la Pagina');
    } else if (km == 0){
            // Se inserisce 0 Km, da errore
            alert('0 Km inseriti - Ricaricare la Pagina');
    } else {
        var età = parseInt(prompt('Quanti anni hai?'));
        if (isNaN(età) == true){
            // Se l'età inserita non è un numero, da errore
            alert('Età inserita non Valida - Ricaricare la Pagina');
        } else if (età == 0 ){
                // Se l'età inserita è uguale a 0, da errore
                alert('Età inserita pari a 0 - Ricaricare la Pagina');
        } else {

            var tariffa = km * 0.21;
            document.getElementById('km').innerHTML = km + ' Km';
            document.getElementById('age').innerHTML = età + ' anni';
            document.getElementById('price').innerHTML = tariffa.toFixed(2) + ' €';

            if (età < 18) {
                // Se l'età è minore di 18, applica lo sconto
                document.getElementById('discount').innerHTML = '20 %';
                document.getElementById('price').style.textDecoration = "line-through";
                tariffa = tariffa * sconto_under_18;
                document.getElementById('price-discount').innerHTML = tariffa.toFixed(2) + ' €';
            } else if (età > 65) {
                // Se l'età è maggiore di 65, applica lo sconto
                document.getElementById('discount').innerHTML = '40 %';
                document.getElementById('price').style.textDecoration = "line-through";
                tariffa = tariffa * sconto_over_65;
                document.getElementById('price-discount').innerHTML = tariffa.toFixed(2) + ' €';
            }
        }
    }
