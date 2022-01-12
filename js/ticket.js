/*
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
*/
console.log('js ok');

let firstLastName = '';
let userDistance = '';
let userAge = '';

const enterButton = document.getElementById('create');


enterButton.addEventListener('click', function(){
    firstLastName = document.getElementById('flname').value;
    userDistance = document.getElementById('kmtodo').value;
    userAge = document.getElementById('agecheck').value;
   console.log('User Name: ' + firstLastName);
   console.log('User Distance: ' + userDistance);
   console.log('User Age: ' + userAge);
   
   let price = userDistance * 0.21;
   
   if (userAge === 'under18'){
       price = price * 0.8;
       document.getElementById('offer').innerText = 'Sconto Minorenni';
    } else if (userAge === 'over65'){
        price = price * 0.6;
        document.getElementById('offer').innerText = 'Sconto Over 65';
        
    } 
   
   console.log('price: ' + price + '€');

   
   document.getElementById('ticket-price').innerText = price + '€'  ;
   document.getElementById('user-name').innerText = firstLastName;

   let carriageNumber = document.getElementById('ncarriage');
   carriageNumber = Math.floor(Math.random() * 100);
   document.getElementById('ncarriage').innerText = ` ${carriageNumber} `;

   
   let cpCode = document.getElementById('cpcode');
   cpCode = Math.floor(Math.random() * 100000);
   document.getElementById('cpcode').innerText = ` ${cpCode} `;


   console.log('Carriage N: ' + carriageNumber); 
   console.log('CP Code: ' + cpCode); 
   
   
})
