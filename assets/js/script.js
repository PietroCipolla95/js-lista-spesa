/* 

Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

*/

const list = [
    'item_1',
    'item_2',
    'item_3',
    'item_4',
    'item_5',
    'item_6',
    'item_7',
    'item_8',
    'item_9',
    'item_10',
    'item_11',
]

let i = 0; 

while (i < list.length) {

    let listItem = document.createElement('li');
    document.getElementById('print').append(listItem);
    document.writeln(list[i]); 
    i++
    

    
   
}















