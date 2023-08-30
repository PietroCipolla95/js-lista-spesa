/* 

Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

*/

const list = [
    'Pane',
    'Pollo',
    'Cereali',
    'Dentifricio',
    'Lenticchie',
    'Gocciole',
    'Latte',
    'Salumi vari',
    'Piadine',
    'Bagnoschiuma',
    'Patate Fritte',
]

let i = 0; 

while (i < list.length) {

    let listItem = document.createElement('li');
    let output = list[i];
    listItem.append(output);
    document.getElementById('print').append(listItem);
    i++

}















